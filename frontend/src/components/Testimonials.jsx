/** @format */
import React from 'react';
import '../styles/testimonials.css';
import danser from '/images/danser.jpg';
import girl from '/images/girlwater.jpg';
import dude from '/images/dude.jpg';

function Testimonials() {
  return (
    <>
      <div className="page-wrapper">
        <section data-scroll-section>
          <div className="test-wrapper">
            <div
              className="slider-container fs-400"
              data-scroll
              data-scroll-class="animate2"
              data-scroll-repeat="true">
              <div className="testslide">
                <picture>
                  <source srcSet={dude} media="(min-width: 1250px)" />
                  <img src={danser} alt="Image for decortive" />
                </picture>
                <div className="testname">
                  <span className="testionialname letter-s ff-serif fs-500">
                    Lennard
                  </span>
                </div>
                <div className="test-paragraph letter-s">
                  <p>
                    I was skeptical about online fitness programs, but this
                    website has exceeded all my expectations.
                  </p>
                </div>
              </div>
              <div className="testslide">
                <picture>
                  <source srcSet={girl} media="(min-width: 1250px)" />
                  <img src={dude} alt="Image for decortive" />
                </picture>
                <div className="testname">
                  <span className="testionialname letter-s ff-serif fs-500">
                    Jestle
                  </span>
                </div>
                <div className="test-paragraph letter-s">
                  <p>
                    Being a mom of three, finding time for myself was always a
                    challenge. This website has been a game-changer for me. The
                    quick, effective workouts can be done from home
                  </p>
                </div>
              </div>
              <div className="testslide">
                <picture>
                  <source srcSet={danser} media="(min-width: 1250px)" />
                  <img src={dude} alt="Image for decortive" />
                </picture>
                <div className="testname">
                  <span className="testionialname letter-s ff-serif fs-500">
                    Emma
                  </span>
                </div>
                <div className="test-paragraph letter-s">
                  <p>
                    I have seen significant improvements in my strength and
                    endurance in just a few weeks. Highly recommend it!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Testimonials;
