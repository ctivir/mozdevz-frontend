import styled from "styled-components";

export const Container = styled.footer`
  background-color: var(--dark);
  padding: 2rem;
  color: var(--white);
`

export const FooterLogo = styled.aside`
  background-color: var(--white);
  width: 200px;
  padding: 1rem;
  text-align: center;
  margin: 0 auto 1rem;
`

export const FooterNav = styled.aside`
  display: flex;
  gap: .5rem;
  justify-content: center;
  font-size: .8rem;
  a {
    padding: 5px;
    color: var(--white);
  }
`



export const FooterDetails = styled.aside`
  display: flex;
  flex-direction: column;
`
export const FooterCopy = styled.p`
  text-align: center;
  font-size: .8rem;
  font-weight: var(--bold);
  margin-bottom: 1rem;
  color: var(--white);
  margin-top: 2rem;
`

export const FooterSocials = styled.div`
  text-align: center;
  margin-top: 2rem;
  i{
    
    padding: 1rem;
    img{
      width: 2.3rem;
      height: 2.3rem;
      background: var(--mid-gray);
      padding: .3rem;
      border: 2px solid var(--white);
    }
  }
`
