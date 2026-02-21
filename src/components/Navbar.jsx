import { useState, useEffect } from "react";
import styles from "./Navbar.module.scss";
import { PhMoonStars, PhSunDuotone } from "../uikits/icon";

const navLinks = [
  { label: "À propos", href: "#about" },
  { label: "Compétences", href: "#skills" },
  { label: "Réalisations", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

function getInitialTheme() {
  if (typeof window === "undefined") return true;
  const saved = localStorage.getItem("theme") ?? "dark";
  document.documentElement.setAttribute("data-theme", saved);
  return saved === "dark";
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const [isDark, setIsDark] = useState(getInitialTheme);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleTheme = () => {
    setIsDark((prev) => {
      const next = !prev;
      const nextLabel = next ? "dark" : "light";
      document.documentElement.setAttribute("data-theme", nextLabel);
      localStorage.setItem("theme", nextLabel);
      return next;
    });
  };

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.logo}>
        <span className={styles.logoMark}>D</span>
        <span className={styles.logoText}>Prince</span>
      </div>

      <ul className={`${styles.links} ${menuOpen ? styles.open : ""}`}>
        {navLinks.map((link, i) => (
          <li key={link.href}>
            <a href={link.href} onClick={() => setMenuOpen(false)}>
              <span className={styles.linkNum}>
                {String(i + 1).padStart(2, "0")}
              </span>
              {link.label}
            </a>
          </li>
        ))}
      </ul>

      <div className={styles.rightActions}>
        <button
          className={styles.themeToggle}
          onClick={toggleTheme}
          aria-label="Changer de thème"
          title={isDark ? "Passer en mode clair" : "Passer en mode sombre"}
        >
          <span className={styles.themeIcon} aria-hidden="true">
            {isDark ? <PhSunDuotone /> : <PhMoonStars />}
          </span>
          <span className={styles.themeTrack}>
            <span
              className={`${styles.themeThumb} ${
                isDark ? styles.thumbDark : styles.thumbLight
              }`}
            />
          </span>
        </button>

        <a href="#contact" className={styles.ctaBtn}>
          Contactez-moi
        </a>
      </div>

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
