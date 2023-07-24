import './heroimage3style.css';
import React, { useEffect, useRef } from 'react';

const HeroImage3 = (props) => {
  const parallaxRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        const scrollValue = window.scrollY;
        parallaxRef.current.style.backgroundPositionY = `${-scrollValue * 0.5}px`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='hero-img2'>
      <div className='heading-hide2'>
        <div className='heading2'>
          <h1>{props.heading}</h1>
          <p>{props.text}</p>
        </div>
      </div>
      <div ref={parallaxRef} className='parallax-background2'></div>
    </div>
  );
};

export default HeroImage3;
