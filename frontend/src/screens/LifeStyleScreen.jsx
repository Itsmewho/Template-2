/** @format */
import '../styles/articles.css';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import lifestyles from '../lifestyle';
import BreadCrums from '../components/BreadCrums';

function LifeStyleScreen() {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import(`locomotive-scroll`)).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <>
      <section>
        <div className="page-wrapper">
          <div className="articles-title">
            <h1 className="letter-b fs-700">Lifestyles</h1>
            <h2 className="letter-s fs-300 upper">Articles</h2>
          </div>
          <div className="breadcrumholder fs-300 letter-s upper">
            <BreadCrums></BreadCrums>
          </div>
          <div className="articles-grid">
            {lifestyles.map((lifestyles) => (
              <div className="fitness-cat">
                <div className="eyebrow">
                  <span>{lifestyles.name}</span>
                </div>
                <div className="article-image">
                  <picture>
                    <source
                      as="image"
                      srcSet={lifestyles.image}
                      alt={lifestyles.alt}
                      media="(min-width: 1250px)"
                    />
                    <img
                      as="image"
                      src={lifestyles.mobileImage}
                      alt={lifestyles.alt}
                    />
                  </picture>
                </div>
                <div className="article-text">
                  <p className="fs-400 letter-s">{lifestyles.description}</p>
                </div>
                <div className="article-btn">
                  <Link
                    to={`./${lifestyles.name}`}
                    className="l-btn link"
                    onClick={scrollToTop}>
                    <span className="l-btn-text" data-hover="fitness">
                      Read more
                    </span>
                  </Link>
                </div>
              </div>
            ))}
            <div className="breadcrumholder fs-300 letter-s upper">
              <BreadCrums></BreadCrums>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default LifeStyleScreen;
