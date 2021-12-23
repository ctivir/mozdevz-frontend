import {Container, NavIcon, NavLink, NavList} from './styles'
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'

function Header() {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const closeMenu = () => {
    setOpen(false);
  }

  

  return (
    <Container className='navbar'>
      <Link to='/' className='nav-logo'>
        <img
          src={logo}
          alt='Mozdevz'
        />
      </Link>
      <NavIcon onClick={handleClick}>
        {open ? <FiX /> : <FiMenu />}
      </NavIcon>
      <NavList active={open} >
        <li className='nav-item'>
          <NavLink to='/' onClick={closeMenu}>
            Inicio
          </NavLink>
        </li>
        <li className='nav-item'>
          <NavLink to='/programas' onClick={closeMenu}>
            Programas
          </NavLink>
        </li>
        <li className='nav-item'>
          <NavLink to='/contacto' className='nav-link' onClick={closeMenu}>
            Contacto
          </NavLink>
        </li>
      </NavList>
    </Container>
  )
}

export default Header;