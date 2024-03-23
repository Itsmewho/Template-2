/** @format */
import '../styles/about.css';
import React from 'react';
import { useEffect } from 'react';
import products from '../testimonials.js';

const AboutScreen = () => {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import(`locomotive-scroll`)).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);

  return (
    <>
      <section>
        <div className="page-wrapper">
          <div className="about-grid">
            <div className="about-left">
              <div>
                <div className="about-title-container animate-about">
                  <h1 className="about-title ff-serif fs-900">
                    Jas<span className="accent">o</span>n
                  </h1>
                  <p className="about fs-400 upper">qerfgsdfgdfsgsdfgdfg</p>
                </div>
                <div className="aboutme-container fs-400 letter-s">
                  <div className="animate-about-1">
                    <div className="underline">
                      <h2 className="letter-m fs-600">About me</h2>
                    </div>
                    <p className="about-paragraph ff-sans">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Dolores aspernatur eveniet debitis. Laboriosam aliquid, ab
                      soluta error culpa molestias et quos fugit officia eum
                      obcaecati, rem quod animi iste nostrum.
                    </p>
                  </div>
                  <div className="timeline animate-about-2">
                    <div className="underline">
                      <h3 className="timeline-t fs-600">Timeline</h3>
                    </div>
                    <div>
                      <span className="time">2020</span>
                      <p className="time-p">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Nemo, atque culpa debitis architecto ad eveniet
                        ratione a iure accusantium maiores nihil eaque,
                        consequuntur, illum similique impedit id? Soluta, ex
                        unde.
                      </p>
                    </div>
                    <div>
                      <span className="time">2019</span>
                      <p className="time-p">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Nemo, atque culpa debitis architecto ad eveniet
                        ratione a iure accusantium maiores nihil eaque,
                        consequuntur, illum similique impedit id? Soluta, ex
                        unde.
                      </p>
                    </div>
                    <div className="underline">
                      <span className="time">2018</span>
                      <p className="time-p">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Nemo, atque culpa debitis architecto ad eveniet
                        ratione a iure accusantium maiores nihil eaque,
                        consequuntur, illum similique impedit id? Soluta, ex
                        unde.
                      </p>
                    </div>
                  </div>
                  <div className="mission animate-about-3">
                    <h4 className="fs-600 underline">My Mission</h4>
                    <p className="my-mission">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Veniam atque autem molestiae rerum optio! Aliquid
                      perferendis enim modi repellat, exercitationem eum placeat
                      consequuntur, nemo natus provident aspernatur quas dolorum
                      voluptates!
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="about-right" data-scroll data-scroll-speed="-0.2">
              <picture>
                <source
                  data-scroll
                  data-scroll-speed="-0.6"
                  as="image"
                  srcSet={products[1].image}
                  media="(min-width: 1250px)"
                  alt={products[1].description}
                />
                <img
                  as="image"
                  src={products[2].image}
                  alt={products[2].description}
                />
              </picture>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutScreen;
