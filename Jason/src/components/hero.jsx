/** @format */

import React from 'react';
import '../styles/hero.css';

function Hero() {
  return (
    <div className="dark-black">
      <section>
        <div className="hero-wrapper">
          <div className="overlay"></div>
          <div className="hero-text" data-scroll-section>
            <h1
              className="intro-text p-big ff-serif white l-1"
              data-scroll
              data-scroll-speed="0.1">
              <q>
                Start Your Fitness Journey <span className="accent">Today</span>
                !
              </q>
            </h1>
          </div>
        </div>
        <div className="hero-line">
          <div className="h-line"></div>
        </div>
      </section>
    </div>
  );
}

export default Hero;
