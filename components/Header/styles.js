import styled from "styled-components";
import { css } from "styled-components";
import Link from "next/link"

const white = css`
var(--white);
`
const hundred = css`
-100%;
`

export const HeaderContainer = styled.nav`
  height: 80px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  font-size: 1rem;
  box-shadow: 5px 5px 5px -1px var(--light-grey);
  @media (max-width: 500px) {
    position: relative;
  }
`;

// This is just a hotfix (Link)
export const NavLink = styled.a`
  cursor: pointer;
  transition: 0.3s all;
`;

export const NavList = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, auto);
  gap: 20px;
  
  @media (max-width: 500px) {
    display: flex;
    flex-direction: column;
    position: absolute;
    padding-left: 2rem;
    padding-bottom: 2rem;
    border-bottom: 1px solid var(--light-grey);
    width: 100%;
    top: 80px;
    left: ${props => props.active ?  0 : hundred} ;
    transition: 0.5s all;
    background: ${props => props.active ? white : "transparent"};
    li {
      padding: 10px 0;
    }
  }
`
export const NavIcon = styled.div`
  display: none;
  cursor: pointer;
  @media (max-width: 500px) {
    display: flex;
  }
`
