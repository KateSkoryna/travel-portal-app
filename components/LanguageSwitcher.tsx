"use client";

import { useRouter } from "next/navigation";
import type { Locale } from "@/lib/getDictionary";

export default function LanguageSwitcher({ lang }: { lang: Locale }) {
  const router = useRouter();
  return (
    <button
      onClick={() => router.push(lang === "en" ? "/de" : "/en")}
      className="font-body font-bold text-white uppercase text-[18px] tracking-wide hover:text-primary transition-colors"
      aria-label="Switch language"
    >
      {lang === "en" ? "DE" : "EN"}
    </button>
  );
}
