import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Link } from "react-router-dom";

const services = [
  { icon: "🔐", title: "BitLocker Recovery", desc: "Locked out of your own machine? Recovery key lost? In-person and drop-off recovery on eligible devices — our flagship service.", price: "→ In-person only", flagship: true, note: "Not available remotely — physical access required.", href: "/bitlocker-recovery" },
  { icon: "🛟", title: "Remote Rescue", desc: "Global remote support for software issues — virus removal, slow PC, setup, configuration. Guided FaceTime / WhatsApp onboarding for non-technical users.", price: "→ From £30", flagship: true },
  { icon: "💻", title: "Laptop & Desktop Repair", desc: "Cracked screens, dead batteries, won't boot, overheating, OS reinstalls and component upgrades.", price: "→ From £30" },
  { icon: "💾", title: "Data Recovery", desc: "Accidentally deleted files, corrupted drives, failed SSDs. Assessment first — quote on findings.", price: "→ Quote on assessment" },
  { icon: "🦠", title: "Virus & Malware Removal", desc: "Ransomware, adware, spyware. Full clean-up plus hardening to prevent re-infection.", price: "→ From £25" },
  { icon: "⚡", title: "Speed & Tune-Up", desc: "Slow boot, lag, storage pressure. Deep clean, optimisation, bloatware removal.", price: "→ From £25" },
  { icon: "🌐", title: "Network & Wi-Fi", desc: "Dead zones, slow speeds, router and printer configuration. Home and small-business networks.", price: "→ From £30" },
  { icon: "🛠️", title: "Setup & Onboarding", desc: "New device setup, data migration, account configuration, peripheral installation.", price: "→ From £25" },
];

const Services = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="services" className="px-6 md:px-20 py-20 md:py-24 relative bg-noise">
      <div className="absolute inset-0 glow-green pointer-events-none" />
      <div ref={ref} className={isVisible ? "scroll-visible" : "scroll-hidden"}>
        <div className="text-[12px] tracking-[4px] text-faint uppercase mb-3">// services</div>
        <div className="font-display text-[clamp(36px,4.5vw,52px)] text-foreground tracking-[-0.02em] mb-4">
          What we <span className="text-primary">fix.</span>
        </div>
        <p className="text-sm md:text-base text-dim max-w-2xl mb-12">
          A focused service catalogue. Flat-rate pricing, transparent quotes, and a no-fix-no-fee guarantee on every job.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border border border-border rounded-md overflow-hidden">
          {services.map((s) => {
            const inner = (
              <>
                {s.flagship && (
                  <div className="absolute top-3 right-3 bg-primary/10 border border-primary/30 px-2.5 py-0.5 rounded">
                    <span className="text-[10px] tracking-[2px] text-primary uppercase font-medium">★ Flagship</span>
                  </div>
                )}
                <span className="text-3xl mb-4 block">{s.icon}</span>
                <div className="font-display text-[20px] tracking-[-0.01em] text-foreground mb-2">{s.title}</div>
                <p className="text-sm text-dim leading-relaxed mb-3">{s.desc}</p>
                {s.note && <p className="text-[11px] text-faint italic mb-2">{s.note}</p>}
                <div className="text-[12px] tracking-[2px] text-primary mt-3 uppercase">
                  {s.href ? "→ Get help now" : s.price}
                </div>
              </>
            );
            const className = `bg-surface p-7 relative overflow-hidden group transition-colors hover:bg-surface2 ${s.flagship ? "border-l-2 border-l-primary" : ""} ${s.href ? "cursor-pointer block" : ""}`;
            return s.href ? (
              <Link key={s.title} to={s.href} className={className}>{inner}</Link>
            ) : (
              <div key={s.title} className={className}>{inner}</div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
