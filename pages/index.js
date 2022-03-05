import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import logo from '../assets/logo.png'
import twitter from '../public/twitter.png'
import facebook from '../public/facebook.png'
import linkedin from '../public/linkedin.png'
import youtube from '../public/youtube.png'
import instagram from '../public/instagram.png'
import cover from '../public/mozdevz-cover.jpg'
import { ComingSoon, Header, Main, SideCover, SocialIconWrapper } from '../styles/comingSoon'

export default function Home() {
  return (
    <ComingSoon>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="description"
          content="A maior comunidade de devz em Moz"
        />
        <title>Em manutenção</title>
      </Head>
      
      {/* Header Section */}
      <Header>
        <Image 
          src={logo}
          alt='Comunidade Moçambicana de Desenvolvedores de Software e Aplicações'
        />
      </Header>

      {/* Hero Image Section */}
      <SideCover>
        <div className='img-mobile'>
          <Image 
            src={cover}
            alt='Mozdevz hero mobile'
          />
        </div>
        <div className='img-desktop'>
          <Image 
            src={cover}
            alt='Mozdevz hero desktop'
            layout='fill'
            objectFit='cover'
          />
        </div>
      </SideCover>

      {/* Main Content Section */}
      <Main>
        <h1>Estamos em <span>manutenção</span></h1>
        <h2>Segue-nos para <br /> mais actualizações!</h2>
        <p>contacto@mozdevz.org</p>
       
       {/* Socal Media Icons */}
       <SocialIconWrapper>
          <Link href="https://twitter.com/mozdevz">
            <a className="icon-wrapper">
              <Image src={twitter} alt='twitter icon'/>
            </a>
          </Link>
          <Link href="https://www.facebook.com/mozdevz/">
            <a className="icon-wrapper">
              <Image src={facebook} alt='facebook icon'/>
            </a>
          </Link>
          <Link href="https://www.linkedin.com/company/mozdevz/">
            <a className="icon-wrapper">
              <Image src={linkedin} alt='linkedin icon'/>  
            </a>
          </Link>
          <Link href="https://www.instagram.com/mozdevz/">
            <a className="icon-wrapper">
              <Image src={instagram} alt='instagram icon'/>  
            </a>
          </Link>
          <Link href="https://www.youtube.com/channel/UC4vjNsLZPZUYTjsQllEMiMQ">
            <a className="icon-wrapper">
              <Image src={youtube} alt='youtube icon'/>  
            </a>
          </Link>
        </SocialIconWrapper>
      </Main>
    </ComingSoon>
  )
}
``