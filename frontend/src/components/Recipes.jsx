/** @format */

import { Link } from 'react-router-dom';

function Recipes({ recipesBlog }) {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div className="fitness-cat">
      <div className="eyebrow">
        <span>{recipesBlog.name}</span>
      </div>
      <div className="article-image">
        <picture>
          <source
            as="image"
            srcSet={recipesBlog.image}
            alt={recipesBlog.alt}
            media="(min-width: 1250px)"
          />
          <img as="image" src={recipesBlog.mobileImage} alt={recipesBlog.alt} />
        </picture>
      </div>
      <div className="article-text">
        <p className="fs-400 letter-s">{recipesBlog.description}</p>
      </div>
      <div className="article-btn">
        <Link
          to={`./${recipesBlog._id}`}
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

export default Recipes;
