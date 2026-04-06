"use client";

import { useState } from "react";
import Image from "next/image";

interface Slide {
  src: string;
  alt: string;
}

function CarouselNavButton({
  direction,
  onClick,
}: {
  direction: "prev" | "next";
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      aria-label={direction === "prev" ? "Previous" : "Next"}
      className={`absolute ${direction === "prev" ? "left-2" : "right-2"} top-1/2 -translate-y-1/2 z-10 text-4xl font-bold text-navy/60 hover:text-navy transition-colors px-2`}
    >
      {direction === "prev" ? "‹" : "›"}
    </button>
  );
}

export default function ExploreCarousel({ slides }: { slides: Slide[] }) {
  const total = slides.length;
  const [active, setActive] = useState(0);

  const prev = () => setActive((i) => (i - 1 + total) % total);
  const next = () => setActive((i) => (i + 1) % total);

  return (
    <div className="flex flex-col items-center gap-6">
      {/* Track: full width, buttons overlaid */}
      <div
        className="relative w-full overflow-hidden"
        style={{ paddingTop: "26%" }}
      >
        <CarouselNavButton direction="prev" onClick={prev} />
        <CarouselNavButton direction="next" onClick={next} />

        {slides.map((slide, i) => {
          // Shortest-path position relative to active
          let pos = i - active;
          if (pos > total / 2) pos -= total;
          if (pos < -total / 2) pos += total;

          const isCenter = pos === 0;
          const isVisible = Math.abs(pos) <= 1;

          return (
            <div
              key={slide.src}
              style={{
                position: "absolute",
                width: "31%",
                left: "34.5%",
                top: "50%",
                aspectRatio: "405 / 257",
                // translateX uses % of own width; 128% of 31%-wide element ≈ 39.7% of container
                transform: `translateX(${pos * 110}%) translateY(-50%) scale(${isCenter ? 1.2 : 0.82})`,
                transition:
                  "transform 0.7s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.7s ease",
                opacity: isVisible ? 1 : 0,
                pointerEvents: isVisible ? "auto" : "none",
                borderRadius: "10px",
                overflow: "hidden",
                zIndex: isCenter ? 2 : 1,
              }}
            >
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                className="object-cover"
              />
            </div>
          );
        })}
      </div>

      <div className="flex items-center gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => setActive(i)}
            className={`rounded-full transition-all duration-200 ${
              i === active ? "w-6 h-3 bg-primary" : "w-3 h-3 bg-navy/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
