import React from 'react';
import resume from '../pdf/portfolio-resume.pdf';
import FooterStatic from '../components/FooterStatic';

const Resume = () => {
  return (
    <div className='page'>
      <div className='resume-download-container'>
        <a
          className='resume-download'
          href={resume}
          download='bret-baker-resume.pdf'
        >
          Download PDF
        </a>
      </div>
      <iframe
        title='jsx-a11y/iframe-has-title'
        src={resume}
        frameBorder='0'
        width='100%'
      ></iframe>
      <FooterStatic />
    </div>
  );
};

export default Resume;
