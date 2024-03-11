/** @format */

import React from 'react';
import Marque from './Marque';
import Megnet from './Megnet';
import MegnetTwo from './MegnetTwo';
import '../styles/gallery.css';

function Gallery() {
  return (
    <>
      <div className="page-wrapper">
        <section>
          <div className="gallery-wrapper" data-scroll-offset="-9500">
            <Marque></Marque>
            <div className="gallery-intro-grid" id="stick" data-scroll-section>
              <div className="gallery-intro-text">
                <div
                  className="gallery-text-container"
                  data-scroll-sticky
                  data-scroll-target="#stick">
                  <h1 className="ff-serif fs-600 letter-m">
                    Do what excites! Transform your life.
                  </h1>
                  <div className="gallery-btn">
                    <Megnet>
                      <div className="btn-container">
                        <div className="outer-btn">
                          <MegnetTwo>
                            <a className="btn-link">
                              <MegnetTwo>
                                <span className="btn-text">Shop</span>
                              </MegnetTwo>
                            </a>
                          </MegnetTwo>
                        </div>
                      </div>
                    </Megnet>
                  </div>
                </div>
              </div>
              <div className="gallery-intro-images"></div>
            </div>
            <Marque></Marque>
          </div>
        </section>
      </div>
    </>
  );
}

export default Gallery;
