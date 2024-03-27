/** @format */

import { Link } from 'react-router-dom';
function Fitness({ fitnessBlog }) {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div className="fitness-cat">
      <div className="eyebrow">
        <span>{fitnessBlog.name}</span>
      </div>
      <div className="article-image">
        <picture>
          <source
            as="image"
            srcSet={fitnessBlog.image}
            alt={fitnessBlog.alt}
            media="(min-width: 1250px)"
          />
          <img as="image" src={fitnessBlog.mobileImage} alt={fitnessBlog.alt} />
        </picture>
      </div>
      <div className="article-text">
        <p className="fs-400 letter-s">{fitnessBlog.description}</p>
      </div>
      <div className="article-btn">
        <Link
          to={`./${fitnessBlog._id}`}
          className="l-btn link crumb"
          onClick={scrollToTop}>
          <span className="l-btn-text" data-hover="fitness">
            Read more
          </span>
        </Link>
      </div>
    </div>
  );
}

export default Fitness;
