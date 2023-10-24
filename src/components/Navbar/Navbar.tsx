import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import './navbar.scss';

const Navbar = () => (
  <nav className='navbar'>
    <div className='navbar__left'>
      <Link to='/' className='navbar__link'>
        <img alt='logo' src='https://res.cloudinary.com/dnutayeb9/image/upload/v1697529600/logo-s_ctbkpi.png' className='navbar__img' />
      </Link>
    </div>
    <div className='navbar__right'>
      <ul className='navbar__list'>
        <li className='navbar__items'>
          <HashLink to='/#about' className='navbar__itemsLink'>
            <span className='navbar__itemsLinkNumeric'>01.</span>
            About
          </HashLink>
        </li>
        <li className='navbar__items'>
          <HashLink to='/#Work' className='navbar__itemsLink'>
            <span className='navbar__itemsLinkNumeric'>02.</span>
            Work Experience
          </HashLink>
        </li>
        <li className='navbar__items'>
          <HashLink to='/#projects' className='navbar__itemsLink'>
            <span className='navbar__itemsLinkNumeric'>03.</span>
            Projects
          </HashLink>
        </li>
        <li className='navbar__items'>
          <NavLink to='/contact' className='navbar__itemsLink'>
            <span className='navbar__itemsLinkNumeric'>04.</span>
            Contact
          </NavLink>
        </li>
      </ul>
      <a href='https://github.com/sulemanbaloch2025' target='_blank' rel='noreferrer' className='navbar__button'>GitHub</a>
    </div>
  </nav>
);

export default Navbar;
