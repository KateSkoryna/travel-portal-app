"use client";

import { useRef, useEffect, RefObject } from "react";

const TRACK_HEIGHT = 396;

interface SideIndicatorProps {
  videoRef: RefObject<HTMLVideoElement | null>;
}

/** Left-edge video progress indicator — updates via rAF, no React re-renders */
export default function SideIndicator({ videoRef }: SideIndicatorProps) {
  const redRef = useRef<HTMLDivElement>(null);
  const whiteRef = useRef<HTMLDivElement>(null);
  const timeRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    let rafId: number;

    function tick() {
      const video = videoRef.current;
      if (
        video?.duration &&
        redRef.current &&
        whiteRef.current &&
        timeRef.current
      ) {
        const progress = video.currentTime / video.duration;
        const redH = progress * TRACK_HEIGHT;
        redRef.current.style.height = `${redH}px`;
        whiteRef.current.style.height = `${TRACK_HEIGHT - redH}px`;

        const mm = Math.floor(video.currentTime / 60)
          .toString()
          .padStart(2, "0");
        const ss = Math.floor(video.currentTime % 60)
          .toString()
          .padStart(2, "0");
        timeRef.current.textContent = `${mm}:${ss}`;
      }
      rafId = requestAnimationFrame(tick);
    }

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [videoRef]);

  return (
    <div className="absolute left-[5.5%] top-0 bottom-0 z-20 flex flex-col items-center pointer-events-none select-none">
      {/* Elapsed — red */}
      <div
        ref={redRef}
        className="mt-[93px] w-[4px] bg-primary shadow-[0_4px_4px_rgba(0,0,0,0.45)]"
        style={{ height: 0 }}
      />

      {/* Remaining — white */}
      <div
        ref={whiteRef}
        className="w-[2px] bg-white opacity-60"
        style={{ height: TRACK_HEIGHT }}
      />

      {/* Time counter — rotated */}
      <div className="mt-4 -rotate-90 origin-center">
        <span
          ref={timeRef}
          className="font-body font-bold text-white text-[16px] [text-shadow:0_0_4px_rgba(0,0,0,0.1)] tabular-nums"
        >
          00:00
        </span>
      </div>

      {/* Spacer */}
      <div className="flex-1" />
    </div>
  );
}
