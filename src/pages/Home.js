import cover from '../assets/cover.svg';
import codingIcon from '../assets/icons/programing.svg';
import mozdevz from '../assets/mozdevz.jpg';
import CardContainer from '../components/CardContainer';
import Header from '../components/Header';
import Footer from '../components/Footer'
import LogoContainer from '../components/LogoContainer';
import StatsItem from '../components/StatsItem';
import styles from '../styles/Home.module.css';


function Home() {
  return (
    <div className={styles.home}>
      <Header />
      <section className={styles.hero}>
        {/* Description */}
        <aside className={styles.heroDescription}>
          <h1 className={styles.heroTitle}>
            A maior comunidade de desenvolvedores de Moçambique
          </h1>
          <button>Saiba Mais</button>
        </aside>

        {/* Cover */}
        <aside className={styles.heroCover}>
          <img
            className={styles.coverImage}
            src={cover}
            alt='Comunidade Mozdevz'
          />
        </aside>
      </section>

      <section className={styles.stats}>
        {/* Description */}
        <aside className={styles.statsDescription}>
          <h2 className={styles.statsTitle}>
            Impactamos milhares de
            <span className={styles.hightlight}> devz </span>
            e impulsionamos carreiras
          </h2>
          <i className={styles.codingIcon}>
            <img
              src={codingIcon}
              alt='Coding Icon'
            />
          </i>
        </aside>

        {/* Container */}
        <aside className={styles.statsContainer}>
          <StatsItem
            title={'5000'}
            text={
              `Pessoas sensibilizadas 
               atraves de eventos educacionais 
               e partilha de experiencia`
            }
          />
          <StatsItem
            title={'+800'}
            text={
              `Pessoas sensibilizadas 
               atraves de eventos educacionais 
               e partilha de experiencia`
            }
          />
          <StatsItem
            title={'+800'}
            text={
              `Pessoas sensibilizadas 
               atraves de eventos educacionais 
               e partilha de experiencia`
            }
          />
          <StatsItem
            title={'+100'}
            text={
              `Pessoas sensibilizadas 
               atraves de eventos educacionais 
               e partilha de experiencia`
            }
          />
        </aside>
      </section>

      {/* Learn Section */}
      <section className={styles.learn}>
        {/* Cover */}
        <aside className={styles.learnCover}>
          <img
            className={styles.learnImage}
            src={mozdevz}
            alt='Comunidade Mozdevz'
          />
        </aside>

        <aside className={styles.learnDescription}>
          <h1 className={styles.learnTittle}>
            Aprendemos em comunidade
          </h1>
          <p className={styles.learnText}>
            Proporcionamos oportunidades de partilha de
            conhecimento e desenvolvimento de habilidades
            para a criação de produtos digitais a jovens
            durante o period de formação e contribuimos
            para o desenvolvimento da sociedade atraves
            das soluções desenvolvidas.
          </p>
          <button>Saiba Mais</button>
        </aside>
      </section>

      <section className={styles.connection}>
        {/* Description */}
        <aside className={styles.connectionDescription}>
          <h2 className={styles.connectionTitle}>
            Conexão e Integração
          </h2>
          <span className={styles.connectionHightlight}>
            Experiência - Tecnologia - Conexão
          </span>
        </aside>

        {/* Container */}
        <CardContainer />
      </section>

      {/* Sponsors */}
      <section className={styles.partners}>
        {/* Description */}
        <aside className={styles.partnersDescription}>
          <h2 className={styles.partnersTitle}>
            Parceiros
          </h2>
          <span className={styles.partnersHightlight}>
            Responsaveis pelo apoio e suporte da
            comunidade
          </span>
        </aside>

        {/* Container */}
        <LogoContainer />
      </section>
      <Footer />
    </div>
  )
}

export default Home;