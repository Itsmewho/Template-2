/** @format */
import '../styles/articles.css';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import nutritions from '../nutrition';
import BreadCrums from '../components/BreadCrums';

function NutritionScreen() {
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
            <h1 className="letter-b fs-700">Nutrition</h1>
            <h2 className="letter-s fs-300 upper">Articles</h2>
          </div>
          <div className="breadcrumholder fs-300 letter-s upper">
            <BreadCrums></BreadCrums>
          </div>
          <div className="articles-grid">
            {nutritions.map((nutritions) => (
              <div className="fitness-cat">
                <div className="eyebrow">
                  <span>{nutritions.name}</span>
                </div>
                <div className="article-image">
                  <picture>
                    <source
                      as="image"
                      srcSet={nutritions.image}
                      alt={nutritions.alt}
                      media="(min-width: 1250px)"
                    />
                    <img
                      as="image"
                      src={nutritions.mobileImage}
                      alt={nutritions.alt}
                    />
                  </picture>
                </div>
                <div className="article-text">
                  <p className="fs-400 letter-s">{nutritions.description}</p>
                </div>
                <div className="article-btn">
                  <Link
                    to={`./${nutritions.name}`}
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

export default NutritionScreen;
