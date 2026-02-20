import { PhArrowRightBold } from "../uikits/icon";
import styles from "./Hero.module.scss";

export default function Hero() {
  return (
    <section className={styles.hero} id="home">
      <div className={styles.grid} />

      <div className={styles.orb} />

      <div className={styles.container}>
        <div className={styles.left}>
          <div className={styles.badge}>
            <span className={styles.dot} />
            Disponible pour des projets
          </div>

          <h1 className={styles.heading}>
            <span className={styles.line1}>DOSSOU</span>
            <span className={styles.line2}>
              Prince
              <span className={styles.accent}>.</span>
            </span>
          </h1>

          <p className={styles.role}>
            <span className={styles.roleTag}>&lt;</span>
            Développeur Web &amp; Mobile Fullstack
            <span className={styles.roleTag}>/&gt;</span>
          </p>

          <p className={styles.description}>
            Étudiant passionné avec <strong>3 ans d'expérience</strong> dans la
            création d'interfaces web modernes et performantes. Du design à
            l'API, je construis des expériences qui marquent.
          </p>

          <div className={styles.actions}>
            <a href="#projects" className={styles.btnPrimary}>
              Voir mes réalisations
              <PhArrowRightBold />
            </a>
            <a
              href="mailto:princedossou465@gmail.com"
              className={styles.btnSecondary}
            >
              Me contacter
            </a>
          </div>

          <div className={styles.stats}>
            <div className={styles.stat}>
              <span className={styles.statNum}>3+</span>
              <span className={styles.statLabel}>Ans d'exp.</span>
            </div>
            <div className={styles.divider} />
            <div className={styles.stat}>
              <span className={styles.statNum}>4+</span>
              <span className={styles.statLabel}>Projets livrés</span>
            </div>
            <div className={styles.divider} />
            <div className={styles.stat}>
              <span className={styles.statNum}>10+</span>
              <span className={styles.statLabel}>Technologies</span>
            </div>
          </div>
        </div>

        <div className={styles.right}>
          <div className={styles.imageFrame}>
            <div className={styles.imageInner}>
              <img
                src="/prince.png"
                alt="Dossou Prince"
                className={styles.photo}
              />
            </div>
            <div className={styles.frameBorder} />
            <div className={styles.frameCornerTL} />
            <div className={styles.frameCornerBR} />

            <div className={`${styles.floatTag} ${styles.tagReact}`}>
              Frontend
            </div>
            <div className={`${styles.floatTag} ${styles.tagNode}`}>
              Backend
            </div>
            <div className={`${styles.floatTag} ${styles.tagMobile}`}>
              Mobile
            </div>
          </div>
        </div>
      </div>

      <div className={styles.scrollIndicator}>
        <div className={styles.scrollLine} />
        <span>Scroll</span>
      </div>
    </section>
  );
}
