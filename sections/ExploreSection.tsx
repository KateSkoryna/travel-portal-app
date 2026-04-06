import Image from "next/image";
import ExploreCarousel from "@/components/ExploreCarousel";

const slideImages = [
  "/kids.webp",
  "/greenIsland.webp",
  "/bicicle.webp",
  "/colorhouse.webp",
  "/sunset.webp",
];

interface Slide {
  alt: string;
}

interface ExploreSectionProps {
  dict: {
    heading: string;
    slides: Slide[];
  };
}

export default function ExploreSection({ dict }: ExploreSectionProps) {
  const slides = slideImages.map((src, i) => ({
    src,
    alt: dict.slides[i]?.alt ?? "",
  }));

  return (
    <section id="experiences" className="relative min-h-[130vh] overflow-hidden flex flex-col">
      {/* Full-section background */}
      <div className="absolute inset-0">
        <Image
          src="/jacket.webp"
          alt="mountains"
          fill
          className="object-cover object-[center_20%]"
          priority
        />
      </div>

      {/* Explore Our Secrets — carousel */}
      <div className="relative z-10 pt-20 pb-24 px-[8%]">
        <h2
          className="font-body font-bold text-navy text-center mb-10"
          style={{ fontSize: "50px", lineHeight: "1.5" }}
        >
          {dict.heading}
        </h2>
        <ExploreCarousel slides={slides} />
      </div>
    </section>
  );
}
