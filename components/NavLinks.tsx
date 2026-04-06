"use client";

interface NavLink {
  key: string;
  label: string;
}

export default function NavLinks({ links }: { links: NavLink[] }) {
  function handleClick(e: React.MouseEvent<HTMLAnchorElement>, key: string) {
    e.preventDefault();
    document.getElementById(key)?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <ul className="hidden md:flex flex-1 items-center justify-start gap-10 lg:gap-14">
      {links.map(({ key, label }) => (
        <li key={key}>
          <a
            href={`#${key}`}
            onClick={(e) => handleClick(e, key)}
            className="font-body font-bold text-white uppercase text-[18px] tracking-wide hover:text-primary transition-colors"
          >
            {label}
          </a>
        </li>
      ))}
    </ul>
  );
}
