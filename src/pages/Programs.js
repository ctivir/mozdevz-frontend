import styles from '../styles/Programs.module.css'
import communities from '../assets/icons/communities.svg'
import hackaton from '../assets/icons/hackaton.svg'
import university from '../assets/icons/university.svg'
import Header from '../components/Header';
import Footer from '../components/Footer';


function Programs() {
  return (
    <div className={styles.programs}>
      <Header />
      <div className={styles.programsContainer}>
        <div className={styles.programsDescription}>
          <div className={styles.programsSection}>
            <h1 className={styles.programsTitle}>
              Programas para alavancar a sua carreira
            </h1>
            <p className={styles.programsText}>
              Nossos programas foram feitos pensando na sua
              carreira. Através dos nossos programas você tem
              a oportunidade de se conectar com outros devz e
              impulsionar as suas habilidades tecnicas como
              tambem alargar a sua rede de contactos.
            </p>
          </div>

          <div className={styles.programsSection}>
            <h2 className={styles.programsSubTitle}>
              Uma ponte para a sua vida acadêmica
              e a comunidade
            </h2>
            <p className={styles.programsText}>
              Criamos uma ponte de intercambio  e partilha de
              conhecimento entre comunidade e a sua school.
            </p>
          </div>
        </div>

        {/* Programs Items */}
        <div className={styles.programsItems}>
          <div className={styles.programsItem}>
            <div className={styles.programsIcon}>
              <img
                className={styles.programsImage}
                src={communities}
                alt="Communities"
              />
            </div>
            <div className={styles.programsItemText}>
              <h2 className={styles.programsItemTitle}> Mozdevz Meetup</h2>
              <p className={styles.programsItemDescription}>
                É um evento para networking informal para as pessoas com um interesse
                na utilização das Tecnologias de Informação e Comunicação
                para Desenvolvimento.

                O nosso objectivo é reunir os melhores especialistas do ecossistema digital
                para um momento de encontro, intercâmbio de informações e networking.
              </p>
            </div>
          </div>

          <div className={styles.programsItem}>
            <div className={styles.programsIcon}>
              <img
                className={styles.programsImage}
                src={communities}
                alt="Communities"
              />
            </div>
            <div className={styles.programsItemText}>
              <h2 className={styles.programsItemTitle}> Mozdevz Meetup</h2>
              <p className={styles.programsItemDescription}>
                É um evento para networking informal para as pessoas com um interesse
                na utilização das Tecnologias de Informação e Comunicação
                para Desenvolvimento.

                O nosso objectivo é reunir os melhores especialistas do ecossistema digital
                para um momento de encontro, intercâmbio de informações e networking.
              </p>
            </div>
          </div>

          <div className={styles.programsItem}>
            <div className={styles.programsIcon}>
              <img
                className={styles.programsImage}
                src={communities}
                alt="Communities"
              />
            </div>
            <div className={styles.programsItemText}>
              <h2 className={styles.programsItemTitle}> Mozdevz Meetup</h2>
              <p className={styles.programsItemDescription}>
                É um evento para networking informal para as pessoas com um interesse
                na utilização das Tecnologias de Informação e Comunicação
                para Desenvolvimento.

                O nosso objectivo é reunir os melhores especialistas do ecossistema digital
                para um momento de encontro, intercâmbio de informações e networking.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Programs;