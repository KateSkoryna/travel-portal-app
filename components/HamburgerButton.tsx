"use client";

import { useState } from "react";

/** Hamburger menu button — animates into × on click */
export default function HamburgerButton() {
  const [open, setOpen] = useState(false);

  return (
    <button
      aria-label={open ? "Close menu" : "Open menu"}
      onClick={() => setOpen((prev) => !prev)}
      className="relative w-6 h-6 flex flex-col justify-center items-center gap-[5px] opacity-90 hover:opacity-100 transition-opacity"
    >
      <span
        className={`block h-[2px] w-6 bg-white rounded-full transition-all duration-300 origin-center ${
          open ? "rotate-45 translate-y-[7px]" : ""
        }`}
      />
      <span
        className={`block h-[2px] w-6 bg-white rounded-full transition-all duration-300 ${
          open ? "opacity-0 scale-x-0" : ""
        }`}
      />
      <span
        className={`block h-[2px] w-6 bg-white rounded-full transition-all duration-300 origin-center ${
          open ? "-rotate-45 -translate-y-[7px]" : ""
        }`}
      />
    </button>
  );
}
