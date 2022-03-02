import Head from 'next/head'
import Image from 'next/image'
import { HomePage } from '../styles/home';
import cover from '../assets/cover.svg';
import codingIcon from '../assets/icons/programing.svg';
import mozdevz from '../assets/mozdevz.jpg';
import Header from '../components/Header';
import CardContainer from '../components/CardContainer';
import Footer from '../components/Footer'
import LogoContainer from '../components/LogoContainer';
import StatsItem from '../components/StatsItem';

import { Button } from '../components/Button';

export default function Home() {
  return (
    <HomePage>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="description"
          content="A maior comunidade de devz em Moz"
        />
        <title>Comunidade Mozdevz</title>
      </Head>
      <Header /> 
      <section className="hero">
        {/* Description */}
        <aside className="heroDescription">
          <h1 className="heroTitle">
            A maior comunidade de desenvolvedores de Moçambique
          </h1>
          <Button>
            Saiba Mais
          </Button>
        </aside>

        {/* Cover */}
        <aside className="heroCover">
          <Image
            className="coverImage"
            src={cover}
            alt='Comunidade Mozdevz'
            width={540}
            height={390}
          />
        </aside>
      </section>

      <section className="stats">
        {/* Description */}
        <aside className="statsDescription">
          <h2 className="statsTitle">
            Impactamos milhares de
            <span className="hightlight"> devz </span>
            e impulsionamos carreiras
          </h2>
          <i className="codingIcon">
            <Image
              src={codingIcon}
              alt='Coding Icon'
              width={90}
              height={90}
            />
          </i>
        </aside>

        {/* Container */}
        <aside className="statsContainer">
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
      <section className="learn">
        {/* Cover */}
        <aside className="learnCover">
          <Image
            className="learnImage"
            src={mozdevz}
            alt='Comunidade Mozdevz'
          />
        </aside>

        <aside className="learnDescription">
          <h1 className="learnTittle">
            Aprendemos em comunidade
          </h1>
          <p className="learnText">
            Proporcionamos oportunidades de partilha de
            conhecimento e desenvolvimento de habilidades
            para a criação de produtos digitais a jovens
            durante o period de formação e contribuímos
            para o desenvolvimento da sociedade atraves
            das soluções desenvolvidas.
          </p>
          {/* <Button>Saiba Mais</Button> */}
        </aside>
      </section>

      <section className="connection">
        {/* Description */}
        <aside className="connectionDescription">
          <h2 className="connectionTitle">
            Conexão e Integração
          </h2>
          <span className="connectionHightlight">
            Experiência - Tecnologia - Conexão
          </span>
        </aside>

        {/* Container */}
        <CardContainer />
      </section>

      {/* Sponsors */}
      <section className="partners">
        {/* Description */}
        <aside className="partnersDescription">
          <h2 className="partnersTitle">
            Parceiros
          </h2>
          <span className="partnersHightlight">
            Responsaveis pelo apoio e suporte da
            comunidade
          </span>
        </aside> 

        {/* Container */}
        <LogoContainer /> 
      </section>
      <Footer />
    </HomePage>
  )
}
``