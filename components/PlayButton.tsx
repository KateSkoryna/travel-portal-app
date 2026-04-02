interface PlayButtonProps {
  variant?: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
}

const sizeMap = {
  sm: { button: "w-8 h-8", icon: { width: 10, height: 12 } },
  md: { button: "w-12 h-12", icon: { width: 16, height: 18 } },
  lg: { button: "w-16 h-16", icon: { width: 18, height: 22 } },
};

export default function PlayButton({
  variant = "primary",
  size = "md",
}: PlayButtonProps) {
  const { button, icon } = sizeMap[size];
  const bg = variant === "primary" ? "bg-primary shadow-lg" : "bg-white/50";

  return (
    <div
      className={`flex items-center justify-center rounded-full text-white ${button} ${bg}`}
    >
      <svg
        width={icon.width}
        height={icon.height}
        viewBox="0 0 12 14"
        fill="currentColor"
        style={{ marginLeft: "2px" }}
      >
        <path d="M0 0 L12 7 L0 14 Z" />
      </svg>
    </div>
  );
}
