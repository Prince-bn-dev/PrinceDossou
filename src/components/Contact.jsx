import { useState } from "react";
import emailjs from "@emailjs/browser";
import {
  PhArrowRightBold,
  PhCloudArrowDownBold,
  PhEnvelopeLight,
  PhMapPin,
  PhPhoneLight,
} from "../uikits/icon";
import styles from "./Contact.module.scss";

const EMAILJS_SERVICE_ID = "service_bjw5osr";
const EMAILJS_TEMPLATE_ID = "template_un4efxp";
const EMAILJS_PUBLIC_KEY = "ZAONiuk4IHxpy4AXp";

const WA_PHONE = "22901518792155";
const WA_APIKEY = "REMPLACE_PAR_TON_APIKEY";

const CV_PATH = "/cv-prince-dossou.pdf";
const CV_FILENAME = "CV-Prince-Dossou-Developpeur.pdf";

async function sendWhatsAppNotif(name, email, subject) {
  const text = `🔔 Nouveau message sur ton portfolio !\n👤 ${name}\n📧 ${email}\n📌 ${subject}`;
  const url = `https://api.callmebot.com/whatsapp.php?phone=${WA_PHONE}&text=${encodeURIComponent(text)}&apikey=${WA_APIKEY}`;
  try {
    await fetch(url, { method: "GET", mode: "no-cors" });
  } catch {
    console.log("Erreur");
  }
}

export default function Contact() {
  const [form, setForm] = useState({
    from_name: "",
    from_email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("idle");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: form.from_name,
          from_email: form.from_email,
          subject: form.subject,
          message: form.message,
        },
        EMAILJS_PUBLIC_KEY,
      );

      await sendWhatsAppNotif(form.from_name, form.from_email, form.subject);

      setStatus("success");
      setForm({ from_name: "", from_email: "", subject: "", message: "" });
    } catch (err) {
      console.error("Erreur envoi:", err);
      setStatus("error");
    }
  };

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

            <a href={CV_PATH} download={CV_FILENAME} className={styles.cvBtn}>
              <span className={styles.cvBtnIcon}>
                <PhCloudArrowDownBold />
              </span>
              Télécharger mon CV
            </a>

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
                    href="https://evans-djossouvi.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.refLink}
                  >
                    https://evans-djossouvi.com/ ↗
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.right}>
            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.field}>
                <label htmlFor="from_name">Votre nom</label>
                <input
                  id="from_name"
                  name="from_name"
                  type="text"
                  placeholder="Jean Dupont"
                  value={form.from_name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className={styles.field}>
                <label htmlFor="from_email">Votre email</label>
                <input
                  id="from_email"
                  name="from_email"
                  type="email"
                  placeholder="jean@exemple.com"
                  value={form.from_email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className={styles.field}>
                <label htmlFor="subject">Sujet</label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  placeholder="Projet freelance, collaboration..."
                  value={form.subject}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className={styles.field}>
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  placeholder="Décrivez votre projet ou demande..."
                  value={form.message}
                  onChange={handleChange}
                  required
                />
              </div>

              {status === "success" && (
                <div className={styles.alertSuccess}>
                  ✅ Message envoyé ! Je vous répondrai sous 24h.
                </div>
              )}
              {status === "error" && (
                <div className={styles.alertError}>
                  ❌ Une erreur est survenue. Contactez-moi directement par
                  email.
                </div>
              )}

              <button
                type="submit"
                className={styles.submitBtn}
                disabled={status === "sending"}
              >
                {status === "sending" ? (
                  <>
                    <span className={styles.spinner} />
                    Envoi en cours...
                  </>
                ) : (
                  <>
                    Envoyer le message
                    <PhArrowRightBold />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
