import React from 'react';

function Contact() {
  return (
    <div className='page'>
      <div>
        <div className='top-two-contacts'>
          <div className='github-contact-container'>
            <div className='contact-info'>
              <i className='github-icon fab fa-github fa-2x'></i>
              <a
                className='github-link'
                href='http://www.github.com'
                target='_blank'
                rel='noopener noreferrer'
              >
                GitHub
              </a>
            </div>
          </div>
          <div className='linkedin-contact-container'>
            <div className='contact-info'>
              <i className='linkedin-icon fab fa-linkedin fa-2x'></i>
              <a
                className='linkedin-link'
                href='http://www.linkedin.com'
                target='_blank'
                rel='noopener noreferrer'
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
        <div className='email-contact-container'>
          <div className='contact-info'>
            <i className='email-icon fas fa-envelope fa-2x'></i>
            <a className='email-address' href='mailto:bretbaker808@gmail.com'>
              Email
            </a>
          </div>
        </div>
        <div className='phone-contact-container'>
          <div>
            <i className='phone-icon fas fa-phone fa-2x'></i>
            <a className='phone-number' href='tel:813-892-0410'>
              Phone
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
