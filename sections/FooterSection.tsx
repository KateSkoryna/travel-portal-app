import Logo from "@/components/Logo";

interface FooterSectionProps {
  links: string[];
  copyright: string;
}

export default function FooterSection({ links, copyright }: FooterSectionProps) {
  return (
    <footer className="bg-navy py-6 px-[3.5%]">
      <div className="flex items-center justify-between gap-8">
        {/* Logo */}
        <Logo exploreColor="#DD2242" />

        {/* Nav links */}
        <nav className="flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link}
              href="#"
              className="font-body text-white text-[15px] hover:text-off-white transition-colors"
            >
              {link}
            </a>
          ))}
        </nav>

        {/* Social + copyright */}
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-4">
            <a href="#" aria-label="Facebook" className="text-white hover:text-off-white transition-colors font-body text-[14px]">Fb</a>
            <a href="#" aria-label="Instagram" className="text-white hover:text-off-white transition-colors font-body text-[14px]">In</a>
            <a href="#" aria-label="Twitter" className="text-white hover:text-off-white transition-colors font-body text-[14px]">Tw</a>
          </div>
          <span className="font-body text-white text-[14px]">{copyright}</span>
        </div>
      </div>
    </footer>
  );
}
