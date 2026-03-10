const errors = [
  { title: "System Error", body: 'A fatal exception 0E has occurred at 0028:C0011E36.', code: "KERNEL_DATA_INPAGE_ERROR — 0x0000007A" },
  { title: "Hardware Failure", body: 'Boot device not found. Please install an operating system.', code: "NO_BOOT_DEVICE — 0x000_HDD_FAIL" },
  { title: "Thermal Warning", body: 'CPU temperature critical. System shutting down.', code: "THERMAL_SHUTDOWN — TEMP: 108°C" },
  { title: "Security Alert", body: 'Malware detected. Your files may be at risk.', code: "MALWARE_DETECTED — 0x000_CALL_ALTCTRL" },
];

const ErrorZone = () => {
  return (
    <section className="px-6 md:px-20 py-20 md:py-24 bg-background relative bg-noise">
      <div className="absolute inset-0 glow-red pointer-events-none" />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <div className="text-[13px] tracking-[4px] text-faint uppercase mb-3">// common errors</div>
          <div className="font-display text-[clamp(44px,5vw,64px)] text-foreground tracking-[2px] mb-4">
            Seen These <span className="text-primary">Before?</span>
          </div>
          <p className="text-sm text-dim leading-relaxed tracking-[0.5px] mt-4 max-w-md">
            If any of these look familiar, you're in the right place. I've resolved every one of these — usually the same day. Remotely or in person.
          </p>
          <div className="mt-8">
            <a href="#contact" className="font-mono text-[13px] tracking-[3px] text-primary-foreground bg-primary border border-primary px-7 py-3.5 uppercase hover:bg-transparent hover:text-primary transition-colors">
              Tell Me What's Wrong
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          {errors.map((err, i) => (
            <div key={i} className="bg-surface-3 border-t border-l border-border-light border-r border-b border-r-[#111] border-b-[#111] animate-wobble" style={{ animationDelay: `${i * 0.1}s` }}>
              <div className="h-6 flex items-center justify-between px-2 pl-2.5 text-[12px] text-primary-foreground tracking-[1px]" style={{ background: "linear-gradient(90deg, #000080 55%, #1084d0 100%)" }}>
                <span>{err.title}</span>
                <div className="w-[17px] h-[15px] bg-muted border border-border-light text-[10px] text-dim flex items-center justify-center">✕</div>
              </div>
              <div className="p-4 text-sm text-dim leading-relaxed">
                {err.body}<br />
                <span className="text-xs text-faint mt-2 block tracking-[1px]">{err.code}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ErrorZone;
