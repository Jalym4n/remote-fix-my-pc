import { corsHeaders } from 'npm:@supabase/supabase-js@2/cors'
import { createClient } from 'npm:@supabase/supabase-js@2'
import { z } from 'npm:zod@3.23.8'

const GATEWAY_URL = 'https://connector-gateway.lovable.dev/resend'

const BodySchema = z.object({
  name: z.string().trim().min(1).max(120),
  contact: z.string().trim().min(1).max(200),
  clientType: z.string().trim().max(80).optional().default(''),
  urgency: z.string().trim().max(80).optional().default('Standard'),
  message: z.string().trim().min(1).max(5000),
  source: z.string().trim().max(80).optional().default('get-help'),
})

const escapeHtml = (s: string) =>
  s.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]!))

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') return new Response('ok', { headers: corsHeaders })

  try {
    const LOVABLE_API_KEY = Deno.env.get('LOVABLE_API_KEY')
    const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY')
    if (!LOVABLE_API_KEY) throw new Error('LOVABLE_API_KEY is not configured')
    if (!RESEND_API_KEY) throw new Error('RESEND_API_KEY is not configured')

    const parsed = BodySchema.safeParse(await req.json())
    if (!parsed.success) {
      return new Response(JSON.stringify({ error: parsed.error.flatten().fieldErrors }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      })
    }
    const { name, contact, clientType, urgency, message, source } = parsed.data

    // Detect email vs phone in the contact field for storage
    const looksLikeEmail = /@/.test(contact)
    const email = looksLikeEmail ? contact : 'unknown@noreply.altctrl.run'
    const phone = looksLikeEmail ? null : contact

    const supabase = createClient(
      Deno.env.get('SUPABASE_URL')!,
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!,
    )

    const { error: dbError } = await supabase.from('contact_submissions').insert({
      name,
      email,
      phone,
      subject: `${clientType || 'Unspecified'} · ${urgency}`,
      message,
      source,
    })
    if (dbError) console.error('DB insert failed:', dbError)

    const html = `
      <h2>New help request — ALTCTRL</h2>
      <p><strong>Name:</strong> ${escapeHtml(name)}</p>
      <p><strong>Contact:</strong> ${escapeHtml(contact)}</p>
      <p><strong>Client type:</strong> ${escapeHtml(clientType || '—')}</p>
      <p><strong>Urgency:</strong> ${escapeHtml(urgency)}</p>
      <p><strong>Source:</strong> ${escapeHtml(source)}</p>
      <hr/>
      <p><strong>Message:</strong></p>
      <pre style="font-family:inherit;white-space:pre-wrap">${escapeHtml(message)}</pre>
    `

    const resp = await fetch(`${GATEWAY_URL}/emails`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${LOVABLE_API_KEY}`,
        'X-Connection-Api-Key': RESEND_API_KEY,
      },
      body: JSON.stringify({
        from: 'ALTCTRL Site <onboarding@resend.dev>',
        to: ['jaleed01@altctrl.run'],
        reply_to: looksLikeEmail ? contact : undefined,
        subject: `[${urgency}] Help request from ${name}`,
        html,
      }),
    })

    const data = await resp.json()
    if (!resp.ok) {
      console.error('Resend error', resp.status, data)
      return new Response(JSON.stringify({ error: 'Email send failed', details: data }), {
        status: 502,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      })
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    })
  } catch (err) {
    console.error('send-contact-request error:', err)
    const msg = err instanceof Error ? err.message : 'Unknown error'
    return new Response(JSON.stringify({ error: msg }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    })
  }
})
