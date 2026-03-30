interface HeroContentProps {
  dict: { heading1: string; heading2: string; cta: string };
}

/** Main hero heading and CTA button */
export default function HeroContent({ dict }: HeroContentProps) {
  return (
    <div className="flex flex-col gap-8">
      <h1
        className="font-heading font-black text-white uppercase leading-none"
        style={{ fontSize: "clamp(60px, 6.25vw, 120px)", lineHeight: "1.08" }}
      >
        {dict.heading1}
        <br />
        {dict.heading2}
      </h1>

      <button className="self-start flex items-center justify-center bg-primary text-white/80 font-body font-bold uppercase rounded-full px-10 py-5 text-[20px] hover:bg-primary/80 transition-colors shadow-lg">
        {dict.cta}
      </button>
    </div>
  );
}
