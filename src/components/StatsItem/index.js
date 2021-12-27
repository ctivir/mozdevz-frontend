import { Container } from "./styles";


export function StatsItem(props) {
  return (
    <Container>
      <h2 className="statsNumber">
        {props.title}
        <span className="bar"></span>
      </h2> 
      <p className="statsText">
        {props.text}
      </p>
    </Container>
  )
}

export default StatsItem;