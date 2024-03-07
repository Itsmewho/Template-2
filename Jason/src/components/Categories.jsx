/** @format */

import React from 'react';
import '../styles/categories.css';

function Categories() {
  return (
    <>
      <div className="page-wrapper">
        <div className="cat-wrapper ff-sans fs-500">
          <div className="lifestyle">
            <div className="cat-top ff-serif l-2 letter-b underline-r fw-100">
              Lifestyle
            </div>
            <div className="cat-mid ">
              Take <span className="accent">charge</span> of your{' '}
              <span className="accent">well-being</span> with us! Explore expert
              tips on health and living. break{' '}
              <span className="accent">boundaries</span>, and create a life of
              health and happiness. A <span className="accent">journey</span> to
              a better you
            </div>
            <div className="cat-bottom fs-400">
              <a className="l-btn link">
                <span className="l-btn-text" data-hover="lifestyle">
                  Read more
                </span>
              </a>
            </div>
          </div>
          <div className="nutrition">
            <div className="cat-top ff-serif l-2 letter-m underline-r fw-100">
              Nutrition
            </div>
            <div className="cat-mid">
              <span className="accent">Balance </span>
              is key! Enjoy a variety of <span className="accent">foods</span>.
              With a array of <span className="accent">fruits</span>,
              vegetables, <span className="accent">proteins</span>, and whole
              grains. A diverse approach ensures you{' '}
              <span className="accent">receive</span> a wide range of{' '}
              <span className="accent">essential nutrients</span> for overall
              health and well-being."
            </div>
            <div className="cat-bottom">
              <a className="l-btn link fs-400">
                <span className="l-btn-text" data-hover="nutrition">
                  Read more
                </span>
              </a>
            </div>
          </div>
          <div className="training">
            <div className="cat-top ff-serif l-2 letter-m underline-r fw-100">
              Fitness
            </div>
            <div className="cat-mid">
              "Consistency is key! Make{' '}
              <span className="accent">exercise </span>a{' '}
              <span className="accent">regular </span> part of your routine to
              reap the full benefits. Choose activities you{' '}
              <span className="accent">enjoy</span> to stay
              <span className="accent"> motivated</span> and{' '}
              <span className="accent">engaged</span>. Whether it's a brisk walk
              or a HIIT workout
            </div>
            <div className="cat-bottom">
              <a className="l-btn link fs-400">
                <span className="l-btn-text" data-hover="fitness">
                  Read more
                </span>
              </a>
            </div>
          </div>
        </div>
          <div className="center-line">
            <div className="line"></div>
            <div></div>
          </div>
      </div>
    </>
  );
}

export default Categories;
