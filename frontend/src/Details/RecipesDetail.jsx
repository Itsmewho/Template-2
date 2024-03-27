/** @format */

import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import BreadCrums from '../components/BreadCrums';
import '../styles/articlesDetail.css';

function recipesDetail() {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import('locomotive-scroll')).default;
      new LocomotiveScroll();
    })();
  }, []);
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  const { id: recipesId } = useParams();
  const [recipesBlog, setrecipesBlogs] = useState([]);

  useEffect(() => {
    const fetchBlog = async () => {
      const { data } = await axios.get(`/api/recipes/${recipesId}`);
      setrecipesBlogs(data);
    };
    fetchBlog();
  }, [recipesId]);

  return (
    <>
      <section className="article-detail-section">
        <div className="page-wrapper">
          <div className="breadcrumholder fs-300 letter-s upper">
            <BreadCrums></BreadCrums>
          </div>
          <div className="articledetail-grid">
            <div className="image-detail">
              <h1 className="fs-900 ff-serif letter-b">{recipesBlog.name}</h1>
              <picture className="mobile-order">
                <source
                  srcSet={recipesBlog.image}
                  alt={recipesBlog.alt}
                  media="(min-width: 1250px)"
                />
                <img src={recipesBlog.mobileImage} alt={recipesBlog.alt} />
              </picture>
              <p className="secondaire-text fs-600 ff-serif">
                {recipesBlog.description}
              </p>
            </div>
            <div className="longtext ff-sans fs-400">
              <p className="longtext-p">{recipesBlog.paragraph}</p>
              <p className="longtext-p">{recipesBlog.paragraph1}</p>
              <p className="longtext-p">{recipesBlog.paragraph2}</p>
            </div>
          </div>
          <div className="articledetail-grid2">
            <div className="longtext2 fs-400 ff-sans">
              <p className="longtext-p">{recipesBlog.paragraph3}</p>
              <p className="longtext-p">{recipesBlog.paragraph4}</p>
            </div>
            <div className="image-detail-2">
              <div className="center-detail">
                <div>
                  <p className="longtext-q">{recipesBlog.short}</p>
                </div>
                <div>
                  <p className="longtext-q">{recipesBlog.short1}</p>
                </div>
              </div>
              <picture>
                <source
                  srcSet={recipesBlog.detailImage}
                  alt={recipesBlog.alt}
                  media="(min-width: 1250px)"
                />
                <img
                  src={recipesBlog.detailMobileImage}
                  alt={recipesBlog.alt}
                />
              </picture>
              <div className="center-detail-2">
                <div>
                  <Link
                    to={'../Articles/Recipes'}
                    className="l-btn link"
                    onClick={scrollToTop}>
                    <span className="l-btn-text" data-hover="Read more">
                      read more
                    </span>
                  </Link>
                </div>
                <div>
                  <Link
                    to={'/Shop'}
                    className="l-btn link"
                    onClick={scrollToTop}>
                    <span className="l-btn-text" data-hover="shop">
                      Shop
                    </span>
                  </Link>
                </div>
              </div>
            </div>

            <div className="breadcrumholder fs-300 letter-s upper mobile-bread">
              <BreadCrums></BreadCrums>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default recipesDetail;
