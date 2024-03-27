/** @format */

import { Link } from 'react-router-dom';

function Nutrition({ nutritions }) {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div className="fitness-cat">
      <div className="eyebrow">
        <span>{nutritions.name}</span>
      </div>
      <div className="article-image">
        <picture>
          <source
            as="image"
            srcSet={nutritions.image}
            alt={nutritions.alt}
            media="(min-width: 1250px)"
          />
          <img as="image" src={nutritions.mobileImage} alt={nutritions.alt} />
        </picture>
      </div>
      <div className="article-text">
        <p className="fs-400 letter-s">{nutritions.description}</p>
      </div>
      <div className="article-btn">
        <Link
          to={`./${nutritions._id}`}
          className="l-btn link"
          onClick={scrollToTop}>
          <span className="l-btn-text" data-hover="fitness">
            Read more
          </span>
        </Link>
      </div>
    </div>
  );
}

export default Nutrition;
