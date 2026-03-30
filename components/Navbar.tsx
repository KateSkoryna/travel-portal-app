import type { Locale } from "@/lib/getDictionary";
import Logo from "./Logo";
import IconButton from "./IconButton";
import HamburgerButton from "./HamburgerButton";
import LanguageSwitcher from "./LanguageSwitcher";

const imgSearch = "/icons/search.svg";

interface NavbarProps {
  dict: {
    destinations: string;
    experiences: string;
    about: string;
    gallery: string;
  };
  lang: Locale;
}

/** Top navigation bar with logo, links and action icons */
export default function Navbar({ dict, lang }: NavbarProps) {
  const navLinks = [
    { key: "destinations", label: dict.destinations },
    { key: "experiences", label: dict.experiences },
    { key: "about", label: dict.about },
    { key: "gallery", label: dict.gallery },
  ];

  return (
    <nav className="relative z-20 flex items-center gap-12 px-[3.5%] pt-7 pb-4">
      {/* Logo */}
      <Logo />

      {/* Nav links */}
      <ul className="hidden md:flex flex-1 items-center justify-start gap-10 lg:gap-14">
        {navLinks.map(({ key, label }) => (
          <li key={key}>
            <a
              href={`#${key}`}
              className="font-body font-bold text-white uppercase text-[18px] tracking-wide hover:text-primary transition-colors"
            >
              {label}
            </a>
          </li>
        ))}
      </ul>

      {/* Action icons */}
      <div className="flex items-center gap-4">
        <IconButton
          src={imgSearch}
          label="Search"
          className="brightness-0 invert"
        />
        <LanguageSwitcher lang={lang} />
        <div className="md:hidden">
          <HamburgerButton />
        </div>
      </div>
    </nav>
  );
}
