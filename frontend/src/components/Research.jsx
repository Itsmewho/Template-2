/** @format */

import { Link } from 'react-router-dom';

function Research({ researchBlog }) {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div className="fitness-cat">
      <div className="eyebrow">
        <span>{researchBlog.name}</span>
      </div>
      <div className="article-image">
        <picture>
          <source
            as="image"
            srcSet={researchBlog.image}
            alt={researchBlog.alt}
            media="(min-width: 1250px)"
          />
          <img
            as="image"
            src={researchBlog.mobileImage}
            alt={researchBlog.alt}
          />
        </picture>
      </div>
      <div className="article-text">
        <p className="fs-400 letter-s">{researchBlog.description}</p>
      </div>
      <div className="article-btn">
        <Link
          to={`./${researchBlog._id}`}
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

export default Research;
