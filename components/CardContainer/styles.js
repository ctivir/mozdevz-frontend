import styled from "styled-components";
import Image from 'next/image'  

export const Container = styled.aside`
  @media (min-width: 720px){
    display: flex;
    grid-gap: 6rem;
    gap: 6rem;
  }
`
export const CardItem = styled.aside`
  padding: 1.5rem;
  margin-bottom: 2rem;
  background: var(--white);
  box-shadow: 5px 5px var(--primary);
`

export const CardIcon = styled(Image)`
  width: 5rem;
  margin-bottom: 1rem;
`

export const CardTitle = styled.h3`
  font-size: 1.5rem;
  text-transform: uppercase;
  margin-bottom: .5rem;
`
export const CardText= styled.p`
  font-size: .8rem;
`

