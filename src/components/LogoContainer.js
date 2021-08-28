import styles from '../styles/Home.module.css'
import cca from '../assets/sponsors/cca.png'
import ciuem from '../assets/sponsors/ciuem.png'
import coworklab from '../assets/sponsors/coworklab.png'
import mctestp from '../assets/sponsors/mctestp.png'
import oxfam from '../assets/sponsors/oxfam.png'
import psi from '../assets/sponsors/psi.png'
import reino from '../assets/sponsors/reino.png'

function LogoContainer() {
  return (
    <aside className={styles.logoContainer}>
      <aside className={styles.logoCard}>
        <img
          className={styles.logo}
          src={cca}
          alt="Centro Cultural Americano"
        />
      </aside>
      <aside className={styles.logoCard}>
        <img
          className={styles.logo}
          src={ciuem}
          alt="Centro Cultural Americano"
        />
      </aside>
      <aside className={styles.logoCard}>
        <img
          className={styles.logo}
          src={reino}
          alt="Centro Cultural Americano"
        />
      </aside>
      <aside className={styles.logoCard}>
        <img
          className={styles.logo}
          src={psi}
          alt="Centro Cultural Americano"
        />
      </aside>
      <aside className={styles.logoCard}>
        <img
          className={styles.logo}
          src={coworklab}
          alt="Centro Cultural Americano"
        />
      </aside>
      <aside className={styles.logoCard}>
        <img
          className={styles.logo}
          src={mctestp}
          alt="Centro Cultural Americano"
        />
      </aside>
      <aside className={styles.logoCard}>
        <img
          className={styles.logo}
          src={oxfam}
          alt="Centro Cultural Americano"
        />
      </aside>
    </aside>
  )
}

export default LogoContainer;