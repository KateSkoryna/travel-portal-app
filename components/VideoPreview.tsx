"use client";

import { useRef, useState } from "react";
import PlayButton from "./PlayButton";

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
          <PlayButton variant="primary" size="md" />
        </div>
      )}
    </div>
  );
}
