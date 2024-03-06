/** @format */

import React from 'react';
import Megnet from '../components/Megnet';
import MegnetTwo from '../components/MegnetTwo';

function Stylepage() {
  return (
    <>
      <div className="grid-3">
        <div className="col1">
          <div className="stylePage">
            <h1>This is the H1</h1>
            <h2>This is the H2</h2>
            <h3>This is the H3</h3>
            <h4>This is the H4</h4>
            <h5>This is the H5</h5>
          </div>
          <div className="stylePage">
            <p className="fs-900">This is fs-900</p>
            <p className="fs-800">This is fs-800</p>
            <p className="fs-700">This is fs-700</p>
            <p className="fs-600">This is fs-600</p>
            <p className="fs-500">This is fs-500</p>
            <p className="fs-400">This is fs-400</p>
            <p className="fs-300">This is fs-300</p>
          </div>
        </div>
        <div className="col3">
          <div className="stylePage">
            <p className="ff-serif">Serif</p>
            <p className="ff-sans">Sans</p>
          </div>
          <div className="stylePage">
            <p className="letter-s">Small Spacing</p>
            <p className="letter-m">Middle Spacing</p>
            <p className="letter-b">Big Spacing</p>
          </div>
          <div className="stylePage">
            <p className="italic">italic</p>
            <p className="fw-100">fw-100</p>
            <p className="fw-200">fw-200</p>
            <p className="fw-300">fw-300</p>
            <p className="fw-400">fw-400</p>
            <p className="fw-100 italic">fw-100 italic</p>
            <p className="fw-200 italic">fw-200 italic</p>
            <p className="fw-300 italic">fw-300 italic</p>
            <p className="fw-400 italic">fw-400 italic</p>
          </div>
          <div className="stylePage flex">
            <Megnet>
              <div className="btn-container">
                <div className="outer-btn">
                  <MegnetTwo>
                    <a className="btn-link">
                      <MegnetTwo>
                        <span className="btn-text">Main</span>
                      </MegnetTwo>
                    </a>
                  </MegnetTwo>
                </div>
              </div>
            </Megnet>

            <a className="b-btn link">
              <span className="b-btn-text" data-hover="basic">
                Basic
              </span>
            </a>
            <a className="l-btn link">
              <span className="l-btn-text" data-hover="basic">
                Basic
              </span>
            </a>
          </div>
        </div>
        <div className="col4">
          <div className="stylePage">
            <p>This is an paragraph</p>
            <li>This is a list item</li>
            <ul>This is an ul</ul>
          </div>
          <div className="stylePage">
            <div className="p-small">Small padding</div>
            <div className="p-mid">Middle Padding</div>
            <div className="p-big">Big padding</div>
          </div>
          <div className="stylePage">
            <div className="l-1">line height l-1</div>
            <div className="l-2">line height l-2</div>
            <div className="l-3">line height l-3</div>
            <div className="l-4">line height l-4</div>
          </div>
          <div className="stylePage">
            <a href="#" className="link">
              <span data-hover="This is a link">This is a link</span>
            </a>
          </div>
          <div className="stylePage">
            <div className="underline-r l-2">Underline red hover</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Stylepage;
