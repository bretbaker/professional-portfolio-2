import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <div className='main-body'>
      <h1 className='lead'>
        Full Stack <br />
        Web {'&'} Mobile Development.
      </h1>
      <p className='main-paragraph'>
        I am a Full Stack Web {'&'} Mobile Developer proficient front-to-back. I
        can
        <Link className='here-link' to='/projects'>
          build
        </Link>
        you what you want. From full-service business sites to robust
        progressive web applications, you name it and I will get it done. If you
        are looking to hire top tier web developer talent, please contact me
        <Link className='here-link' to='/contact'>
          here
        </Link>
        .
      </p>
      <div className='contact-btns'>
        <Link to='/contact' className='contact-btn' className='contact-btn-1'>
          <h2 className='contact-btn-text'>Need an app</h2>
          <i className='fas fa-angle-right'></i>
        </Link>
        <Link to='/contact' className='contact-btn' className='contact-btn-1'>
          <h2 className='contact-btn-text'>Need a website</h2>
          <i className='fas fa-angle-right'></i>
        </Link>
        <Link to='/contact' className='contact-btn' className='contact-btn-2'>
          <h2 className='contact-btn-text'>Looking to hire</h2>
          <i className='fas fa-angle-right'></i>
        </Link>
      </div>
    </div>
  );
};

export default Landing;
