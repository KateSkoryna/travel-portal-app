import Image from "next/image";
import { asset } from "@/lib/assetPath";

interface PhotoGalleryProps {
  heading: string;
  description: string;
}

const columns = [
  [
    {
      src: "/kids.webp",
      alt: "Women in traditional Balinese dress",
      aspect: "aspect-[3/4]",
    },
    {
      src: "/island.webp",
      alt: "Tropical island aerial view",
      aspect: "aspect-[4/3]",
    },
  ],
  [
    {
      src: "/mountain.webp",
      alt: "Volcanic mountain landscape",
      aspect: "aspect-[16/9]",
    },
    {
      src: "/greenField.webp",
      alt: "Lush green field landscape",
      aspect: "flex-1",
    },
  ],
  [
    {
      src: "/man.webp",
      alt: "Farmer standing in rice field",
      aspect: "aspect-[3/4]",
    },
    {
      src: "/field.webp",
      alt: "Lush green rice fields landscape",
      aspect: "aspect-[4/3]",
    },
  ],
];

export default function PhotoGallery({
  heading,
  description,
}: PhotoGalleryProps) {
  return (
    <section id="gallery" className="bg-white py-20 px-[8%]">
      {/* Header */}
      <div className="flex flex-col items-center gap-4 mb-12 text-center w-2/3 mx-auto">
        <h2
          className="font-body font-bold text-navy"
          style={{ fontSize: "60px", lineHeight: "1.5" }}
        >
          {heading}
        </h2>
        <p className="font-body text-gray-muted text-[23px] leading-[38px]">
          {description}
        </p>
      </div>

      {/* Masonry grid — 3 columns */}
      <div className="grid grid-cols-3 gap-4 w-2/3 mx-auto">
        {columns.map((col, ci) => (
          <div key={ci} className="flex flex-col gap-4">
            {col.map((img) => (
              <div
                key={img.src}
                className={`relative w-full ${img.aspect} rounded-xl overflow-hidden`}
              >
                <Image
                  src={asset(img.src)}
                  alt={img.alt}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
