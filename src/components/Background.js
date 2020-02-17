import React from 'react';
import backgroundImg from '../img/background-img-0.jpg';

const Background = () => {
  return (
    <div>
      <img className='background-img' src={backgroundImg} alt=''></img>
      <div className='background-overlay'></div>
    </div>
  );
};

export default Background;
