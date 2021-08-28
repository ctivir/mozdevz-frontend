import '../styles/Header.css'
import logo from '../assets/logo.png'
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
    <nav className='navbar'>
      <Link to='/' className='nav-logo'>
        <img
          src={logo}
          alt='Mozdevz'
        />
      </Link>
      <div onClick={handleClick} className='nav-icon'>
        {open ? <FiX /> : <FiMenu />}
      </div>
      <ul className={open ? 'nav-links active' : 'nav-links'}>
        <li className='nav-item'>
          <Link to='/' className='nav-link' onClick={closeMenu}>
            Inicio
          </Link>
        </li>
        <li className='nav-item'>
          <Link to='/programas' className='nav-link' onClick={closeMenu}>
            Programas
          </Link>
        </li>
        <li className='nav-item'>
          <Link to='/contacto' className='nav-link' onClick={closeMenu}>
            Contacto
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Header;