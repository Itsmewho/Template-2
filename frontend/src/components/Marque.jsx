/** @format */

import React from 'react';
import '../styles/marques.css';
import Marquee from 'react-fast-marquee';

function Marque() {
  return (
    <>
      <div className="markies" aria-hidden="true">
        <div className="markies1 fs-700 ff-serif upper letter-b dark-white">
          <Marquee speed={30}>
            <div className="markies-wrapper">
              <span className="gray">Believe</span>
              <span className="accent">Dream</span>
              <span className="gray">Inspire</span>
              <span className="accent">Challenge</span>
              <span className="gray">Create</span>
              <span className="accent">Thrive</span>
              <span className="gray">Grow</span>
              <span className="accent">Empower</span>
              <span className="gray">Drive</span>
              <span className="accent">Persevere</span>
            </div>
          </Marquee>
        </div>
      </div>
    </>
  );
}

export default Marque;
