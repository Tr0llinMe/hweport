import React from 'react';
import useScript from './useScript';
import './animatedbackground.css';

const AnimatedBackground = () => {
  useScript('https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js', () => {
    window.particlesJS.load('particles-js', '/particles.json', function() {
      console.log('particles.js loaded - callback');
    });
  });

  return <div id="particles-js"></div>;
};

export default AnimatedBackground;