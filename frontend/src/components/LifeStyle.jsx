/** @format */

import { Link } from 'react-router-dom';

function LifeStyle({ lifestyles }) {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div className="fitness-cat">
      <div className="eyebrow">
        <span>{lifestyles.name}</span>
      </div>
      <div className="article-image">
        <picture>
          <source
            as="image"
            srcSet={lifestyles.image}
            alt={lifestyles.alt}
            media="(min-width: 1250px)"
          />
          <img as="image" src={lifestyles.mobileImage} alt={lifestyles.alt} />
        </picture>
      </div>
      <div className="article-text">
        <p className="fs-400 letter-s">{lifestyles.description}</p>
      </div>
      <div className="article-btn">
        <Link
          to={`./${lifestyles._id}`}
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

export default LifeStyle;
