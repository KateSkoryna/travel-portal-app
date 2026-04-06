"use client";

import { useRouter } from "next/navigation";
import { navItemClass } from "@/lib/classNames";
import type { Locale } from "@/lib/getDictionary";

export default function LanguageSwitcher({ lang }: { lang: Locale }) {
  const router = useRouter();
  return (
    <button
      onClick={() => router.push(lang === "en" ? "/de" : "/en")}
      className={navItemClass}
      aria-label="Switch language"
    >
      {lang === "en" ? "DE" : "EN"}
    </button>
  );
}
