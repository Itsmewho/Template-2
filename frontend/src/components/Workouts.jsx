/** @format */

import { Link } from 'react-router-dom';

function Workouts({ workoutsBlog }) {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div className="fitness-cat">
      <div className="eyebrow">
        <span>{workoutsBlog.name}</span>
      </div>
      <div className="article-image">
        <picture>
          <source
            as="image"
            srcSet={workoutsBlog.image}
            alt={workoutsBlog.alt}
            media="(min-width: 1250px)"
          />
          <img
            as="image"
            src={workoutsBlog.mobileImage}
            alt={workoutsBlog.alt}
          />
        </picture>
      </div>
      <div className="article-text">
        <p className="fs-400 letter-s">{workoutsBlog.description}</p>
      </div>
      <div className="article-btn">
        <Link
          to={`./${workoutsBlog._id}`}
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

export default Workouts;
