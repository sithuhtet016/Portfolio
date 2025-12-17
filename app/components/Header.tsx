import { useState, useEffect } from "react";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "ABOUT", href: "#about" },
    { name: "SKILLS", href: "#skills" },
    { name: "PROJECTS", href: "#projects" },
    { name: "CONTACT", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-100 ${
        isScrolled ? "shadow-lg" : ""
      }`}
      style={{
        background: "rgba(10, 0, 20, 0.95)",
        borderBottom: "4px solid rgb(var(--color-primary))",
        boxShadow: isScrolled ? "0 0 20px rgb(var(--color-primary))" : "none",
      }}>
      <nav className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a
            href="#"
            style={{
              fontFamily: "'Press Start 2P', cursive",
              fontSize: "1rem",
              color: "rgb(var(--color-primary))",
              textShadow: "0 0 10px rgb(var(--color-primary))",
            }}>
            &lt;DEV.SITHU&gt;
          </a>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className="hover:opacity-80 transition-all"
                  style={{
                    fontFamily: "'Press Start 2P', cursive",
                    fontSize: "0.65rem",
                    color: "rgb(var(--color-secondary))",
                    textShadow: "0 0 5px rgb(var(--color-secondary))",
                  }}>
                  {item.name}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden pixel-corners px-4 py-2"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
            style={{
              fontFamily: "'Press Start 2P', cursive",
              fontSize: "0.65rem",
              color: "rgb(var(--color-primary))",
              border: "2px solid rgb(var(--color-primary))",
              background: "rgba(255, 0, 255, 0.1)",
            }}>
            {isMobileMenuOpen ? (
              "X"
            ) : (
              <span
                className="block w-[10.406px] h-[15.594px]"
                style={{
                  WebkitMask:
                    "url('/icons/menu.svg') no-repeat center / contain",
                  mask: "url('/icons/menu.svg') no-repeat center / contain",
                  backgroundColor: "rgb(255, 0, 255)",
                  display: "block",
                }}
                aria-hidden="true"
              />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <ul className="md:hidden pt-4 pb-2 flex flex-col gap-4">
            {navItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block hover:opacity-80"
                  style={{
                    fontFamily: "'Press Start 2P', cursive",
                    fontSize: "0.65rem",
                    color: "rgb(var(--color-secondary))",
                    textShadow: "0 0 5px rgb(var(--color-secondary))",
                  }}>
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </header>
  );
}
