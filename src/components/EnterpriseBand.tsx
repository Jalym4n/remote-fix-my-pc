import { useScrollReveal } from "@/hooks/useScrollReveal";

const capabilities = [
  { title: "Managed IT & SLAs", desc: "Defined response times, monthly health reports, proactive patching, and a single point of accountability for your fleet." },
  { title: "On-Site Engineering", desc: "Scheduled and emergency on-site engineer dispatch — server rooms, network closets, end-user workstations, executive support." },
  { title: "Device Lifecycle", desc: "Procurement, imaging, encryption (BitLocker / FileVault), provisioning, asset tracking and secure off-boarding." },
  { title: "Network & Connectivity", desc: "Business-grade Wi-Fi, VLAN segmentation, firewall configuration, VPN, and resilient multi-WAN failover." },
  { title: "Backup & Continuity", desc: "3-2-1 backup architecture, image-level recovery, ransomware-resistant snapshots, and tested restore drills." },
  { title: "Compliance-Aware", desc: "Documentation, audit trails and access controls suitable for regulated industries — legal, medical, finance." },
];

const stats = [
  { val: "4hr", label: "Critical response SLA" },
  { val: "99.9%", label: "Uptime targets supported" },
  { val: "200+", label: "Devices serviced to date" },
  { val: "10+ yrs", label: "Systems engineering" },
];

const EnterpriseBand = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="px-6 md:px-20 py-20 md:py-24 bg-surface relative bg-noise">
      <div className="absolute inset-0 glow-red pointer-events-none" />
      <div ref={ref} className={isVisible ? "scroll-visible" : "scroll-hidden"}>
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-16 items-start">
          <div>
            <div className="text-[12px] tracking-[4px] text-faint uppercase mb-3">// for business</div>
            <div className="font-display text-[clamp(36px,4.5vw,52px)] text-foreground tracking-[-0.02em] leading-[1.05] mb-5">
              Enterprise-grade IT, <span className="text-primary">without the enterprise overhead.</span>
            </div>
            <p className="text-sm md:text-base text-dim leading-relaxed mb-6">
              ALTCTRL provides ongoing managed IT, project work and emergency response to professional practices, SMBs and regulated organisations. Engagements are scoped to your environment — from a five-person clinic to a multi-site office — with documented SLAs, transparent pricing and a single accountable engineer.
            </p>

            <div className="grid grid-cols-2 gap-px bg-border border border-border mb-8">
              {stats.map((s) => (
                <div key={s.label} className="bg-surface2 p-5">
                  <div className="font-display text-[28px] text-primary tracking-[-0.01em] leading-none">{s.val}</div>
                  <div className="text-xs tracking-[1px] text-dim mt-2">{s.label}</div>
                </div>
              ))}
            </div>

            <div className="border border-border bg-surface2 rounded-md p-5">
              <div className="text-[11px] tracking-[3px] text-faint uppercase mb-2">Trusted by</div>
              <p className="text-sm text-dim">Independent medical practices, legal firms, accountancies and SMBs requiring discreet, accountable IT support.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-border border border-border rounded-md overflow-hidden">
            {capabilities.map((c) => (
              <div key={c.title} className="bg-background p-6 hover:bg-surface2 transition-colors">
                <div className="font-display text-[18px] text-foreground tracking-[-0.01em] mb-2">{c.title}</div>
                <p className="text-sm text-dim leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-wrap gap-4 items-center">
          <a href="#it-contact" className="font-mono text-[13px] tracking-[3px] text-primary-foreground bg-primary border border-primary px-7 py-3.5 uppercase hover:bg-transparent hover:text-primary transition-colors">
            → Request a business quote
          </a>
          <a href="mailto:jaleed01@altctrl.run?subject=Managed%20IT%20enquiry" className="font-mono text-[13px] tracking-[3px] text-foreground border border-border px-7 py-3.5 uppercase hover:border-primary hover:text-primary transition-colors">
            jaleed01@altctrl.run
          </a>
        </div>
      </div>
    </section>
  );
};

export default EnterpriseBand;
