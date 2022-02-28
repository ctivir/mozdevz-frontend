import { useState } from 'react'
import { HeaderContainer, NavIcon, NavLink, NavList } from './styles'
import logo from '../../assets/logo.png'
import { FiMenu, FiX } from 'react-icons/fi'
import Link from 'next/link'
import Image from 'next/image'

function Header() {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const closeMenu = () => {
    setOpen(false);
  }

  

  return (
    <HeaderContainer >
      <Link href="/">
        <a>
          <Image
            src={logo}
            alt='Mozdevz'
          />
        </a>
      </Link>
      <NavIcon onClick={handleClick}>
        {open ? <FiX /> : <FiMenu />}
      </NavIcon>
      <NavList active={open} >
        {/* Requires refactoring */}
        <li className='nav-item'>
          <Link href='/' passHref>
            <NavLink onClick={closeMenu}>
              <a> Inicio</a>
            </NavLink>
          </Link>
        </li>
        <li className='nav-item'>
          <Link href='/Programs' passHref>
            <NavLink onClick={closeMenu}>
              <a> Programas </a>
            </NavLink>
          </Link>
        </li>
        <li className='nav-item'>
          <Link href='/Contact' passHref>
            <NavLink onClick={closeMenu}>
              <a> Contacto </a>
            </NavLink>
          </Link>
        </li>
      </NavList>
    </HeaderContainer>
  )
}

export default Header;