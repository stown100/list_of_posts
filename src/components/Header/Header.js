import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';

function Header() {
  return (
    <div className='header'>
      <img className='header__logo' src={logo} alt='logo' />
      <nav className='header__menu'>
        <ul className='list'>
          <li className='list__li'>
            <Link to='/' className='list__li-link'>Пользователи</Link>
          </li>
          <li className='list__li'>
            <Link to='/posts' className='list__li-link'>Посты</Link>

          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Header