const errors = [
  { title: "System Error", body: 'A fatal exception 0E has occurred at 0028:C0011E36.', code: "KERNEL_DATA_INPAGE_ERROR — 0x0000007A" },
  { title: "Hardware Failure", body: 'Boot device not found. Please install an operating system on your hard disk.', code: "NO_BOOT_DEVICE — 0x000_HDD_FAIL" },
  { title: "Thermal Warning", body: 'CPU temperature critical. System will shut down to prevent damage.', code: "THERMAL_SHUTDOWN — TEMP: 108°C" },
  { title: "Security Alert", body: 'Malware detected. Your files may be at risk. Contact support immediately.', code: "MALWARE_DETECTED — 0x000_CALL_ALTCTRL" },
];

const ErrorZone = () => {
  return (
    <section className="px-6 md:px-20 py-20 md:py-24 bg-background">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <div className="text-[10px] tracking-[6px] text-faint uppercase mb-3">// common errors</div>
          <div className="font-display text-[clamp(40px,5vw,60px)] text-foreground tracking-[2px] mb-4">
            Seen These <span className="text-primary">Before?</span>
          </div>
          <p className="text-xs text-dim leading-[2.2] tracking-[1px] mt-4 max-w-sm">
            If any of these look familiar, you're in the right place. I've resolved every one of these — usually the same day. Remotely or in person.
          </p>
          <div className="mt-8">
            <a href="#contact" className="font-mono text-[10px] tracking-[5px] text-primary-foreground bg-primary border border-primary px-7 py-3 uppercase hover:bg-transparent hover:text-primary transition-colors">
              Tell Me What's Wrong
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          {errors.map((err, i) => (
            <div key={i} className="bg-surface-3 border-t border-l border-border-light border-r border-b border-r-[#111] border-b-[#111] animate-wobble" style={{ animationDelay: `${i * 0.1}s` }}>
              <div className="h-5 flex items-center justify-between px-1.5 pl-2 text-[10px] text-primary-foreground tracking-[1px]" style={{ background: "linear-gradient(90deg, #000080 55%, #1084d0 100%)" }}>
                <span>{err.title}</span>
                <div className="w-[15px] h-[13px] bg-muted border border-border-light text-[9px] text-dim flex items-center justify-center">✕</div>
              </div>
              <div className="p-3 text-[11px] text-dim leading-[1.6]">
                {err.body}<br />
                <span className="text-[9px] text-faint mt-2 block tracking-[1px]">{err.code}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ErrorZone;
