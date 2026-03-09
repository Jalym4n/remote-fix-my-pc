const StatusBar = () => {
  const items = [
    { label: "Status", value: "Online & Ready" },
    { label: "Service", value: "Remote + On-Site" },
    { label: "Guarantee", value: "No Fix = No Fee" },
    { label: "Price Beat", value: "15% Minimum" },
    { label: "Coverage", value: "Anywhere via Remote" },
  ];

  return (
    <div className="bg-surface border-y border-border px-6 md:px-20 flex items-center gap-10 md:gap-16 overflow-x-auto">
      {items.map((item) => (
        <div key={item.label} className="flex items-center gap-3 py-4 flex-shrink-0">
          <div className="w-1.5 h-1.5 bg-green rounded-full animate-pulse-dot" />
          <span className="text-xs tracking-[2px] text-dim uppercase whitespace-nowrap">{item.label}</span>
          <span className="text-xs tracking-[1px] text-foreground whitespace-nowrap">{item.value}</span>
        </div>
      ))}
    </div>
  );
};

export default StatusBar;
