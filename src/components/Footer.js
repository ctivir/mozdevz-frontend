import styles from '../styles/Footer.module.css'
import logo from '../assets/logo.png'
import facebook from '../assets/icons/facebook.svg'
import twitter from '../assets/icons/twitter.svg'

function Footer() {
  return (
    <footer className={styles.footer}>
      {/* Logo */}
      <aside className={styles.footerLogo}>
        <img
          src={logo}
          alt="Mozadevz"
        />
      </aside>

      {/* Navigation */}
      <aside className={styles.footerNav}>
        <a href="/" className={styles.link}>Programas</a>
        <a href="/" className={styles.link}>Equipe</a>
        <a href="/" className={styles.link}>Sobre</a>
        <a href="/" className={styles.link}>Contacto</a>
      </aside>

      {/* Footer Details */}
      <aside className={styles.footerDetails}>
        <p className={styles.footerCopys}>
          {'<MOZDEVZ />'}. Todos os direitos reservados.
        </p>

        <div className={styles.footerSocials}>
          <i className={styles.socialIcon}>
            <img src={facebook} alt='mozdevz facebook' />
          </i>
          <i className={styles.socialIcon}>
            <img src={twitter} alt='mozdevz twitter' />
          </i>
        </div>
      </aside>
    </footer>
  )
}

export default Footer;