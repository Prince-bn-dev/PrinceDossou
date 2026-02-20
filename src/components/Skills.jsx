import styles from "./Skills.module.scss";

const skillGroups = [
  {
    category: "Frontend",
    icon: "◈",
    skills: [
      "HTML5",
      "CSS3",
      "SCSS",
      "JavaScript",
      "React.js",
      "Vue.js",
      "Next.js",
    ],
  },
  {
    category: "Backend",
    icon: "◉",
    skills: ["Node.js", "Express.js", "MongoDB", "REST API"],
  },
  {
    category: "Mobile",
    icon: "◫",
    skills: ["React Native", "Kotlin"],
  },
  {
    category: "Outils",
    icon: "◐",
    skills: ["Git", "GitHub", "Vercel", "VS Code"],
  },
];

const allSkills = [
  { name: "React.js", level: 90 },
  { name: "JavaScript", level: 88 },
  { name: "Node.js", level: 78 },
  { name: "HTML/CSS", level: 95 },
  { name: "Next.js", level: 75 },
  { name: "Vue.js", level: 70 },
  { name: "MongoDB", level: 72 },
  { name: "React Native", level: 65 },
];

export default function Skills() {
  return (
    <section className={styles.skills} id="skills">
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionNum}>02</span>
          <h2 className={styles.sectionTitle}>Compétences</h2>
        </div>

        <div className={styles.layout}>
          <div className={styles.groups}>
            {skillGroups.map((group) => (
              <div key={group.category} className={styles.group}>
                <div className={styles.groupHeader}>
                  <span className={styles.groupIcon}>{group.icon}</span>
                  <span className={styles.groupName}>{group.category}</span>
                </div>
                <div className={styles.tags}>
                  {group.skills.map((skill) => (
                    <span key={skill} className={styles.tag}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className={styles.levels}>
            <h3 className={styles.levelsTitle}>
              <span>//</span> Niveau de maîtrise
            </h3>
            {allSkills.map((s) => (
              <div key={s.name} className={styles.skillRow}>
                <div className={styles.skillMeta}>
                  <span className={styles.skillName}>{s.name}</span>
                </div>
                <div className={styles.bar}>
                  <div
                    className={styles.barFill}
                    style={{ width: `${s.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
