/** @format */

import { Link } from 'react-router-dom';

function Muscle({ muscleBlog }) {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div className="fitness-cat">
      <div className="eyebrow">
        <span>{muscleBlog.name}</span>
      </div>
      <div className="article-image">
        <picture>
          <source
            as="image"
            srcSet={muscleBlog.image}
            alt={muscleBlog.alt}
            media="(min-width: 1250px)"
          />
          <img as="image" src={muscleBlog.mobileImage} alt={muscleBlog.alt} />
        </picture>
      </div>
      <div className="article-text">
        <p className="fs-400 letter-s">{muscleBlog.description}</p>
      </div>
      <div className="article-btn">
        <Link
          to={`./${muscleBlog._id}`}
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

export default Muscle;
