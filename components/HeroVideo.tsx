import Image from "next/image";

export default function HeroVideo() {
  return (
    <Image
      src="/mountain.webp"
      alt="Mountain background"
      fill
      priority
      className="object-cover pointer-events-none"
    />
  );
}
