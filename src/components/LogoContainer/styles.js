import styled from "styled-components";

export const Container = styled.aside`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
  
  @media (min-width: 720px){
    justify-content: center;
    width: 60%;
    margin: 0 auto;
  }
  
`

export const LogoCard = styled.aside`
  flex-basis: 80px;
  
  border: 1px solid var(--primary);
  @media (min-width: 720px){
    flex-basis: 150px;
  }
  img{
    width: 200px;
  }
`