import Link from "next/link";
import type { Locale } from "@/lib/getDictionary";

interface Stat {
  value: string;
  label: string;
}

interface MapSectionProps {
  numbers: {
    heading: string;
    description: string;
    stats: Stat[];
  };
  map: {
    heading: string;
    description: string;
    cta: string;
    slug: string;
  };
  lang: Locale;
}

export default function MapSection({ numbers, map, lang }: MapSectionProps) {
  return (
    <>
      {/* By The Numbers */}
      <section className="bg-navy py-20 px-[8%]">
        <h2
          className="font-body font-bold text-white text-center mb-6"
          style={{ fontSize: "60px", lineHeight: "1.5" }}
        >
          {numbers.heading}
        </h2>
        <p className="font-body text-off-white text-[18px] leading-[28px] tracking-[0.5px] text-center max-w-[484px] mx-auto mb-16">
          {numbers.description}
        </p>

        <div className="grid grid-cols-3 gap-12 max-w-5xl mx-auto">
          {numbers.stats.map((stat) => (
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

      {/* Hills & Valleys — map section */}
      <section className="relative bg-white overflow-hidden py-28 px-[8%] flex items-center justify-center min-h-[500px]">
        {/* Topographic decoration — left (top-left corner) */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/topo-left.svg"
          alt=""
          aria-hidden
          className="absolute -left-24 -top-10 h-[600px] w-auto pointer-events-none"
        />

        {/* Topographic decoration — right (bottom-right corner, mirrored) */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/topo-left.svg"
          alt=""
          aria-hidden
          className="absolute -right-24 -bottom-10 h-[500px] w-auto pointer-events-none"
          style={{ transform: "scale(-1, -1)" }}
        />

        {/* Centered content */}
        <div className="relative z-10 flex flex-col items-center gap-6 max-w-[615px] text-center">
          <h2
            className="font-body font-bold text-black"
            style={{ fontSize: "42px", lineHeight: "50px" }}
          >
            {map.heading}
          </h2>
          <p className="font-body text-[#6f7787] text-[18px] leading-[28px] tracking-[0.5px]">
            {map.description}
          </p>
          <Link
            href={`/${lang}/articles/${map.slug}`}
            className="flex items-center justify-center bg-primary text-white font-body font-bold rounded-full px-6 py-4 text-[18px] hover:bg-primary/80 transition-colors"
          >
            {map.cta}
          </Link>
        </div>
      </section>
    </>
  );
}
