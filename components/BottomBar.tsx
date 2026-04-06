import DestinationCard from "./DestinationCard";
import VideoPreview from "./VideoPreview";

interface Destination {
  number: string;
  title: string;
  description: string;
}

interface BottomBarProps {
  destinations: Destination[];
}

const socials = [
  { label: "Fb", href: "https://facebook.com" },
  { label: "In", href: "https://instagram.com" },
  { label: "Tw", href: "https://twitter.com" },
];

/** Bottom info bar — destination cards and video preview */
export default function BottomBar({ destinations }: BottomBarProps) {
  return (
    <div className="relative z-20 flex h-[210px] w-full">
      {/* Spacer */}
      <div className="w-[calc(3.5%+180px)] shrink-0" />

      {/* Rotated social links — absolutely aligned with logo column */}
      <div
        className="absolute inset-y-0 flex items-center justify-center"
        style={{ left: "5.5%", transform: "translateX(calc(-50% + 11px))" }}
      >
        <div className="-rotate-90 flex gap-4 whitespace-nowrap">
          {socials.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="font-body font-bold text-white text-[16px] tracking-wide hover:text-primary transition-colors"
            >
              {label}
            </a>
          ))}
        </div>
      </div>

      {/* Dark panel with destination cards */}
      <div className="flex flex-1 items-center bg-black/60 pl-8 pr-[9%] py-6 gap-6">
        {destinations.map((dest) => (
          <DestinationCard key={dest.number} {...dest} />
        ))}
      </div>

      {/* Video preview */}
      <div className="relative h-full w-[25%] shrink-0">
        <VideoPreview />
      </div>
    </div>
  );
}
