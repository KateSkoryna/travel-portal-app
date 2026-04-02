"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import PlayButton from "@/components/PlayButton";

interface VideoCard {
  title: string;
  description: string;
}

interface VideoSectionProps {
  heading: string;
  cards: VideoCard[];
}

const cardImages = ["/sunset.webp", "/view.webp"];

export default function VideoSection({ heading, cards }: VideoSectionProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const smallVideoRef = useRef<HTMLVideoElement>(null);
  const [smallPlaying, setSmallPlaying] = useState(false);

  function togglePlay() {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) { video.play(); } else { video.pause(); }
  }

  function toggleSmallPlay() {
    const video = smallVideoRef.current;
    if (!video) return;
    if (video.paused) { video.play(); } else { video.pause(); }
  }

  return (
    <section className="relative overflow-hidden min-h-screen flex items-center justify-center px-[8%] py-20">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="/mount.webp"
          alt=""
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-black/55" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-2/3 flex flex-col items-center gap-10">
        {/* Heading */}
        <h2
          className="font-body font-bold text-white text-center"
          style={{ fontSize: "42px", lineHeight: "1.35" }}
        >
          {heading}
        </h2>

        {/* Main video */}
        <div
          className="relative w-full rounded-2xl overflow-hidden cursor-pointer"
          style={{ aspectRatio: "4/3" }}
          onClick={togglePlay}
        >
          <video
            ref={videoRef}
            src="/indonesia.mp4"
            muted
            loop
            playsInline
            onPlay={() => setPlaying(true)}
            onPause={() => setPlaying(false)}
            className="absolute inset-0 w-full h-full object-cover"
          />
          {!playing && (
            <div className="absolute inset-0 z-10 flex items-center justify-center">
              <PlayButton variant="primary" size="lg" />
            </div>
          )}
        </div>

        {/* Two mini cards */}
        <div className="flex gap-8 w-full">
          {cards.map((card, i) => (
            <div key={card.title} className="flex gap-4 flex-1 min-w-0">
              {/* Thumbnail with play icon */}
              <div
                className="relative w-[130px] h-[90px] rounded-xl overflow-hidden shrink-0 cursor-pointer"
                onClick={i === 0 ? toggleSmallPlay : undefined}
              >
                {i === 0 ? (
                  <video
                    ref={smallVideoRef}
                    src="/sunset.mp4"
                    muted
                    loop
                    playsInline
                    onPlay={() => setSmallPlaying(true)}
                    onPause={() => setSmallPlaying(false)}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                ) : (
                  <Image
                    src={cardImages[i] ?? cardImages[0]}
                    alt={card.title}
                    fill
                    className="object-cover"
                  />
                )}
                {(i !== 0 || !smallPlaying) && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/25">
                    <PlayButton variant="secondary" size="sm" />
                  </div>
                )}
              </div>

              {/* Text */}
              <div className="flex flex-col gap-2 min-w-0">
                <h3 className="font-body font-bold text-white text-[17px] leading-tight">
                  {card.title}
                </h3>
                <p className="font-body text-off-white text-[13px] leading-[1.6]">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
