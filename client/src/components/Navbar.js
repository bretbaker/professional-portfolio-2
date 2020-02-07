import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Navbar = props => {
  const [pg, setPg] = useState(null);

  const navClick = p => {
    props.setPage(p);
    setPg(p);
    console.log(p);
  };

  return (
    <nav>
      <div className='nav-options'>
        {pg === 0 ? (
          <Link to='/' className='nav-option-1' onClick={() => navClick(0)}>
            HOME
          </Link>
        ) : (
          <Link to='/' className='nav-option-0' onClick={() => navClick(0)}>
            HOME
          </Link>
        )}
        {pg === 1 ? (
          <Link
            to='/projects'
            className='nav-option-1'
            onClick={() => navClick(1)}
          >
            PROJECTS
          </Link>
        ) : (
          <Link
            to='/projects'
            className='nav-option-0'
            onClick={() => navClick(1)}
          >
            PROJECTS
          </Link>
        )}
        {pg === 2 ? (
          <Link
            to='/contact'
            className='nav-option-1'
            onClick={() => navClick(2)}
          >
            CONTACT
          </Link>
        ) : (
          <Link
            to='/contact'
            className='nav-option-0'
            onClick={() => navClick(2)}
          >
            CONTACT
          </Link>
        )}
      </div>
      <Link to='/'>
        <i className='code-icon fas fa-code fa-3x'></i>
        <div className='main-name-div'>
          <h1 className='main-name'>BRET BAKER</h1>
          <h2 className='main-name-2'>WEB DEVELOPMENT</h2>
        </div>
      </Link>
    </nav>
  );
};

Navbar.propTypes = {
  setPage: PropTypes.func.isRequired
};

export default Navbar;