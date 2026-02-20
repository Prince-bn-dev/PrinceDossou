import { useState, useEffect } from "react";
import styles from "./Navbar.module.scss";

const navLinks = [
  { label: "À propos", href: "#about" },
  { label: "Compétences", href: "#skills" },
  { label: "Réalisations", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.logo}>
        <span className={styles.logoMark}>D</span>
        <span className={styles.logoText}>Prince</span>
      </div>

      <ul className={`${styles.links} ${menuOpen ? styles.open : ""}`}>
        {navLinks.map((link) => (
          <li key={link.href}>
            <a href={link.href} onClick={() => setMenuOpen(false)}>
              <span className={styles.linkNum}>
                {String(navLinks.indexOf(link) + 1).padStart(2, "0")}
              </span>
              {link.label}
            </a>
          </li>
        ))}
      </ul>

      <a href="#contact" className={styles.ctaBtn}>
        Contactez-moi
      </a>

      <button
        className={`${styles.burger} ${menuOpen ? styles.active : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Menu"
      >
        <span />
        <span />
        <span />
      </button>
    </nav>
  );
}
