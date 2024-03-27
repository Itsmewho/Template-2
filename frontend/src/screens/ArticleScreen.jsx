/** @format */

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/articles.css';
import girls from '../assets/recover.jpg';
import mobile from '../assets/mobile-Recovered.jpg';
import Testimonials from '../components/Testimonials';
import BreadCrums from '../components/BreadCrums';

function ArticleScreen() {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import('locomotive-scroll')).default;
      new LocomotiveScroll();
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
            <h1 className="letter-b fs-700">Atricles</h1>
            <h2 className="letter-s fs-300 upper">Catagories</h2>
          </div>
          <div className="breadcrumholder fs-300 letter-s upper">
            <BreadCrums></BreadCrums>
          </div>
          <div className="articles-grid">
            <div className="fitness-cat">
              <div className="eyebrow">
                <span>Fitness</span>
              </div>
              <div className="article-image">
                <picture>
                  <source
                    as="image"
                    srcSet={girls}
                    media="(min-width: 1250px)"
                  />
                  <img as="image" src={mobile} alt="Image for decortive" />
                </picture>
              </div>
              <div className="article-text">
                <p className="fs-400 letter-s">
                  Are you ready to begin a journey towards a healthier,
                  stronger, and more vibrant you? I am passionate about helping
                  you reach your full potential through the power of fitness.
                  Whether you're a seasoned athlete or just starting out, my aim
                  is to equip you with the knowledge, motivation, and support
                  you need to achieve your goals and live your best life.
                </p>
              </div>
              <div className="article-btn">
                <Link
                  to={'./Fitness'}
                  className="l-btn link"
                  onClick={scrollToTop}>
                  <span className="l-btn-text" data-hover="fitness">
                    Read more
                  </span>
                </Link>
              </div>
            </div>
            <div className="lifestyle-cat">
              <div className="eyebrow">
                <span>LifeStyle</span>
              </div>
              <div className="article-image">
                <picture>
                  <source
                    as="image"
                    srcSet={girls}
                    media="(min-width: 1250px)"
                  />
                  <img as="image" src={mobile} alt="Image for decortive" />
                </picture>
              </div>
              <div className="article-text">
                <p className="fs-400 letter-s">
                  Your go-to destination for all things lifestyle! I'm dedicated
                  to inspiring and empowering you to live your best life.
                  Whether you're seeking tips on wellness, fashion advice,
                  travel inspiration, delicious recipes, or home decor ideas,
                  we've got you covered.
                </p>
              </div>
              <div className="article-btn">
                <Link
                  to={'./Lifestyle'}
                  className="l-btn link"
                  onClick={scrollToTop}>
                  <span className="l-btn-text" data-hover="LifeStyle">
                    Read more
                  </span>
                </Link>
              </div>
            </div>
            <div className="nutrition-cat">
              <div className="eyebrow">
                <span>Nutrition</span>
              </div>
              <div className="article-image">
                <picture>
                  <source
                    as="image"
                    srcSet={girls}
                    media="(min-width: 1250px)"
                  />
                  <img as="image" src={mobile} alt="Image for decortive" />
                </picture>
              </div>
              <div className="article-text">
                <p className="fs-400 letter-s">
                  My goal is to inspire and motivate you with valuable knowledge
                  and insights that can help you make informed decisions about
                  your food choices. I'll support your journey towards optimal
                  health and wellness by providing you with delicious and
                  nutritious recipes, as well as evidence-based information on
                  the latest diet trends.
                </p>
              </div>
              <div className="article-btn">
                <Link
                  to={'./Nutrition'}
                  className="l-btn link"
                  onClick={scrollToTop}>
                  <span className="l-btn-text" data-hover="Nutrition">
                    Read more
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="article-line">
          <div className="articles-line"></div>
        </div>
        <Testimonials></Testimonials>
        <div className="article-line">
          <div className="articles-line"></div>
        </div>
      </section>
    </>
  );
}

export default ArticleScreen;
