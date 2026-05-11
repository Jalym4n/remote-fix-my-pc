const ITTrustBar = () => {
  const items = [
    { icon: "✓", text: "No fix, no fee" },
    { icon: "↘", text: "15% price-beat guarantee" },
    { icon: "⚡", text: "Same-day & rush available" },
    { icon: "🛡", text: "Insured · DBS-checked engineer" },
    { icon: "★", text: "90-day workmanship warranty" },
  ];

  return (
    <div className="bg-surface border-y border-border px-6 md:px-20 py-1 flex items-center gap-8 md:gap-12 overflow-x-auto">
      {items.map((item) => (
        <div key={item.text} className="flex items-center gap-3 py-4 flex-shrink-0">
          <span className="text-primary text-base font-medium">{item.icon}</span>
          <span className="text-sm tracking-[0.5px] text-foreground whitespace-nowrap font-medium">{item.text}</span>
        </div>
      ))}
    </div>
  );
};

export default ITTrustBar;
