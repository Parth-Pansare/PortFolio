import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        zIndex: 1000,
        backgroundColor: scrolled ? "rgba(15, 23, 42, 0.95)" : "transparent",
        backdropFilter: scrolled ? "blur(10px)" : "none",
        transition: "all 0.3s ease",
        padding: "1rem 10%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.1)" : "none",
      }}
    >
      <div style={{ fontSize: "1.5rem", fontWeight: "bold", color: "var(--primary-color)" }}>
        Parth<span style={{ color: "var(--accent-color)" }}>.</span>
      </div>

      {/* Desktop Menu */}
      <ul style={{ display: "flex", gap: "2rem" }} className="desktop-menu">
        {navLinks.map((link) => (
          <li key={link.name}>
            <a
              href={link.href}
              style={{
                fontSize: "1rem",
                fontWeight: "500",
                color: "var(--text-color)",
                opacity: 0.8,
              }}
              onMouseEnter={(e) => (e.target.style.color = "var(--primary-color)")}
              onMouseLeave={(e) => (e.target.style.color = "var(--text-color)")}
            >
              {link.name}
            </a>
          </li>
        ))}
      </ul>

      {/* Mobile Menu Toggle */}
      <div
        className="mobile-toggle"
        style={{ display: "none", cursor: "pointer" }}
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </div>

      {/* Mobile Menu Overlay (Simulated with CSS) */}
      <style>{`
        @media (max-width: 768px) {
          .desktop-menu { display: none !important; }
          .mobile-toggle { display: block !important; }
        }
      `}</style>
    </nav>
  );
}
