/** @format */
import '../styles/slider.css';
import { useState } from 'react';
import leftArrow from '../assets/arrow-left.svg';
import rightArrow from '../assets/arrow-right.svg';

function Slider({ imageURLs }) {
  const [imageIDX, setImageIDX] = useState(0);

  function nextIamge() {
    setImageIDX((idx) => {
      if (idx === 0) return imageURLs.length - 1;
      return idx - 1;
    });
  }
  function prevImage() {
    setImageIDX((idx) => {
      if (idx === imageURLs.length - 1) return 0;
      return idx + 1;
    });
  }
  return (
    <>
      <div>
        <div className="slider-image-container">
          {imageURLs.map((url) => (
            <img
              key={url}
              className="slider-image"
              style={{ translate: `${-100 * imageIDX}%` }}
              src={url}
            />
          ))}
        </div>
        <button className="arrow-left" onClick={nextIamge}>
          <img src={leftArrow} alt="arrow-left" />
        </button>
        <button className="arrow-right" onClick={prevImage}>
          <img src={rightArrow} alt="arrow-right" />
        </button>
      </div>
    </>
  );
}

export default Slider;
