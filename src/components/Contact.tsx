const Contact = () => {
  return (
    <section id="contact" className="px-6 md:px-20 py-20 md:py-24 bg-surface">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div>
          <div className="text-[10px] tracking-[6px] text-faint uppercase mb-3">// reach me</div>
          <div className="font-display text-[clamp(40px,5vw,60px)] text-foreground tracking-[2px] mb-8">
            Get in<br /><span className="text-green">Touch</span>
          </div>
          <p className="text-xs text-dim leading-[2] tracking-[1px] mb-8">
            Describe the problem or just say hello. I'll get back to you within a few hours — usually much faster. Remote support available for anyone, anywhere.
          </p>

          <div className="flex flex-col gap-4">
            {[
              { icon: "📧", label: "Email", val: "hello@altctrl.co.uk" },
              { icon: "📱", label: "Phone / Text", val: "Available on request" },
              { icon: "🏠", label: "House Visits", val: "Within reasonable area" },
              { icon: "🖥️", label: "Remote Support", val: "Anywhere — I'll guide you" },
              { icon: "🕐", label: "Hours", val: "Mon–Sat, 9am–7pm" },
            ].map((m) => (
              <div key={m.label} className="flex items-center gap-4 p-3.5 bg-surface-2 border border-border hover:border-primary transition-colors">
                <span className="text-base flex-shrink-0">{m.icon}</span>
                <div>
                  <div className="text-[10px] tracking-[3px] text-dim uppercase">{m.label}</div>
                  <div className="text-xs text-foreground tracking-[1px]">{m.val}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-3.5">
          <div className="flex flex-col gap-1.5">
            <label className="text-[10px] tracking-[4px] text-faint uppercase">Your Name</label>
            <input type="text" placeholder="John Smith" className="bg-surface-2 border border-border text-foreground font-mono text-xs p-3 outline-none focus:border-primary transition-colors tracking-[1px]" />
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-[10px] tracking-[4px] text-faint uppercase">Email Address</label>
            <input type="email" placeholder="john@example.com" className="bg-surface-2 border border-border text-foreground font-mono text-xs p-3 outline-none focus:border-primary transition-colors tracking-[1px]" />
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-[10px] tracking-[4px] text-faint uppercase">How Can I Help?</label>
            <select className="bg-surface-2 border border-border text-foreground font-mono text-xs p-3 outline-none cursor-pointer tracking-[1px] focus:border-primary transition-colors appearance-none">
              <option value="">Select a service...</option>
              <option>Remote Fix (Software Issue)</option>
              <option>House Visit Request</option>
              <option>Laptop Repair</option>
              <option>Desktop / PC</option>
              <option>Virus / Malware Removal</option>
              <option>Data Recovery</option>
              <option>Speed / Tune-Up</option>
              <option>Network / Wi-Fi</option>
              <option>Something Else</option>
            </select>
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-[10px] tracking-[4px] text-faint uppercase">Describe the Problem</label>
            <textarea placeholder="My laptop is running slow and makes a weird noise when it starts up..." className="bg-surface-2 border border-border text-foreground font-mono text-xs p-3 outline-none focus:border-primary transition-colors tracking-[1px] resize-none h-28" />
          </div>
          <button className="w-full font-mono text-[11px] tracking-[5px] text-primary-foreground bg-primary py-3.5 uppercase cursor-pointer hover:bg-primary/80 transition-colors border-none">
            Send Message →
          </button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
