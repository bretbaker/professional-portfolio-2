import React from 'react';
import Moment from 'react-moment';

const FooterFixed = () => {
  return (
    <div className='footer-fixed'>
      &copy; Copyright{' '}
      <span className='copyright-year'>
        <Moment date={Date.now()} format='YYYY' />
      </span>
    </div>
  );
};

export default FooterFixed;
