import 
{
  Container,  
  FooterCopy, 
  FooterDetails, 
  FooterLogo,
  FooterNav,
  FooterSocials
} 
from './styles'
import logo from '../../assets/logo.png'
import facebook from '../../assets/icons/facebook.svg'
import twitter from '../../assets/icons/twitter.svg'
import Link from 'next/link'
import Image from 'next/image'

function Footer() {
  return (
    <Container>
      {/* Logo */}
      <FooterLogo>
        <Image
          src={logo}
          alt="Mozadevz"
        /> 
      </FooterLogo>

      {/* Navigation */}
      <FooterNav>
        <Link href="/Programs">
          <a>Programas</a>
        </Link>
        <Link href="">
          <a>Equipe</a>
        </Link>
        <Link href="">
          <a>Sobre</a>
        </Link>
        <Link href="/Contact">
          <a>Contacto</a>
        </Link>
      </FooterNav>

      {/* Footer Details */}
      <FooterDetails>

        <FooterSocials>
          <i>
            <Image 
              src={facebook}
              alt='mozdevz facebook'
              width={41} height={41}
            />
          </i>
          <i>
            <Image
              src={twitter}
              alt='mozdevz twitter'
              width={41} height={41}
            />
          </i>
        </FooterSocials>
        <FooterCopy>
          {'<MOZDEVZ />'}. Todos os direitos reservados.
        </FooterCopy>
      </FooterDetails>
    </Container>
  )
}

export default Footer;