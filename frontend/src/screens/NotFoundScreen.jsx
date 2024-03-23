/** @format */

import React from 'react';
import '../styles/notfound.css';
import { useNavigate } from 'react-router-dom';
function NotFound() {
  const navigate = useNavigate();


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
            <a onClick={() => navigate(-1)} className="n-btn link">
              <span className="n-btn-text" data-hover="Prev">
                Go back
              </span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default NotFound;
