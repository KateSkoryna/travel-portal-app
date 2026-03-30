"use client";

import { useState } from "react";
import Image from "next/image";

interface Slide {
  src: string;
  alt: string;
}

export default function ExploreCarousel({ slides }: { slides: Slide[] }) {
  const visibleCount = 3;
  const maxStart = Math.max(0, slides.length - visibleCount);
  const [startIndex, setStartIndex] = useState(0);

  const prev = () => setStartIndex((i) => Math.max(0, i - 1));
  const next = () => setStartIndex((i) => Math.min(maxStart, i + 1));

  const visible = slides.slice(startIndex, startIndex + visibleCount);
  const activeDot = startIndex + 1;

  return (
    <div className="flex flex-col items-center gap-6">
      <div className="flex items-center gap-4 w-full">
        <button
          onClick={prev}
          aria-label="Previous"
          className="text-4xl font-bold text-navy/60 hover:text-navy transition-colors px-2"
        >
          ‹
        </button>

        <div className="flex-1 grid grid-cols-3 gap-6">
          {visible.map((slide) => (
            <div
              key={slide.src}
              className="relative rounded-[10px] overflow-hidden"
              style={{ aspectRatio: "405 / 257" }}
            >
              <Image src={slide.src} alt={slide.alt} fill className="object-cover" />
            </div>
          ))}
        </div>

        <button
          onClick={next}
          aria-label="Next"
          className="text-4xl font-bold text-navy/60 hover:text-navy transition-colors px-2"
        >
          ›
        </button>
      </div>

      <div className="flex items-center gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => setStartIndex(Math.min(maxStart, Math.max(0, i - 1)))}
            className={`rounded-full transition-all duration-200 ${
              i === activeDot ? "w-6 h-3 bg-primary" : "w-3 h-3 bg-navy/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
