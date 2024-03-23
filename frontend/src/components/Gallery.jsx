/** @format */
import Marque from './Marque';
import MarqueTwo from './MarqueTwo';
import gsap from 'gsap';
import { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Megnet from './Megnet.jsx';
import '../styles/gallery.css';
import danser from '../assets/danser.jpg';
import danser2 from '../assets/danser2.jpg';
import dude from '../assets/dude.jpg';
import reading from '../assets/girlreading.jpg';
import girlwater from '../assets/girlwater.jpg';
import jumping from '../assets/jumping.jpg';
import plasic from '../assets/plasic.jpg';
import plasic2 from '../assets/plasic2.jpg';

function Gallery() {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  const containerRef = useRef(null);
  const plane = useRef(null);
  const plane1 = useRef(null);
  const plane2 = useRef(null);
  let requestAnimationFrameId = null;
  let xForce = 0;
  let yForce = 0;
  const easing = 0.08;
  const speed = 0.01;

  const manageMouseMove = (e) => {
    const { movementX, movementY } = e;
    xForce += movementX * speed;
    yForce += movementY * speed;

    if (requestAnimationFrameId == null) {
      requestAnimationFrameId = requestAnimationFrame(animate);
    }
  };

  const lerp = (start, target, amount) =>
    start * (1 - amount) + target * amount;

  const animate = () => {
    xForce = lerp(xForce, 0, easing);
    yForce = lerp(yForce, 0, easing);
    gsap.set(plane.current, { x: `+=${xForce}`, y: `+=${yForce}` });
    gsap.set(plane1.current, {
      x: `+=${xForce * 0.4}`,
      y: `+=${yForce * 0.4}`,
    });
    gsap.set(plane2.current, {
      x: `+=${xForce * 0.35}`,
      y: `+=${yForce * 0.35}`,
    });

    if (Math.abs(xForce) < 0.01) xForce = 0;
    if (Math.abs(yForce) < 0.01) yForce = 0;

    if (xForce != 0 || yForce != 0) {
      requestAnimationFrame(animate);
    } else {
      cancelAnimationFrame(requestAnimationFrameId);
      requestAnimationFrameId = null;
    }
  };

  useEffect(() => {
    const container = containerRef.current;

    const handleMouseLeave = () => {
      xForce = 0;
      yForce = 0;

      gsap.set(plane.current, { x: 0, y: 0 });
      gsap.set(plane1.current, { x: 0, y: 0 });
      gsap.set(plane2.current, { x: 0, y: 0 });

      if (requestAnimationFrameId !== null) {
        cancelAnimationFrame(requestAnimationFrameId);
        requestAnimationFrameId = null;
      }
    };

    container.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      container.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <>
      <div className="page-wrapper">
        <section>
          <div
            className="gallery-wrapper"
            onMouseMove={(e) => {
              manageMouseMove(e);
            }}>
            <Marque></Marque>
            <div className="image-container" ref={containerRef}>
              <div className="plane" ref={plane}>
                <picture>
                  <source
                    as="image"
                    srcSet={jumping}
                    media="(min-width: 1250px)"
                  />
                  <img
                    as="image"
                    src={danser2}
                    alt="JMT-Creations standing by a waterfall in the mountains"
                  />
                </picture>
                <picture className="hero-image">
                  <source
                    as="image"
                    srcSet={danser2}
                    media="(min-width: 1250px)"
                  />
                  <img
                    as="image"
                    src={danser}
                    alt="JMT-Creations standing by a waterfall in the mountains"
                  />
                </picture>
                <picture className="hero-image">
                  <source
                    as="image"
                    srcSet={dude}
                    media="(min-width: 1250px)"
                  />
                  <img
                    as="image"
                    src={danser}
                    alt="JMT-Creations standing by a waterfall in the mountains"
                  />
                </picture>
              </div>
              <div className="plane1" ref={plane1}>
                <picture>
                  <source
                    as="image"
                    srcSet={reading}
                    media="(min-width: 1250px)"
                  />
                  <img
                    as="image"
                    src={danser2}
                    alt="JMT-Creations standing by a waterfall in the mountains"
                  />
                </picture>
                <picture className="hero-image">
                  <source
                    as="image"
                    srcSet={girlwater}
                    media="(min-width: 1250px)"
                  />
                  <img
                    as="image"
                    src={danser}
                    alt="JMT-Creations standing by a waterfall in the mountains"
                  />
                </picture>
                <picture className="hero-image">
                  <source
                    as="image"
                    srcSet={plasic2}
                    media="(min-width: 1250px)"
                  />
                  <img
                    as="image"
                    src={danser}
                    alt="JMT-Creations standing by a waterfall in the mountains"
                  />
                </picture>
              </div>
              <div className="plane2" ref={plane2}>
                <picture>
                  <source
                    as="image"
                    srcSet={danser}
                    media="(min-width: 1250px)"
                  />
                  <img
                    as="image"
                    src={danser2}
                    alt="JMT-Creations standing by a waterfall in the mountains"
                  />
                </picture>
                <picture className="hero-image">
                  <source
                    as="image"
                    srcSet={danser2}
                    media="(min-width: 1250px)"
                  />
                  <img
                    as="image"
                    src={danser}
                    alt="JMT-Creations standing by a waterfall in the mountains"
                  />
                </picture>
                <picture className="hero-image">
                  <source
                    as="image"
                    srcSet={plasic}
                    media="(min-width: 1250px)"
                  />
                  <img
                    as="image"
                    src={danser}
                    alt="JMT-Creations standing by a waterfall in the mountains"
                  />
                </picture>
              </div>
              <div className="grid-fixed">
                <div
                  className="gallery-intro-grid"
                  id="stick"
                  data-scroll-section>
                  <div className="filler"></div>
                  <div
                    className="gallery-intro-text"
                    data-scroll
                    data-scroll-offset="100px"
                    data-scroll-class="animate2"
                    data-scroll-repeat="true">
                    <div
                      className="gallery-text-container"
                      data-scroll-sticky
                      data-scroll-target="#stick"
                      data-scroll
                      data-scroll-offset="0,100%">
                      <h1 className="ff-serif fs-600 letter-m">
                        Do what excites!
                      </h1>
                      <Megnet>
                        <div className="gallery-btn">
                          <div className="btn-container">
                            <div className="outer-btn">
                              <Link
                                to={'/Shop'}
                                className="btn-link"
                                onClick={scrollToTop}>
                                <span className="btn-text">Shop</span>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </Megnet>
                    </div>
                  </div>
                  <div className="filler"></div>
                </div>
              </div>
            </div>
            <MarqueTwo></MarqueTwo>
          </div>
        </section>
      </div>
    </>
  );
}

export default Gallery;
