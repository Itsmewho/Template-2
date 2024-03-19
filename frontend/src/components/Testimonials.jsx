/** @format */
import { useState } from 'react';
import React from 'react';
import '../styles/testimonials.css';
import products from '../testimonials.js';

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
                  <source
                    as="image"
                    srcSet={products[1].image}
                    media="(min-width: 1250px)"
                  />
                  <img
                    as="image"
                    src={products[1].mobileImage}
                    alt="JMT-Creations standing by a waterfall in the mountains"
                  />
                </picture>
                <div className="testname">
                  <span className="testionialname letter-s ff-serif fs-500">
                    {products[1].name}
                  </span>
                </div>
                <div className="test-paragraph letter-s">
                  <p>{products[1].description}</p>
                </div>
              </div>
              <div className="testslide">
                <picture>
                  <source
                    as="image"
                    srcSet={products[2].image}
                    media="(min-width: 1250px)"
                  />
                  <img
                    as="image"
                    src={products[2].mobileImage}
                    alt="JMT-Creations standing by a waterfall in the mountains"
                  />
                </picture>
                <div className="testname">
                  <span className="testionialname letter-s ff-serif fs-500">
                    {products[2].name}
                  </span>
                </div>
                <div className="test-paragraph letter-s">
                  <p>{products[2].description}</p>
                </div>
              </div>
              <div className="testslide">
                <picture>
                  <source
                    as="image"
                    srcSet={products[4].image}
                    media="(min-width: 1250px)"
                  />
                  <img
                    as="image"
                    src={products[4].mobileImage}
                    alt="JMT-Creations standing by a waterfall in the mountains"
                  />
                </picture>
                <div className="testname">
                  <span className="testionialname letter-s ff-serif fs-500">
                    {products[4].name}
                  </span>
                </div>
                <div className="test-paragraph letter-s">
                  <p>{products[4].description}</p>
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
