/** @format */

import React from 'react';
import '../styles/hero.css';

function Hero() {
  return (
    <div className="page-wrapper">
      <div className="hero-wrapper">
        <div className="overlay"></div>
        <div className="hero-text">
          <p className="intro-text p-big ff-serif white l-1">
            <q>
              <span className="accent"> Start</span> Your Fitness Journey{' '}
              <span className="accent">Today</span>!
            </q>
          </p>
        </div>
      </div>
      <div className="hero-line">
        <div className="h-line"></div>
      </div>
    </div>
  );
}

export default Hero;
