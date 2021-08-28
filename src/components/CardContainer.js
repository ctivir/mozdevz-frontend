import styles from '../styles/Home.module.css'
import talents from '../assets/icons/talents.svg'
import startup from '../assets/icons/startup.svg'
import corporate from '../assets/icons/corporate.svg'

function CardContainer() {
  return (
    <aside className={styles.cardContainer}>
      <aside className={styles.card}>
        <img
          className={styles.cardIcon}
          src={talents}
          alt="Talentos"
        />
        <h3 className={styles.cardTitle}>
          Talentos
        </h3>
        <p className={styles.cardText}>
          Capacitados e desenvolvemos talentos
          com o objective de preprarar e integrar
          no mercado de trabalho atraves da
          nossa rede de parceiros
        </p>
      </aside>

      <aside className={styles.card}>
        <img
          className={styles.cardIcon}
          src={startup}
          alt="Startup"
        />
        <h3 className={styles.cardTitle}>
          Startup
        </h3>
        <p className={styles.cardText}>
          Apoiamos equipas multidisplinares
          com orientação e capacitação no
          desenvolvimento de soluções
          tecnológicas em ambientes de
          extrema incerteza.
        </p>
      </aside>

      <aside className={styles.card}>
        <img
          className={styles.cardIcon}
          src={corporate}
          alt="Corporate"
        />
        <h3 className={styles.cardTitle}>
          Corporate
        </h3>
        <p className={styles.cardText}>
          Firmamos parceirias e trabalhamos com
          empresas e ONGs no desenvolvimento de
          soluções de base tecnológica para a
          resolução de problemas sociais.
        </p>
      </aside>
    </aside>
  )
}

export default CardContainer;