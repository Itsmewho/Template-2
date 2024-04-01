/** @format */

import { Link } from 'react-router-dom';

function Products({ products }) {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div className="fitness-cat">
      <div className="eyebrow">
        <span>{products.name}</span>
      </div>
      <div className="article-image">
        <picture>
          <source
            as="image"
            srcSet={products.image}
            alt={products.alt}
            media="(min-width: 1250px)"
          />
          <img as="image" src={products.mobileImage} alt={products.alt} />
        </picture>
      </div>
      <div className="article-text">
        <p className="fs-400 letter-s">{products.description}</p>
      </div>
      <div className="article-btn">
        <Link
          to={`./products/${products._id}`}
          className="l-btn link"
          onClick={scrollToTop}>
          <span className="l-btn-text" data-hover="Item">
            Go To
          </span>
        </Link>
      </div>
    </div>
  );
}

export default Products;
