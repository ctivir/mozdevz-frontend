import Head from 'next/head'
import Image from 'next/image'
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
          <div className="icon-wrapper">
            <Image src={twitter} alt='twitter icon'/>
          </div>
          <div className="icon-wrapper">
            <Image src={facebook} alt='facebook icon'/>
          </div>
          <div className="icon-wrapper">
            <Image src={linkedin} alt='linkedin icon'/>
          </div>
          <div className="icon-wrapper">
            <Image src={instagram} alt='instagram icon'/>
          </div>
          <div className="icon-wrapper">
            <Image src={youtube} alt='youtube icon'/>
          </div>
        </SocialIconWrapper>
      </Main>
    </ComingSoon>
  )
}
``