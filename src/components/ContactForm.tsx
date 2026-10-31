import { useState, type FormEvent } from "react";
import { useSearchParams } from "react-router-dom";
import { Phone } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { trackEvent } from "@/lib/analytics";
import { PHI_NOTE, PHONE_DISPLAY, PHONE_TEL, PRODUCT_NAME } from "@/lib/site";

const CONTACT_INTENTS = [
  { value: "pilot-od", label: `${PRODUCT_NAME} pilot (optometry clinic)`, prefix: "[PILOT-OD]" },
  { value: "pilot-ret", label: `${PRODUCT_NAME} (retina / ophthalmology clinic)`, prefix: "[PILOT-RET]" },
  { value: "biz-it", label: "Business IT for my clinic or office", prefix: "[BIZ-IT]" },
  { value: "home-it", label: "Home or personal IT help", prefix: "[HOME-IT]" },
  { value: "labs", label: "Labs / partnership / suggest a workflow", prefix: "[LABS]" },
  { value: "press", label: "Press or investors", prefix: "[PRESS]" },
] as const;

const inputCls =
  "bg-background border text-foreground text-base p-3.5 outline-none focus:border-primary transition-colors rounded-md w-full";

type Errors = Partial<Record<"intent" | "name" | "contact" | "message", string>>;

const ContactForm = () => {
  const [params] = useSearchParams();
  const initial = CONTACT_INTENTS.some((i) => i.value === params.get("intent")) ? (params.get("intent") as string) : "";
  const [intent, setIntent] = useState<string>(initial);
  const [errors, setErrors] = useState<Errors>({});
  const [submitting, setSubmitting] = useState(false);
  const [sent, setSent] = useState(false);
  const [failed, setFailed] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (submitting) return;
    const form = e.currentTarget;
    const fd = new FormData(form);
    const v = (k: string) => String(fd.get(k) || "").trim();
    const data = { name: v("name"), contact: v("contact"), org: v("org"), message: v("message") };

    const next: Errors = {};
    if (!intent) next.intent = "Please choose what we can help with.";
    if (!data.name) next.name = "Please enter your name.";
    if (!data.contact) next.contact = "Please enter an email or phone number.";
    if (!data.message) next.message = "Please add a short message.";
    setErrors(next);
    if (Object.keys(next).length) {
      form.querySelector<HTMLElement>(`[name="${Object.keys(next)[0]}"]`)?.focus();
      return;
    }

    const meta = CONTACT_INTENTS.find((i) => i.value === intent)!;
    const message = [
      `Intent: ${meta.prefix} ${meta.label}`,
      `Organisation: ${data.org || "-"}`,
      "",
      data.message,
    ].join("\n");

    setSubmitting(true);
    setFailed(false);
    try {
      const { error } = await supabase.functions.invoke("send-contact-request", {
        body: {
          name: data.name.slice(0, 120),
          contact: data.contact.slice(0, 200),
          clientType: meta.label.slice(0, 80),
          urgency: "Standard",
          message: message.slice(0, 5000),
          source: "contact",
          intent,
        },
      });
      if (error) throw error;
      trackEvent("contact_submit", { intent });
      setSent(true);
      form.reset();
    } catch (err) {
      console.error(err);
      setFailed(true);
    } finally {
      setSubmitting(false);
    }
  };

  if (sent) {
    return (
      <div role="status" className="bg-surface2 border-2 border-primary/50 rounded-xl p-8 text-center">
        <div className="font-mono text-[12px] tracking-[3px] text-primary uppercase mb-3">// message sent</div>
        <p className="font-display text-xl text-foreground">Thanks. We'll be in touch within one business day.</p>
      </div>
    );
  }

  const aria = (k: keyof Errors) => (errors[k] ? { "aria-invalid": true, "aria-describedby": `contact-${k}-error` } : {});
  const border = (k: keyof Errors) => (errors[k] ? "border-destructive" : "border-border");
  const Err = ({ k }: { k: keyof Errors }) =>
    errors[k] ? <span id={`contact-${k}-error`} className="text-xs text-destructive">{errors[k]}</span> : null;

  return (
    <form noValidate onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-5 bg-surface2 border border-border rounded-xl p-6 md:p-9">
      <div className="flex flex-col gap-2 md:col-span-2">
        <label htmlFor="contact-intent" className="text-[11px] tracking-[3px] text-faint uppercase">What can we help with?</label>
        <select
          id="contact-intent"
          name="intent"
          value={intent}
          onChange={(e) => setIntent(e.target.value)}
          className={`${inputCls} ${border("intent")}`}
          {...aria("intent")}
        >
          <option value="" disabled>Choose one…</option>
          {CONTACT_INTENTS.map((i) => (
            <option key={i.value} value={i.value}>{i.label}</option>
          ))}
        </select>
        <Err k="intent" />
      </div>

      {intent === "home-it" && (
        <a
          href={PHONE_TEL}
          className="md:col-span-2 flex items-center gap-3 bg-primary/10 border border-primary/50 rounded-md px-4 py-3.5 text-sm text-foreground hover:border-primary transition-colors"
        >
          <Phone className="w-4 h-4 text-primary flex-shrink-0" aria-hidden />
          <span>
            Need help right now? Call <span className="text-primary font-medium">{PHONE_DISPLAY}</span>
          </span>
        </a>
      )}

      <div className="flex flex-col gap-2">
        <label htmlFor="contact-name" className="text-[11px] tracking-[3px] text-faint uppercase">Your name</label>
        <input id="contact-name" name="name" type="text" maxLength={120} autoComplete="name" className={`${inputCls} ${border("name")}`} {...aria("name")} />
        <Err k="name" />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="contact-contact" className="text-[11px] tracking-[3px] text-faint uppercase">Email or phone</label>
        <input id="contact-contact" name="contact" type="text" maxLength={200} autoComplete="email" className={`${inputCls} ${border("contact")}`} {...aria("contact")} />
        <Err k="contact" />
      </div>
      <div className="flex flex-col gap-2 md:col-span-2">
        <label htmlFor="contact-org" className="text-[11px] tracking-[3px] text-faint uppercase">
          Clinic or organisation <span className="normal-case tracking-normal">(optional)</span>
        </label>
        <input id="contact-org" name="org" type="text" maxLength={160} autoComplete="organization" className={`${inputCls} border-border`} />
      </div>
      <div className="flex flex-col gap-2 md:col-span-2">
        <label htmlFor="contact-message" className="text-[11px] tracking-[3px] text-faint uppercase">Message</label>
        <textarea id="contact-message" name="message" maxLength={4000} className={`${inputCls} ${border("message")} resize-none h-32`} {...aria("message")} />
        <Err k="message" />
      </div>

      <button
        type="submit"
        disabled={submitting}
        className="md:col-span-2 w-full font-mono text-[14px] tracking-[3px] text-primary-foreground bg-primary py-4 uppercase cursor-pointer hover:bg-primary/85 transition-colors border-none rounded-md disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {submitting ? "Sending…" : "Send message →"}
      </button>
      {failed && (
        <p role="alert" className="md:col-span-2 text-sm text-destructive text-center">
          We couldn't send your message. Please try again, or call {PHONE_DISPLAY}.
        </p>
      )}
      <p className="md:col-span-2 text-xs text-faint text-center">{PHI_NOTE}</p>
    </form>
  );
};

export default ContactForm;
