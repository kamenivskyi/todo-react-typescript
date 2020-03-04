import React from 'react';

const Navbar: React.FunctionComponent = () => (
  <nav className='cyan' style={{ padding: '0 15px' }}>
    <div className='nav-wrapper'>
      <a href='#' className='brand-logo'>
        Logo
      </a>
      <ul className='right hide-on-med-and-down'>
        <li>
          <a href='collapsible.html'>Список завдань</a>
        </li>
        <li>
          <a href='badges.html'>Інформація</a>
        </li>
      </ul>
    </div>
  </nav>
);

export default Navbar;
