import React from 'react';
import { Link } from 'react-router-dom';
import FooterFixed from '../components/FooterFixed';
import PropTypes from 'prop-types';

const Home = props => {
  const navClick = p => {
    window.scroll(0, 0);
    props.setPage(p);
  };

  return (
    <div className='page'>
      <div className='home-main-body'>
        <h1 className='lead-lg'>Full Stack Software Development</h1>
        <div className='lead-md'>
          <h2 className='lead-md-0'>Full Stack</h2>
          <h2 className='lead-md-1'>
            Software
            <br />
            Development
          </h2>
        </div>
        <p className='main-paragraph'>
          I am a Full Stack Software Developer proficient front-to-back. I can{' '}
          <Link
            className='here-link'
            to='/projects'
            onClick={() => navClick(1)}
          >
            build
          </Link>{' '}
          you what you want. Technologies I am currently utilizing include
          <span className='fuscia'>:</span>
          <br />
          <br />
          <span className='technology-underline'>Front End</span>
          <span className='fuscia'>:</span> HTML
          <span className='fuscia'>, </span>CSS
          <span className='fuscia'>, </span>JavaScript
          <span className='fuscia'>, </span>React
          <span className='fuscia'>, </span>Redux
          <span className='fuscia'>, </span>jQuery
          <span className='fuscia'>, </span>Bootstrap
          <span className='fuscia'>, </span>Materialize
          <br />
          <br />
          <span className='technology-underline'>Back End</span>
          <span className='fuscia'>:</span> JavaScript
          <span className='fuscia'>, </span>Node
          <span className='fuscia'>, </span>Express
          <span className='fuscia'>, </span>MongoDB
          <span className='fuscia'>, </span>MySQL
          <span className='fuscia'>,</span> Git
          <span className='fuscia'>, </span>JSON
          <span className='fuscia'>, </span>REST API
          <br />
          <br />
          Whether it be a progressive wep app, a full-service business site, or
          a native mobile app, you name it and I will get it done. If you are
          looking to hire top tier software developer talent, please contact me{' '}
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
  page: PropTypes.number,
  setPage: PropTypes.func.isRequired
};

export default Home;
