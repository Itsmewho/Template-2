/** @format */
import '../styles/articles.css';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import fitnessBlog from '../fitness';
import BreadCrums from '../components/BreadCrums';

function FitnessScreen() {
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
            <h1 className="letter-b fs-700">Fitness</h1>
            <h2 className="letter-s fs-300 upper">Articles</h2>
          </div>
          <div className="breadcrumholder fs-300 letter-s upper">
            <BreadCrums></BreadCrums>
          </div>
          <div className="articles-grid">
            {fitnessBlog.map((fitnessBlog) => (
              <div className="fitness-cat">
                <div className="eyebrow">
                  <span>{fitnessBlog.name}</span>
                </div>
                <div className="article-image">
                  <picture>
                    <source
                      as="image"
                      srcSet={fitnessBlog.image}
                      alt={fitnessBlog.alt}
                      media="(min-width: 1250px)"
                    />
                    <img
                      as="image"
                      src={fitnessBlog.mobileImage}
                      alt={fitnessBlog.alt}
                    />
                  </picture>
                </div>
                <div className="article-text">
                  <p className="fs-400 letter-s">{fitnessBlog.description}</p>
                </div>
                <div className="article-btn">
                  <Link
                    to={`./${fitnessBlog.name}`}
                    className="l-btn link crumb"
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

export default FitnessScreen;
