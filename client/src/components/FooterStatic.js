import React from 'react';
import Moment from 'react-moment';

const FooterStatic = () => {
  return (
    <div className='footer-static'>
      &copy; Copyright{' '}
      <span className='copyright-year'>
        <Moment date={Date.now()} format='YYYY' />
      </span>
    </div>
  );
};

export default FooterStatic;
