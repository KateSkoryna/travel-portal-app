interface Stat {
  value: string;
  label: string;
}

interface NumbersSectionProps {
  dict: {
    heading: string;
    description: string;
    stats: Stat[];
  };
}

export default function NumbersSection({ dict }: NumbersSectionProps) {
  return (
    <section className="bg-navy py-20 px-[8%]">
      <h2
        className="font-body font-bold text-white text-center mb-6"
        style={{ fontSize: "60px", lineHeight: "1.5" }}
      >
        {dict.heading}
      </h2>
      <p className="font-body text-off-white text-[18px] leading-[28px] tracking-[0.5px] text-center max-w-[484px] mx-auto mb-16">
        {dict.description}
      </p>

      <div className="grid grid-cols-3 gap-12 max-w-5xl mx-auto">
        {dict.stats.map((stat) => (
          <div key={stat.value} className="flex flex-col items-center gap-4">
            <p
              className="font-body font-bold text-primary text-center"
              style={{ fontSize: "42px", lineHeight: "49px" }}
            >
              {stat.value}
            </p>
            <p className="font-body text-off-white text-[18px] leading-[28px] tracking-[0.5px] text-center">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
