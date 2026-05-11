import { useScrollReveal } from "@/hooks/useScrollReveal";

const ITContact = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="it-contact" className="px-6 md:px-20 py-20 md:py-24 bg-surface relative bg-noise bg-circuit">
      <div className="absolute inset-0 glow-bottom pointer-events-none" />
      <div ref={ref} className={isVisible ? "scroll-visible" : "scroll-hidden"}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <div className="text-[12px] tracking-[4px] text-faint uppercase mb-3">// request service</div>
            <div className="font-display text-[clamp(36px,4.5vw,52px)] text-foreground tracking-[-0.02em] mb-6">
              Get your system <span className="text-primary">back online.</span>
            </div>
            <p className="text-sm text-dim leading-relaxed mb-8">
              Describe the issue and a member of the team will respond within one business day — or sooner for urgent and same-day requests.
            </p>

            <div className="flex flex-col gap-3">
              {[
                { label: "Direct email", val: "jaleed01@altctrl.run" },
                { label: "Service modes", val: "Remote · In-home · Drop-off · On-site" },
                { label: "Response", val: "Same-day capacity for urgent issues" },
                { label: "Coverage", val: "Local on-site · global remote support" },
              ].map((m) => (
                <div key={m.label} className="flex items-start gap-4 p-4 bg-surface2 border border-border rounded-md hover:border-primary transition-colors">
                  <div>
                    <div className="text-[11px] tracking-[3px] text-faint uppercase mb-1">{m.label}</div>
                    <div className="text-sm text-foreground">{m.val}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <form action="mailto:jaleed01@altctrl.run" method="post" encType="text/plain" className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <label className="text-[11px] tracking-[3px] text-faint uppercase">Your name</label>
              <input name="name" type="text" placeholder="Full name" className="bg-surface2 border border-border text-foreground text-sm p-3.5 outline-none focus:border-primary transition-colors rounded-md" />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-[11px] tracking-[3px] text-faint uppercase">Contact</label>
              <input name="contact" type="text" placeholder="Email or phone" className="bg-surface2 border border-border text-foreground text-sm p-3.5 outline-none focus:border-primary transition-colors rounded-md" />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-[11px] tracking-[3px] text-faint uppercase">Customer type</label>
              <select name="type" className="bg-surface2 border border-border text-foreground text-sm p-3.5 outline-none focus:border-primary transition-colors rounded-md">
                <option>Personal / household</option>
                <option>Business / professional practice</option>
                <option>Enterprise / managed IT</option>
              </select>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-[11px] tracking-[3px] text-faint uppercase">Issue type</label>
              <select name="issue" className="bg-surface2 border border-border text-foreground text-sm p-3.5 outline-none focus:border-primary transition-colors rounded-md">
                <option>BitLocker recovery (in-person only)</option>
                <option>Computer won't boot / blue screen</option>
                <option>Slow PC / tune-up</option>
                <option>Virus or malware removal</option>
                <option>Data recovery</option>
                <option>Network / Wi-Fi / printer</option>
                <option>Managed IT enquiry</option>
                <option>Other</option>
              </select>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-[11px] tracking-[3px] text-faint uppercase">Urgency</label>
              <select name="urgency" className="bg-surface2 border border-border text-foreground text-sm p-3.5 outline-none focus:border-primary transition-colors rounded-md">
                <option>Standard</option>
                <option>Same-day / rush</option>
                <option>Critical (business impacted)</option>
              </select>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-[11px] tracking-[3px] text-faint uppercase">Describe the issue</label>
              <textarea name="message" placeholder="Symptoms, device model, what changed recently…" className="bg-surface2 border border-border text-foreground text-sm p-3.5 outline-none focus:border-primary transition-colors resize-none h-32 rounded-md" />
            </div>
            <button type="submit" className="w-full font-mono text-[13px] tracking-[3px] text-primary-foreground bg-primary py-4 uppercase cursor-pointer hover:bg-primary/85 transition-colors border-none rounded-md">
              Send request →
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ITContact;
