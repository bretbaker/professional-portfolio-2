import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <div className='nav-options'>
        <div className='nav-option'>
          <Link to='/index'>HOME</Link>
        </div>
        <div className='nav-option'>
          <Link to='/projects'>PROJECTS</Link>
        </div>
        <div className='nav-option'>
          <Link to='/contact'>CONTACT</Link>
        </div>
      </div>
      <Link to='/index' className='main-name-parent-div'>
        <i className='code-icon fas fa-code fa-3x'></i>
        <div className='main-name-div'>
          <h1 className='main-name'>BRET BAKER</h1>
          <h2 className='main-name-2'>WEB {'&'} MOBILE DEVELOPMENT</h2>
        </div>
      </Link>
    </nav>
  );
};

export default Navbar;
