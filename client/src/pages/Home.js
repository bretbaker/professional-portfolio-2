import React from 'react';
import { Link } from 'react-router-dom';
import FooterFixed from '../components/FooterFixed';
import PropTypes from 'prop-types';

const Home = props => {
  const navClick = p => {
    props.setPage(p);
  };

  return (
    <div className='page'>
      <div className='home-main-body'>
        <h1 className='lead'>Full Stack Web Development.</h1>
        <p className='main-paragraph'>
          I am a Full Stack Web Developer proficient front-to-back. I can{' '}
          <Link
            className='here-link'
            to='/projects'
            onClick={() => navClick(1)}
          >
            build
          </Link>{' '}
          you what you want. Whether it be a native mobile application, a
          full-service business site, or a robust progressive web program, you
          name it and I will get it done. If you are looking to hire top tier
          web developer talent, please contact me{' '}
          <Link className='here-link' to='/contact' onClick={() => navClick(2)}>
            here
          </Link>
          .
        </p>
        <div className='contact-btns'>
          <Link
            to='/contact'
            className='contact-btn contact-btn-1'
            onClick={() => navClick(2)}
          >
            <h2 className='contact-btn-text'>I need an app/site</h2>
            <i className='fas fa-angle-right'></i>
          </Link>
          <Link
            to='/contact'
            className='contact-btn contact-btn-2'
            onClick={() => navClick(2)}
          >
            <h2 className='contact-btn-text'>I am looking to hire</h2>
            <i className='fas fa-angle-right'></i>
          </Link>
        </div>
      </div>
      <FooterFixed />
    </div>
  );
};

Home.propTypes = {
  page: PropTypes.number.isRequired,
  setPage: PropTypes.func.isRequired
};

export default Home;
