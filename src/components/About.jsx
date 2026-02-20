import styles from "./About.module.scss";

export default function About() {
  return (
    <section className={styles.about} id="about">
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionNum}>01</span>
          <h2 className={styles.sectionTitle}>À propos de moi</h2>
        </div>

        <div className={styles.grid}>
          <div className={styles.textBlock}>
            <p className={styles.lead}>
              Je suis <strong>Dossou Prince</strong>, développeur web &amp;
              mobile fullstack basé à{" "}
              <span className={styles.highlight}>Cococodji, Abomey-Calavi</span>
              .
            </p>
            <p>
              Étudiant en première année d'Économie et Gestion, je combine
              rigueur analytique et créativité technique pour concevoir des
              produits digitaux qui allient esthétique moderne et performance
              optimale.
            </p>
            <p>
              Passionné par les nouvelles technologies, je me spécialise dans la
              création d'interfaces utilisateur soignées côté front, couplées à
              des APIs robustes côté back-end — le tout avec une attention
              constante à l'expérience utilisateur.
            </p>

            <div className={styles.infoGrid}>
              <div className={styles.infoItem}>
                <span className={styles.infoLabel}>Email</span>
                <a
                  href="mailto:princedossou465@gmail.com"
                  className={styles.infoValue}
                >
                  princedossou465@gmail.com
                </a>
              </div>
              <div className={styles.infoItem}>
                <span className={styles.infoLabel}>Téléphone</span>
                <span className={styles.infoValue}>+229 0151879255</span>
              </div>
              <div className={styles.infoItem}>
                <span className={styles.infoLabel}>Localisation</span>
                <span className={styles.infoValue}>Abomey-Calavi, Bénin</span>
              </div>
              <div className={styles.infoItem}>
                <span className={styles.infoLabel}>Statut</span>
                <span className={`${styles.infoValue} ${styles.available}`}>
                  ● Disponible
                </span>
              </div>
            </div>
          </div>

          <div className={styles.educationBlock}>
            <h3 className={styles.blockTitle}>
              <span>//</span> Formation
            </h3>
            <div className={styles.educationCard}>
              <div className={styles.eduYear}>2023 — 2024</div>
              <div className={styles.eduContent}>
                <h4>Baccalauréat</h4>
                <p>Collège Martin Luther King</p>
                <span>Abomey-Calavi</span>
              </div>
            </div>

            <h3 className={styles.blockTitle} style={{ marginTop: "40px" }}>
              <span>//</span> Langues
            </h3>
            <div className={styles.languages}>
              <div className={styles.langItem}>
                <div className={styles.langHeader}>
                  <span>Français</span>
                </div>
                <div className={styles.langBar}>
                  <div className={styles.langFill} style={{ width: "90%" }} />
                </div>
              </div>
              <div className={styles.langItem}>
                <div className={styles.langHeader}>
                  <span>Anglais</span>
                </div>
                <div className={styles.langBar}>
                  <div className={styles.langFill} style={{ width: "50%" }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
