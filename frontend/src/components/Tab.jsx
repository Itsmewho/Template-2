/** @format */
import React, { useState } from 'react';
import '../styles/tabs.css';

function Tab({ products }) {
  const [currentButton, setCurrentButton] = useState('A');

  

  return (
    <div className="tabs">
      {/* Tab nav */}
      <ul className="tabs-nav fs-400">
      <li  className={currentButton === "A" ? "active" : ""} onClick={() => setCurrentButton('A')}>Description</li>
      <li className={currentButton === "B" ? "active" : ""}  onClick={() => setCurrentButton('B')}>Ingredients</li>
      <li className={currentButton === "C" ? "active" : ""}  onClick={() => setCurrentButton('C')}>Reviews</li>
      </ul>
      <div className="outlet fs-400 letter-s">
        {
          {
            A: <p>{products.description}</p>,
            B: <p>{products.ingredients}</p>,
            C: <p>{products.numReviews}</p>,
          }[currentButton]
        }
      </div>
    </div>
  );
}

export default Tab;
