import { PhArrowUpRightLight } from "../uikits/icon";
import styles from "./Projects.module.scss";

const projects = [
  {
    num: "01",
    title: "By Ichola",
    desc: "Interface e-commerce moderne avec panier dynamique, filtres et design épuré pour une marque lifestyle.",
    tags: ["React.js", "CSS", "Vercel"],
    url: "https://by-ichola.vercel.app",
    image: "/images/by-ichola.png",
    accent: "#3a6b3a",
  },
  {
    num: "02",
    title: "Aqmee",
    desc: "Application web full-stack avec authentification, tableau de bord interactif et API REST intégrée.",
    tags: ["Next.js", "Node.js", "MongoDB"],
    url: "https://aqmee.vercel.app",
    image: "/images/aqmee.png",
    accent: "#3a3a6b",
  },
  {
    num: "03",
    title: "Formcarry Frontend",
    desc: "Interface de gestion de formulaires avec validation avancée et intégration de services tiers.",
    tags: ["React.js", "SCSS", "API"],
    url: "https://formcarry-frontend.vercel.app",
    image: "/images/formcarry.png",
    accent: "#6b4a2a",
  },
  {
    num: "04",
    title: "Tutorea App",
    desc: "Plateforme éducative pour tuteurs et étudiants avec système de réservation et profils utilisateurs.",
    tags: ["React.js", "Express", "MongoDB"],
    url: "https://tutorea-app-front.vercel.app",
    image: "/images/tutorea.png",
    accent: "#2a4a6b",
  },
];

export default function Projects() {
  return (
    <section className={styles.projects} id="projects">
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionNum}>03</span>
          <h2 className={styles.sectionTitle}>Réalisations</h2>
        </div>

        <div className={styles.grid}>
          {projects.map((project) => (
            <a
              key={project.num}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.card}
            >
              <div className={styles.cardThumb}>
                <img
                  src={project.image}
                  alt={`Aperçu ${project.title}`}
                  className={styles.cardImg}
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                    e.currentTarget.nextSibling.style.display = "flex";
                  }}
                />
                <div
                  className={styles.cardPlaceholder}
                  style={{
                    background: `linear-gradient(135deg, ${project.accent}66, ${project.accent}22)`,
                    display: "none",
                  }}
                >
                  <span className={styles.placeholderNum}>{project.num}</span>
                  <span className={styles.placeholderLabel}>
                    {project.title}
                  </span>
                </div>
                <div className={styles.thumbOverlay}>
                  <span className={styles.viewLabel}>
                    Voir le projet
                    <PhArrowUpRightLight />
                  </span>
                </div>
              </div>

              <div className={styles.cardBody}>
                <div className={styles.cardMeta}>
                  <span className={styles.cardNum}>{project.num}</span>
                  <div className={styles.cardArrow}>
                    <PhArrowUpRightLight />
                  </div>
                </div>

                <h3 className={styles.cardTitle}>{project.title}</h3>
                <p className={styles.cardDesc}>{project.desc}</p>

                <div className={styles.cardTags}>
                  {project.tags.map((tag) => (
                    <span key={tag} className={styles.cardTag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className={styles.cardHoverLine} />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
