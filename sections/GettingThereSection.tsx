"use client";

import { useRef, useState } from "react";
import PlayButton from "@/components/PlayButton";
import Image from "next/image";

interface Step {
  title: string;
  description: string;
}

interface GettingThereSectionProps {
  heading: string;
  steps: Step[];
  videoCard: { title: string; description: string };
  cta: string;
}

export default function GettingThereSection({
  heading,
  steps,
  videoCard,
  cta,
}: GettingThereSectionProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  function togglePlay() {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play();
      setPlaying(true);
    } else {
      video.pause();
      setPlaying(false);
    }
  }

  return (
    <section className="bg-bg-light py-20 px-[8%]">
      <div className="max-w-[760px] mx-auto">
      <h2
        className="font-body font-bold text-black mb-12"
        style={{ fontSize: "42px", lineHeight: "1.2" }}
      >
        {heading}
      </h2>

      <div className="flex flex-col">
        {/* Steps 1 & 2 */}
        {steps.slice(0, 2).map((step, i) => (
          <div key={step.title} className="flex gap-6">
            {/* Left column: circle + line */}
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center shrink-0">
                <span className="font-body font-bold text-white text-[16px]">{i + 1}</span>
              </div>
              <div className="w-[2px] bg-gray-300 flex-1 my-2" />
            </div>
            {/* Content */}
            <div className="pb-10 pt-1">
              <h3 className="font-body font-bold text-black text-[18px] mb-3">{step.title}</h3>
              <p className="font-body text-gray-muted text-[15px] leading-[1.7]">{step.description}</p>
            </div>
          </div>
        ))}

        {/* Video card insert (between step 2 and 3) */}
        <div className="flex gap-6 mb-4">
          {/* Spacer to align with content column */}
          <div className="flex flex-col items-center">
            <div className="w-10 shrink-0" />
            <div className="w-[2px] bg-gray-300 flex-1 my-2" />
          </div>
          {/* Video preview card */}
          <div className="flex gap-5 items-start py-2 pb-8">
            <div
              className="relative w-[150px] h-[105px] rounded-xl overflow-hidden shrink-0 cursor-pointer"
              onClick={togglePlay}
            >
              <video
                ref={videoRef}
                src="/sunset.mp4"
                muted
                loop
                playsInline
                onPlay={() => setPlaying(true)}
                onPause={() => setPlaying(false)}
                className="absolute inset-0 w-full h-full object-cover"
              />
              {!playing && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                  <PlayButton variant="secondary" size="sm" />
                </div>
              )}
            </div>
            <div className="flex flex-col h-[105px] overflow-hidden w-1/2 shrink-0">
              <h3 className="font-body font-bold text-black text-[17px] mb-2 shrink-0">{videoCard.title}</h3>
              <p className="font-body text-gray-muted text-[14px] leading-[1.6] overflow-hidden">{videoCard.description}</p>
            </div>
          </div>
        </div>

        {/* Step 3 */}
        <div className="flex gap-6">
          <div className="flex flex-col items-center">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center shrink-0">
              <span className="font-body font-bold text-white text-[16px]">3</span>
            </div>
          </div>
          <div className="pb-10 pt-1">
            <h3 className="font-body font-bold text-black text-[18px] mb-3">{steps[2].title}</h3>
            <p className="font-body text-gray-muted text-[15px] leading-[1.7]">{steps[2].description}</p>
          </div>
        </div>

        {/* CTA */}
        <div className="ml-16 mt-2">
          <button className="bg-primary text-white font-body font-bold rounded-full px-6 py-3 text-[15px] hover:bg-primary/80 transition-colors">
            {cta}
          </button>
        </div>
      </div>
      </div>
    </section>
  );
}
