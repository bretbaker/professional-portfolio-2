import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Navbar = props => {
  const navClick = p => {
    props.setPage(p);
  };

  return (
    <nav>
      <div className='nav-options-lg'>
        {props.page === 0 ? (
          <Link to='/' className='nav-option-1' onClick={() => navClick(0)}>
            HOME
          </Link>
        ) : (
          <Link to='/' className='nav-option-0' onClick={() => navClick(0)}>
            HOME
          </Link>
        )}
        {props.page === 1 ? (
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
        {props.page === 2 ? (
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
      <Link className='brand' to='/' onClick={() => navClick(0)}>
        <i className='code-icon fas fa-code fa-3x'></i>
        <div className='main-name-div'>
          <h1 className='main-name'>BRET BAKER</h1>
          <h2 className='main-name-2'>SOFTWARE DEVELOPMENT</h2>
        </div>
      </Link>
      <div className='nav-options-sm'>
        {props.page === 0 ? (
          <Link to='/' className='nav-option-1-sm' onClick={() => navClick(0)}>
            <i className='fas fa-home fa-2x'></i>
          </Link>
        ) : (
          <Link to='/' className='nav-option-0-sm' onClick={() => navClick(0)}>
            <i className='fas fa-home fa-2x'></i>
          </Link>
        )}
        {props.page === 1 ? (
          <Link
            to='/projects'
            className='nav-option-1-sm'
            onClick={() => navClick(1)}
          >
            <i className='fas fa-folder-open fa-2x'></i>
          </Link>
        ) : (
          <Link
            to='/projects'
            className='nav-option-0-sm'
            onClick={() => navClick(1)}
          >
            <i className='fas fa-folder-open fa-2x'></i>
          </Link>
        )}
        {props.page === 2 ? (
          <Link
            to='/contact'
            className='nav-option-1-sm'
            onClick={() => navClick(2)}
          >
            <i className='fas fa-address-book fa-2x'></i>
          </Link>
        ) : (
          <Link
            to='/contact'
            className='nav-option-0-sm'
            onClick={() => navClick(2)}
          >
            <i className='fas fa-address-book fa-2x'></i>
          </Link>
        )}
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  page: PropTypes.number,
  setPage: PropTypes.func.isRequired
};

export default Navbar;
