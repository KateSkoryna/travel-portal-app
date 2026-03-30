import Image from "next/image";

/** Brand logo */
export default function Logo() {
  return (
    <Image
      src="/logo.svg"
      alt="Explore Indonesia"
      className="h-[49px] w-auto object-contain"
      width={186}
      height={49}
      priority
    />
  );
}
