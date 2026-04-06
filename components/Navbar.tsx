import type { Locale } from "@/lib/getDictionary";
import Logo from "./Logo";
import IconButton from "./IconButton";
import HamburgerButton from "./HamburgerButton";
import LanguageSwitcher from "./LanguageSwitcher";
import NavLinks from "./NavLinks";

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
    { key: "about", label: dict.about },
    { key: "experiences", label: dict.experiences },
    { key: "destinations", label: dict.destinations },
    { key: "gallery", label: dict.gallery },
  ];

  return (
    <nav className="relative z-20 flex items-center gap-12 px-[3.5%] pt-7 pb-4">
      {/* Logo */}
      <Logo />

      {/* Nav links */}
      <NavLinks links={navLinks} />

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
