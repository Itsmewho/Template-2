/** @format */

import React, {useEffect} from 'react';
import '../styles/gallerypage.css';
import danser from '../assets/danser.jpg';
import danser2 from '../assets/danser2.jpg';
import dude from '../assets/dude.jpg';
import reading from '../assets/girlreading.jpg';
import girlwater from '../assets/girlwater.jpg';
import plasic2 from '../assets/plasic2.jpg';

function GalleryScreen() {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import(`locomotive-scroll`)).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);

  return (
    <>
      <section data-scroll-section>
        <div className="page-wrapper">
          <div className="gallery-title fs-900 letter-b">
            <div
              className="letter-animation"
              data-scroll
              data-scroll-class="g-one"
              data-scroll-repeat="true">
              G
            </div>
            <div
              className="letter-animation1"
              data-scroll
              data-scroll-class="g-two"
              data-scroll-repeat="true">
              a
            </div>
            <div
              className="letter-animation2"
              data-scroll
              data-scroll-class="g-three"
              data-scroll-repeat="true">
              l
            </div>
            <div
              className="letter-animation3"
              data-scroll
              data-scroll-class="g-four"
              data-scroll-repeat="true">
              l
            </div>
            <div
              className="letter-animation4"
              data-scroll
              data-scroll-class="g-five"
              data-scroll-repeat="true">
              a
            </div>
            <div
              className="letter-animation5"
              data-scroll
              data-scroll-class="g-six"
              data-scroll-repeat="true">
              r
            </div>
            <div
              className="letter-animation6"
              data-scroll
              data-scroll-class="g-seven"
              data-scroll-repeat="true">
              y
            </div>
          </div>
          <div
            className="gallery-container"
            data-scroll
            data-scroll-speed="0.4">
            <div className="gallery-image-wrapper">
              <div className="image-holder">
                <picture className="gallery-image">
                  <source
                    as="image"
                    srcSet={danser2}
                    media="(min-width: 1250px)"
                  />
                  <img
                    as="image"
                    src={danser}
                    alt="Image for decortive"
                  />
                </picture>
              </div>
              <div className="text-holder">
                <p>
                  {' '}
                  "Success is not final, failure is not fatal: It is the courage
                  to continue that counts."
                </p>
              </div>
            </div>
            <div
              className="gallery-image-wrapper"
              data-scroll
              data-scroll-speed="0.2">
              <div className="image-holder">
                <picture className="galley-image">
                  <source
                    as="image"
                    srcSet={dude}
                    media="(min-width: 1250px)"
                  />
                  <img
                    as="image"
                    src={danser}
                    alt="Image of something"
                  />
                </picture>
              </div>
              <div className="text-holder1">
                <p>The only way to do great work is to love what you do.</p>
              </div>
            </div>
            <div
              className="gallery-image-wrapper"
              data-scroll
              data-scroll-speed="0.3">
              <div className="image-holder">
                <picture>
                  <source
                    as="image"
                    srcSet={reading}
                    media="(min-width: 1250px)"
                  />
                  <img
                    as="image"
                    src={danser2}
                    alt="Image of something"
                  />
                </picture>
              </div>
              <div className="text-holder2">
                <p>Believe you can and you're halfway there.</p>
              </div>
            </div>
            <div
              className="gallery-image-wrapper"
              data-scroll
              data-scroll-speed="0.2">
              <div className="image-holder">
                <picture className="galley-image">
                  <source
                    as="image"
                    srcSet={girlwater}
                    media="(min-width: 1250px)"
                  />
                  <img
                    as="image"
                    src={danser}
                    alt="Image for decortive"
                  />
                </picture>
              </div>
              <div className="text-holder3">
                <p>
                  {' '}
                  The future belongs to those who believe in the beauty of their
                  dreams
                </p>
              </div>
            </div>
            <div
              className="gallery-image-wrapper"
              data-scroll
              data-scroll-speed="0.3">
              <div className="image-holder">
                <picture className="galley-image">
                  <source
                    as="image"
                    srcSet={plasic2}
                    media="(min-width: 1250px)"
                  />
                  <img
                    as="image"
                    src={danser}
                    alt="Image for decortive"
                  />
                </picture>
              </div>
              <div className="text-holder4">
                <p>
                  The only limit to our realization of tomorrow will be our
                  doubts of today.
                </p>
              </div>
            </div>
            <div
              className="gallery-image-wrapper"
              data-scroll
              data-scroll-speed="0.2">
              <div className="image-holder">
                <picture>
                  <source
                    as="image"
                    srcSet={danser}
                    media="(min-width: 1250px)"
                  />
                  <img
                    as="image"
                    src={danser2}
                    alt="JImage for decortives"
                  />
                </picture>
              </div>
              <div className="text-holder5">
                <p>
                  {' '}
                  You are never too old to set another goal or to dream a new
                  dream.
                </p>
              </div>
            </div>
            <div
              className="gallery-image-wrapper"
              data-scroll
              data-scroll-speed="0.1">
              <div className="image-holder">
                <picture className="galley-image">
                  <source
                    as="image"
                    srcSet={danser2}
                    media="(min-width: 1250px)"
                  />
                  <img
                    as="image"
                    src={danser}
                    alt="Image for decortive"
                  />
                </picture>
              </div>
              <div className="text-holder6">
                <p>
                  The only person you are destined to become is the person you
                  decide to be.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default GalleryScreen;
