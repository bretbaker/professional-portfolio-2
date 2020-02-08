import React from 'react';
import FooterStatic from '../components/FooterStatic';
import laptopBlank from '../img/laptop-blank.svg';

const Projects = () => {
  return (
    <div className='page'>
      <div className='project-row'>
        <div className='project-box'>
          <h3 className='project-title'>Social Network</h3>
          <img src={laptopBlank} alt='' className='laptop-img' />
        </div>
        <div className='project-box'>
          <h3 className='project-title'>Backend API</h3>
          <img src={laptopBlank} alt='' className='laptop-img' />
        </div>
      </div>
      <div className='project-row'>
        <div className='project-box'>
          <h3 className='project-title'>Contact Manager</h3>
          <img src={laptopBlank} alt='' className='laptop-img' />
        </div>
        <div className='project-box'>
          <h3 className='project-title'>GitHub Finder</h3>
          <img src={laptopBlank} alt='' className='laptop-img' />
        </div>
      </div>
      <div className='project-row'>
        <div className='project-box'>
          <h3 className='project-title'>IT System Log</h3>
          <img src={laptopBlank} alt='' className='laptop-img' />
        </div>
        <div className='project-box'>
          <h3 className='project-title'>JS Algo</h3>
          <img src={laptopBlank} alt='' className='laptop-img' />
        </div>
      </div>
      <FooterStatic />
    </div>
  );
};

export default Projects;
