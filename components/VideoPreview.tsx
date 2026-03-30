"use client";

import { useRef, useState } from "react";

/** Video preview — shown in the bottom-right of the hero */
export default function VideoPreview() {
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
    <div
      className="relative h-full min-w-[300px] flex-1 overflow-hidden cursor-pointer"
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

      {/* Play icon — visible only when paused */}
      {!playing && (
        <div className="absolute inset-0 z-30 flex items-center justify-center">
          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-black/50 text-white">
            <svg width="16" height="18" viewBox="0 0 12 14" fill="currentColor">
              <path d="M0 0 L12 7 L0 14 Z" />
            </svg>
          </div>
        </div>
      )}
    </div>
  );
}
