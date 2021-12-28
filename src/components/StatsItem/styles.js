import styled from "styled-components";


export const Container = styled.aside`
  display: flex;
  gap: 2rem;
  margin-bottom: 1rem;
  .statsNumber{
    font-size: 3rem;
    
    @media (min-width: 720px){
    font-size: 4.6rem;
    margin-bottom: 1rem;
  }
  }
  .bar{
    display: block;
    background-color: var(--primary);
    height: .3rem;
  }
  .statsText{
    font-size: .6rem;
  }
`