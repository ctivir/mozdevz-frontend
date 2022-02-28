import { CardIcon, CardItem, CardText, CardTitle, Container } from './styles'
import talents from '../../assets/icons/talents.svg'
import startup from '../../assets/icons/startup.svg'
import corporate from '../../assets/icons/corporate.svg'

function CardContainer() {
  return (
    <Container>
      <CardItem>
        <CardIcon
          src={talents}
          alt="Talentos"
          width={90}
          height={90}
        /> 
        <CardTitle>
          Talentos
        </CardTitle>
        <CardText>
          Capacitados e desenvolvemos talentos
          com o objective de preprarar e integrar
          no mercado de trabalho atraves da
          nossa rede de parceiros
        </CardText>
      </CardItem>

      <CardItem>
        <CardIcon
          src={startup}
          alt="Startup"
          width={90}
          height={90}
        />
        <CardTitle>
          Startup
        </CardTitle>
        <CardText>
          Apoiamos equipas multidisplinares
          com orientação e capacitação no
          desenvolvimento de soluções
          tecnológicas em ambientes de
          extrema incerteza.
        </CardText>
      </CardItem>

      <CardItem>
        <CardIcon
          src={corporate}
          alt="Corporate"
          width={90}
          height={90}
        />
        <CardTitle>
          Corporate
        </CardTitle>
        <CardText>
          Firmamos parceirias e trabalhamos com
          empresas e ONGs no desenvolvimento de
          soluções de base tecnológica para a
          resolução de problemas sociais.
        </CardText>
      </CardItem>
      </Container>
  )
}

export default CardContainer;