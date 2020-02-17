import React from 'react';
import FooterStatic from '../components/FooterStatic';
// import laptopBlank from '../img/laptop-blank.svg';
import proj0 from '../img/proj-0-mobile.svg';
import proj1 from '../img/proj-1-desktop.svg';
import proj2 from '../img/proj-2-mobile.svg';
import proj3 from '../img/proj-3-desktop.svg';

const Projects = () => {
  return (
    <div className='page'>
      <div className='project-row'>
        <a
          href='https://github.com/bretbaker/social-network'
          target='_blank'
          className='project-box'
          rel='noopener noreferrer'
        >
          <h3 className='project-title'>Social Network</h3>
          <img src={proj0} alt='' className='laptop-img' />
        </a>
        <a
          href='https://github.com/bretbaker/contact-manager'
          target='_blank'
          className='project-box'
          rel='noopener noreferrer'
        >
          <h3 className='project-title'>Contact Manager</h3>
          <img src={proj2} alt='' className='laptop-img' />
        </a>
      </div>
      <div className='project-row'>
        <a
          href='https://github.com/bretbaker/bootcamp-api'
          target='_blank'
          className='project-box'
          rel='noopener noreferrer'
        >
          <h3 className='project-title'>Bootcamp API</h3>
          <img src={proj1} alt='' className='laptop-img' />
        </a>
        <a
          href='https://github.com/bretbaker/github-finder'
          target='_blank'
          className='project-box'
          rel='noopener noreferrer'
        >
          <h3 className='project-title'>GitHub Finder</h3>
          <img src={proj3} alt='' className='laptop-img' />
        </a>
      </div>
      <FooterStatic />
    </div>
  );
};

export default Projects;
