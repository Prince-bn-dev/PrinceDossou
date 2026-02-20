import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.line} />
        <div className={styles.content}>
          <span className={styles.copy}>
            © 2024 <strong>Dossou Prince</strong> — Développeur Web &amp; Mobile
          </span>
          <span className={styles.built}>
            Construit avec React.js &amp; SCSS
          </span>
        </div>
      </div>
    </footer>
  );
}
