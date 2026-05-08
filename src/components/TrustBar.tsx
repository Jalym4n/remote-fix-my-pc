const TrustBar = () => {
  const items = [
    { icon: "🛡️", text: "HIPAA-aligned architecture" },
    { icon: "🔐", text: "SOC2-ready controls" },
    { icon: "☁️", text: "Cloud-native (GCP · AWS · Azure)" },
    { icon: "🧠", text: "Clinical LLM fine-tuning" },
    { icon: "⚙️", text: "Infrastructure-as-Code (Terraform)" },
  ];

  return (
    <div className="bg-surface border-y border-border px-6 md:px-20 py-1 flex items-center gap-8 md:gap-14 overflow-x-auto">
      {items.map((item) => (
        <div key={item.text} className="flex items-center gap-3 py-4 flex-shrink-0">
          <span className="text-base">{item.icon}</span>
          <span className="text-sm tracking-[1px] text-foreground whitespace-nowrap font-medium">{item.text}</span>
        </div>
      ))}
    </div>
  );
};

export default TrustBar;
