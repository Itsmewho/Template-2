/** @format */

import React from 'react';
import '../styles/notfound.css';
import { Link } from 'react-router-dom';
function NotFound() {
  return (
    <>
      <div className="notfound" data-scroll-section>
        <div>
          <h1 className="ff-serif letter-b fs-900">404</h1>
          <p className="notfound-p ff-sans letter-m fs-700">
            Seems monkeys doing the work today.
          </p>
          <p className="notfound-p ff-sans letter-s fs-600">Page not found</p>
          <div className="notfound-btn-container">
            <Link to={'/'} className="n-btn link">
              <span className="n-btn-text" data-hover="Prev">
                Go back
              </span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default NotFound;
