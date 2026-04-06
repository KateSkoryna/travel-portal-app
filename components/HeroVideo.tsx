import Image from "next/image";
import { asset } from "@/lib/assetPath";

export default function HeroVideo() {
  return (
    <Image
      src={asset("/mountain.webp")}
      alt="Mountain background"
      fill
      priority
      className="object-cover pointer-events-none"
    />
  );
}
