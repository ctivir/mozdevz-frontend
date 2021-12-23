import {Container, LogoCard } from './styles'
import cca from '../../assets/sponsors/cca.png'
import ciuem from '../../assets/sponsors/ciuem.png'
import coworklab from '../../assets/sponsors/coworklab.png'
import mctestp from '../../assets/sponsors/mctestp.png'
import oxfam from '../../assets/sponsors/oxfam.png'
import psi from '../../assets/sponsors/psi.png'
import reino from '../../assets/sponsors/reino.png'

export function LogoContainer() {
  return (
    <Container>
      <LogoCard>
        <img
          src={cca}
          alt="Centro Cultural Americano"
        />
      </LogoCard>
      <LogoCard>
        <img
          src={ciuem}
          alt="Centro Cultural Americano"
        />
      </LogoCard> 
      <LogoCard>
        <img
          src={reino}
          alt="Centro Cultural Americano"
        />
      </LogoCard>
      <LogoCard>
        <img
          src={psi}
          alt="Centro Cultural Americano"
        />
      </LogoCard>
      <LogoCard>
        <img
          src={coworklab}
          alt="Centro Cultural Americano"
        />
      </LogoCard>
      <LogoCard>
        <img
          src={mctestp}
          alt="Centro Cultural Americano"
        />
      </LogoCard>
      <LogoCard>
        <img
          src={oxfam}
          alt="Centro Cultural Americano"
        />
      </LogoCard>
    </Container>
  )
}

export default LogoContainer;