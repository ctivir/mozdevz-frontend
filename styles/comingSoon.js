import styled from 'styled-components';

export const ComingSoon = styled.div`

  @media (min-width: 600px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: 100px auto;
    height: 100vh;
  }
`

export const Header = styled.header`
  padding: 1.5rem;
  
  @media (min-width: 600px) {
    padding: 4rem;
  }
`

export const Main = styled.main`
  padding: 1.5rem;
  
  h1 {
    font-weight: 900;
    color: #F93636;
    line-height: 1;
    margin-bottom: 1rem;

    span {
      font-size: 2.4rem;
    }
  }

  h2 {
    font-size: 1.4rem;
    font-weight: 400;
    width: 25ch;
    margin-bottom: .1rem;
  }

  p {
    color: #F93636;
    margin-bottom: 3rem;
  }

  @media (min-width: 600px) {
    padding: 4rem;
    padding-top: 6rem;

    h1 {
      font-size: 3rem;
      margin-bottom: 3rem;

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
    .img-desktop {
      display: none;
    }

    .img-mobile {}
    @media (min-width: 600px) {
      grid-colunn: 2/3;
      height: 100vh;
      position: relative;
      
      .img-mobile {
        display: none;
      }

      .img-desktop {
        display: block;
      }
    }
`

export const SocialIconWrapper = styled.div`
  display: flex;
  gap: 1.5rem;
  align-items: center;

  .icon-wrapper {
    display: flex;
    align-items: center;
    width: 1.6rem;
  }

  @media (min-width: 600px) {
    
  }
`