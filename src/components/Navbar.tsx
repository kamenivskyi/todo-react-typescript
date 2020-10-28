import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar: React.FC = () => (
  <nav className='teal' style={{ padding: '0 15px' }}>
    <div className='nav-wrapper'>
      <a href='#' className='brand-logo'>
        Logo
      </a>
      <ul className='right hide-on-med-and-down'>
        <li>
          <NavLink to='/'>Список завдань</NavLink>
        </li>
        <li>
          <NavLink to='/about'>Інформація</NavLink>
        </li>
      </ul>
    </div>
  </nav>
);

export default Navbar;
