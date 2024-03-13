/** @format */
import Marque from './Marque';
import MarqueTwo from './MarqueTwo';
import Megnet from './Megnet';
import MegnetTwo from './MegnetTwo';

import '../styles/gallery.css';

function Gallery() {
  return (
    <>
      <div className="page-wrapper">
        <section>
          <div className="gallery-wrapper">
            <Marque></Marque>
            <div className="gallery-intro-grid" id="stick" data-scroll-section>
              <div className="gallery-intro-images">
                <div className="plane">
                  <img src="./" alt="" />
                </div>
                <div className="plane1"></div>
                <div className="plane2"></div>
              </div>
              <div
                className="gallery-intro-text"
                data-scroll
                data-scroll-offset="100px"
                data-scroll-class="animate"
                data-scroll-repeat="true">
                <div
                  className="gallery-text-container"
                  data-scroll-sticky
                  data-scroll-target="#stick"
                  data-scroll
                  data-scroll-offset="0,100%"
                  data-scroll-event-progress="progressEvent">
                  <h1 className="ff-serif fs-600 letter-m">Do what excites!</h1>
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
            <MarqueTwo></MarqueTwo>
          </div>
        </section>
      </div>
    </>
  );
}

export default Gallery;
