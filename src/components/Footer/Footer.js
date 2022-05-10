import React from 'react';
import logo from '../../images/logo.png';
import linkedin from '../../images/linkedin.png'
import telegram from '../../images/telegram.png'

function Footer() {
  return (
    <div className='footer'>
      <img className='header__logo' src={logo} alt='logo' />
      <nav className='footer__menu header__menu'>
        <ul className='list'>
          <li className='list__li'>
            <a href='https://www.linkedin.com/in/sergey-borodulin/' className='list__li-link'>
              <img className='list__li-img' src={linkedin} alt='linkedIn' />
            </a>
          </li>
          <li className='list__li'>
            <a href='https://t.me/borodulin_sergey' className='list__li-link'>
              <img className='list__li-img' src={telegram} alt='telegram' />
            </a>

          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Footer