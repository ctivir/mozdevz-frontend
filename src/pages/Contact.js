import styles from '../styles/Contact.module.css'
import Header from '../components/Header';
import Footer from '../components/Footer';
import location from '../assets/icons/location.svg'
import email from '../assets/icons/email.svg'
import phone from '../assets/icons/phone.svg'
import twitter from '../assets/icons/twitter.svg'
import facebook from '../assets/icons/facebook.svg'



function Contact() {
  return (
    <div className={styles.contact}>
      <Header />
      {/* Contact Container */}
      <div className={styles.contactContainer}>
        <aside className={styles.contactDetails}>
          {/* Contact Description */}
          <div className={styles.contactDescription}>
            <h1 className={styles.contactTitle}>
              Contacte-nos
            </h1>
            <p className={styles.contactText}>
              Para mais informações não exite em escrever-nos
            </p>
          </div>

          {/* Contact Info */}
          <div className={styles.contactInfo}>
            <div className={styles.contactLabel}>
              <img
                className={styles.icon}
                src={phone}
                alt="phone"
              />
              <span className={styles.text}>
                +258 84 623 9715 / +258 84 729 8029
              </span>
            </div>

            <div className={styles.contactLabel}>
              <img
                className={styles.icon}
                src={email}
                alt="email"
              />
              <span className={styles.text}>
                info@mozdevz.org
              </span>
            </div>

            <div className={styles.contactLabel}>
              <img
                className={styles.icon}
                src={location}
                alt="location"
              />
              <span className={styles.text}>
                Av. Paulo Samuel Kankhomba, Nº 106 Maputo
              </span>
            </div>
          </div>

          <div className={styles.contactSocials}>
            <i className={styles.socialIcon}>
              <img
                className={styles.icon}
                src={facebook}
                alt="facebook"
              />
            </i>

            <i className={styles.socialIcon}>
              <img
                className={styles.icon}
                src={twitter}
                alt="twitter"
              />
            </i>
          </div>
        </aside>

        {/* Contact Form */}
        <aside className={styles.contactForm}>
          <form className={styles.form}>
            <div className={styles.input}>
              <label htmlFor="nome">Seu nome</label>
              <input type="text" id="name" />
            </div>
            <div className={styles.input}>
              <label htmlFor="email">Seu email</label>
              <input type="email" id="email" />
            </div>
            <div className={styles.input}>
              <label htmlFor="message">Sua messagem</label>
              <textarea id="message" />
            </div>
            <button type="submit">Enviar messagem</button>
          </form>
        </aside>
      </div>
      <Footer />
    </div>
  )
}

export default Contact;