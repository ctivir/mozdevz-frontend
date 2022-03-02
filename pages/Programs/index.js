
import communities from '../../assets/icons/communities.svg'
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { ProgramsPage } from '../../styles/programs';
import Image from 'next/image';


function Programs() {
  return (
    <ProgramsPage >
      <Header />
      <div className="programsContainer">
        <div className="programsDescription">
          <div className="programsSection">
            <h1 className="programsTitle">
              Programas para alavancar a sua carreira
            </h1>
            <p className="programsText">
              Nossos programas foram feitos pensando na sua
              carreira. Através dos nossos programas você tem
              a oportunidade de se conectar com outros devz e
              impulsionar as suas habilidades técnicas como
              também alargar a sua rede de contactos.
            </p>
          </div>

          <div className="programsSection">
            <h2 className="programsSubTitle">
              Uma ponte para a sua vida académica
              e a comunidade
            </h2>
            <p className="programsText">
              Criamos uma ponte de intercâmbio  e partilha de
              conhecimento entre comunidade e a sua school.
            </p>
          </div>
        </div>

        {/* Programs Items */}
        <div className="programsItems">
          <div className="programsItem">
            <div className="programsIcon">
              <Image
                className="programsImage"
                src={communities}
                alt="Communities"
              />
            </div>
            <div className="programsItemText">
              <h2 className="programsItemTitle"> Mozdevz Meetup</h2>
              <p className="programsItemDescription">
                É um evento para networking informal para as pessoas com um interesse
                na utilização das Tecnologias de Informação e Comunicação
                para Desenvolvimento.

                O nosso objectivo é reunir os melhores especialistas do ecossistema digital
                para um momento de encontro, intercâmbio de informações e networking.
              </p>
            </div>
          </div>

          <div className="programsItem">
            <div className="programsIcon">
              <Image
                className="programsImage"
                src={communities}
                alt="Communities"
              />
            </div>
            <div className="programsItemText">
              <h2 className="programsItemTitle"> Mozdevz Meetup</h2>
              <p className="programsItemDescription">
                É um evento para networking informal para as pessoas com um interesse
                na utilização das Tecnologias de Informação e Comunicação
                para Desenvolvimento.

                O nosso objectivo é reunir os melhores especialistas do ecossistema digital
                para um momento de encontro, intercâmbio de informações e networking.
              </p>
            </div>
          </div>

          <div className="programsItem">
            <div className="programsIcon">
              <Image
                className="programsImage"
                src={communities}
                alt="Communities"
              />
            </div>
            <div className="programsItemText">
              <h2 className="programsItemTitle"> Mozdevz Meetup</h2>
              <p className="programsItemDescription">
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
    </ProgramsPage >
  )
}

export default Programs;
