import Image from "next/image";

interface IconButtonProps {
  src: string;
  label: string;
  size?: number;
  className?: string;
  onClick?: () => void;
}

/** Reusable button with an image icon */
export default function IconButton({
  src,
  label,
  size = 24,
  className,
  onClick,
}: IconButtonProps) {
  return (
    <button
      aria-label={label}
      onClick={onClick}
      className="opacity-90 hover:opacity-100 transition-opacity"
      style={{ width: size, height: size }}
    >
      <Image
        src={src}
        alt={label}
        width={size}
        height={size}
        className={`object-contain ${className ?? ""}`}
      />
    </button>
  );
}
