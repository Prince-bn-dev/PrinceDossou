import {
  PhArrowRightBold,
  PhEnvelopeLight,
  PhMapPin,
  PhPhoneLight,
} from "../uikits/icon";
import styles from "./Contact.module.scss";

export default function Contact() {
  return (
    <section className={styles.contact} id="contact">
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionNum}>04</span>
          <h2 className={styles.sectionTitle}>Contact</h2>
        </div>

        <div className={styles.layout}>
          <div className={styles.left}>
            <p className={styles.headline}>
              Vous avez un projet ?<br />
              <span>Parlons-en.</span>
            </p>
            <p className={styles.sub}>
              Je suis disponible pour des missions freelance, des stages ou tout
              projet ambitieux qui nécessite une touche technique et créative.
            </p>

            <div className={styles.contactLinks}>
              <a
                href="mailto:princedossou465@gmail.com"
                className={styles.link}
              >
                <div className={styles.linkIcon}>
                  <PhEnvelopeLight />
                </div>
                <div className={styles.linkText}>
                  <span className={styles.linkLabel}>Email</span>
                  <span className={styles.linkValue}>
                    princedossou465@gmail.com
                  </span>
                </div>
              </a>

              <a href="tel:+2290151879255" className={styles.link}>
                <div className={styles.linkIcon}>
                  <PhPhoneLight />
                </div>
                <div className={styles.linkText}>
                  <span className={styles.linkLabel}>Téléphone</span>
                  <span className={styles.linkValue}>+229 0151879255</span>
                </div>
              </a>

              <div className={styles.link}>
                <div className={styles.linkIcon}>
                  <PhMapPin />
                </div>
                <div className={styles.linkText}>
                  <span className={styles.linkLabel}>Localisation</span>
                  <span className={styles.linkValue}>
                    Cococodji, Abomey-Calavi
                  </span>
                </div>
              </div>
            </div>

            {/* Reference person */}
            <div className={styles.reference}>
              <div className={styles.refLabel}>Personne de référence</div>
              <div className={styles.refCard}>
                <div className={styles.refAvatar}>E</div>
                <div>
                  <div className={styles.refName}>Evans DJOSSOUVI</div>
                  <div className={styles.refRole}>
                    Développeur d'applications
                  </div>
                  <a
                    href="https://evansdjossouvi.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.refLink}
                  >
                    evansdjossouvi.com ↗
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.right}>
            <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
              <div className={styles.field}>
                <label>Votre nom</label>
                <input type="text" placeholder="Jean Dupont" />
              </div>
              <div className={styles.field}>
                <label>Votre email</label>
                <input type="email" placeholder="jean@exemple.com" />
              </div>
              <div className={styles.field}>
                <label>Sujet</label>
                <input
                  type="text"
                  placeholder="Projet freelance, collaboration..."
                />
              </div>
              <div className={styles.field}>
                <label>Message</label>
                <textarea
                  rows="5"
                  placeholder="Décrivez votre projet ou demande..."
                />
              </div>
              <button type="submit" className={styles.submitBtn}>
                Envoyer le message
                <PhArrowRightBold />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
