import {Container, LogoCard } from './styles'
import cca from '../../assets/sponsors/cca.png'
import ciuem from '../../assets/sponsors/ciuem.png'
import coworklab from '../../assets/sponsors/coworklab.png'
import mctestp from '../../assets/sponsors/mctestp.png'
import oxfam from '../../assets/sponsors/oxfam.png'
import psi from '../../assets/sponsors/psi.png'
import reino from '../../assets/sponsors/reino.png'
import Image from 'next/image'

export function LogoContainer() {
  return (
    <Container>
      <LogoCard>
        <Image
          src={cca}
          alt="Centro Cultural Americano"
        />
      </LogoCard>
      <LogoCard>
        <Image
          src={ciuem}
          alt="Centro Cultural Americano"
        />
      </LogoCard> 
      <LogoCard>
        <Image
          src={reino}
          alt="Centro Cultural Americano"
        />
      </LogoCard>
      <LogoCard>
        <Image
          src={psi}
          alt="Centro Cultural Americano"
        />
      </LogoCard>
      <LogoCard>
        <Image
          src={coworklab}
          alt="Centro Cultural Americano"
        />
      </LogoCard>
      <LogoCard>
        <Image
          src={mctestp}
          alt="Centro Cultural Americano"
        />
      </LogoCard>
      <LogoCard>
        <Image
          src={oxfam}
          alt="Centro Cultural Americano"
        />
      </LogoCard>
    </Container>
  )
}

export default LogoContainer;