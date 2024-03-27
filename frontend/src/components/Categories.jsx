/** @format */

import React from 'react';
import '../styles/categories.css';
import { Link } from 'react-router-dom';

function Categories() {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <>
      <div className="page-wrapper">
        <section data-scroll-section>
          <div
            className="cat-wrapper ff-sans fs-500"
            data-scroll
            data-scroll-speed="0.4"
            id="cat-wrapper">
            <div className="lifestyle">
              <h2 className="cat-top ff-serif l-2 letter-b underline-r fw-100">
                Lifestyle
              </h2>
              <div
                className="cat-mid"
                data-scroll
                data-scroll-class="animate"
                data-scroll-repeat="true">
                Take <span className="accent">charge</span> of your
                <span className="accent"> well-being</span> with us! Explore
                expert tips on health and living. break boundaries, and create a
                life of health and happiness.
              </div>
              <div
                className="cat-bottom fs-400"
                data-scroll
                data-scroll-class="animate2"
                data-scroll-repeat="true">
                <Link
                  to={'Articles/Lifestyle'}
                  className="l-btn link"
                  onClick={scrollToTop}>
                  <span className="l-btn-text" data-hover="lifestyle">
                    Read more
                  </span>
                </Link>
              </div>
            </div>
            <div className="nutrition">
              <h3 className="cat-top ff-serif l-2 letter-m underline-r fw-100">
                Nutrition
              </h3>
              <div
                className="cat-mid"
                data-scroll
                data-scroll-class="animate"
                data-scroll-repeat="true">
                <span className="accent">Balance </span>
                is key! Enjoy a variety of foods. With a array of fruits,
                vegetables, proteins, and whole grains. A diverse approach
                ensures you receive a wide range of
                <span className="accent"> essential nutrients</span> for overall
                health and well-being."
              </div>
              <div
                className="cat-bottom fs-400"
                data-scroll
                data-scroll-class="animate2"
                data-scroll-repeat="true">
                <Link
                  to={'Articles/Nutrition'}
                  className="l-btn link fs-400"
                  onClick={scrollToTop}>
                  <span className="l-btn-text" data-hover="nutrition">
                    Read more
                  </span>
                </Link>
              </div>
            </div>
            <div className="training">
              <h4 className="cat-top ff-serif l-2 letter-m underline-r fw-100">
                Fitness
              </h4>
              <div
                className="cat-mid"
                data-scroll
                data-scroll-class="animate"
                data-scroll-repeat="true">
                "Consistency is key! Make
                <span className="accent">exercise </span>a regular part of your
                routine to reap the full benefits. Choose activities you
                <span className="accent">enjoy</span> to stay
                <span className="accent"> motivated</span> and engaged. Whether
                it's a brisk walk or a HIIT workout
              </div>
              <div
                className="cat-bottom fs-400"
                data-scroll
                data-scroll-class="animate2"
                data-scroll-repeat="true">
                <Link
                  to={'Articles/Fitness'}
                  className="l-btn link fs-400"
                  onClick={scrollToTop}>
                  <span className="l-btn-text" data-hover="fitness">
                    Read more
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Categories;
