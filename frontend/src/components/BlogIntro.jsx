/** @format */

import React from 'react';
import '../styles/blog.css';
import { Link } from 'react-router-dom';
import reading from '../assets/girlreading.jpg';
import girlwater from '../assets/girlwater.jpg';
import jumping from '../assets/jumping.jpg';

function BlogIntro() {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <>
      <div className="page-wrapper">
        <section>
          <div className="blog-intro-wrapper" data-scroll-section>
            <div className="intro-row1">
              <div
                className="blog-grid"
                data-scroll
                data-scroll-class="animate2"
                data-scroll-repeat="true">
                <div className="blog-intro-text">
                  <h1 className="ff-serif fs-500 letter-b underline-r l-1">
                    Fitness
                  </h1>
                </div>
                <div className="blog-filler"></div>
                <div className="blog-intro-img">
                  <picture>
                    <source
                      as="image"
                      srcSet={jumping}
                      media="(min-width: 1250px)"
                    />
                    <img as="image" src={girlwater} alt="Image for decortive" />
                  </picture>
                </div>
                <div className="blog-intro-text-wrapper">
                  <div className="blog-intro-paragraph ff-sans letter-s l-1 fs-400">
                    "Consistency is key! Make
                    <span className="accent"> exercise </span>a regular part of
                    your routine to reap the full benefits. Choose activities
                    you <span className="accent">enjoy</span> to stay
                    <span className="accent"> motivated</span> and engaged.
                    Whether it's a brisk walk or a HIIT workout
                  </div>
                  <div className="grid-btn-wrapper">
                    <Link
                      to={'Articles/Fitness'}
                      className="l-btn link"
                      onClick={scrollToTop}>
                      <span className="l-btn-text" data-hover="more">
                        Read
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="intro-row2">
              <div
                className="blog-grid"
                data-scroll
                data-scroll-class="animate2"
                data-scroll-repeat="true">
                <div className="blog-intro-text">
                  <h1 className="ff-serif fs-500 letter-b underline-r l-1">
                    Lifestyle
                  </h1>
                </div>
                <div className="blog-filler"></div>
                <div className="blog-intro-img">
                  <picture>
                    <source
                      as="image"
                      srcSet={reading}
                      media="(min-width: 1250px)"
                    />
                    <img as="image" src={girlwater} alt="Image for decortive" />
                  </picture>
                </div>
                <div className="blog-intro-text-wrapper">
                  <div className="blog-intro-paragraph ff-sans letter-s l-1 fs-400">
                    Take <span className="accent">charge</span> of your
                    <span className="accent"> well-being</span> with us! Explore
                    expert tips on health and living. break boundaries, and
                    create a life of health and happiness.
                  </div>
                  <div className="grid-btn-wrapper">
                    <Link
                      to={'Articles/Lifestyle'}
                      className="l-btn link"
                      onClick={scrollToTop}>
                      <span className="l-btn-text" data-hover="more">
                        Read
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="intro-row3">
              <div
                className="blog-grid"
                data-scroll
                data-scroll-class="animate2"
                data-scroll-repeat="true">
                <div className="blog-intro-text">
                  <h1 className="ff-serif fs-500 letter-b underline-r l-1">
                    Nutrition
                  </h1>
                </div>
                <div className="blog-filler"></div>
                <div className="blog-intro-img">
                  <picture>
                    <source
                      as="image"
                      srcSet={girlwater}
                      media="(min-width: 1250px)"
                    />
                    <img as="image" src={girlwater} alt="Image for decortive" />
                  </picture>
                </div>
                <div className="blog-intro-text-wrapper">
                  <div className="blog-intro-paragraph ff-sans letter-s l-1 fs-400">
                    <span className="accent">Balance </span>
                    is key! Enjoy a variety of foods. With a array of fruits,
                    vegetables, proteins, and whole grains. A diverse approach
                    ensures you receive a wide range of
                    <span className="accent"> essential nutrients</span> for
                    overall health and well-being."
                  </div>
                  <div className="grid-btn-wrapper">
                    <Link
                      to={'Articles/Nutrition'}
                      className="l-btn link"
                      onClick={scrollToTop}>
                      <span className="l-btn-text" data-hover="more">
                        Read
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default BlogIntro;
