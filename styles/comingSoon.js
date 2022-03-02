import styled from 'styled-components';

export const ComingSoon = styled.div`
  display: grid;
  grid-auto-rows: auto;
  height: 100vh;

  @media (min-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }
`

export const Header = styled.header`
  padding: 1.5rem;
  display: flex;
  align-items: center;

  @media (min-width: 600px) {
    padding: 4rem;
  }
`

export const Main = styled.main`
  padding-left: 1.5rem;
  padding-top: 2rem;

  h1 {
    font-weight: 900;
    margin-bottom: 1rem;
    color: #F93636;
  }

  h2 {
    font-weight: 400;
    margin-bottom: .5rem;
    width: 25ch;
  }

  p {
    color: #F93636;
  }

  @media (min-width: 600px) {
    padding: 4rem;
    display: flex;
    flex-direction: column;

    h1 {
      font-size: 3rem;
      line-height: 1.1;

      span {
        font-size: 4rem;
      }
    }

    h2 {
      font-size: 1.8rem;
      letter-spacing: 2px;
      font-weight: 400;
      margin-bottom: .5rem;
      width: 25ch;
    }
  }
`

export const SideCover = styled.div`
  grid-row: 2/3;
  position: relative;
  height: 300px;
  
  @media (min-width: 600px) {
    height: 100vh;
    grid-row: 1/6;
    grid-column: 2/3;
  }
`

export const SocialIconWrapper = styled.div`
  
  @media (min-width: 600px) {
    padding-left: 4rem;
  }
`