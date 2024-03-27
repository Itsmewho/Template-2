/** @format */
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import BreadCrums from '../components/BreadCrums';
import '../styles/articlesDetail.css';

function WorkoutDetail() {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import('locomotive-scroll')).default;
      new LocomotiveScroll();
    })();
  }, []);
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  const { id: nutritionsId } = useParams();
  const [nutritionso, setNutritions] = useState([]);

  useEffect(() => {
    const fetchNutrition = async () => {
      const { data } = await axios.get(`/api/nutritions/${nutritionsId}`);
      setNutritions(data);
    };
    fetchNutrition();
  }, [nutritionsId]);

  return (
    <>
      <section className="article-detail-section">
        <div className="page-wrapper">
          <div className="breadcrumholder fs-300 letter-s upper">
            <BreadCrums></BreadCrums>
          </div>
          <div className="articledetail-grid">
            <div className="image-detail">
              <h1 className="fs-900 ff-serif letter-b">{nutritionso.name}</h1>
              <picture className="mobile-order">
                <source
                  srcSet={nutritionso.image}
                  alt={nutritionso.alt}
                  media="(min-width: 1250px)"
                />
                <img src={nutritionso.mobileImage} alt={nutritionso.alt} />
              </picture>
              <p className="secondaire-text fs-600 ff-serif">
                {nutritionso.description}
              </p>
            </div>
            <div className="longtext ff-sans fs-400">
              <p className="longtext-p">{nutritionso.paragraph}</p>
              <p className="longtext-p">{nutritionso.paragraph1}</p>
              <p className="longtext-p">{nutritionso.paragraph2}</p>
            </div>
          </div>
          <div className="articledetail-grid2">
            <div className="longtext2 fs-400 ff-sans">
              <p className="longtext-p">{nutritionso.paragraph3}</p>
              <p className="longtext-p">{nutritionso.paragraph4}</p>
            </div>
            <div className="image-detail-2">
              <div className="center-detail">
                <div>
                  <p className="longtext-q">{nutritionso.short}</p>
                </div>
                <div>
                  <p className="longtext-q">{nutritionso.short1}</p>
                </div>
              </div>
              <picture>
                <source
                  srcSet={nutritionso.detailImage}
                  alt={nutritionso.alt}
                  media="(min-width: 1250px)"
                />
                <img
                  src={nutritionso.detailMobileImage}
                  alt={nutritionso.alt}
                />
              </picture>
              <div className="center-detail-2">
                <div>
                  <Link
                    to={'../Articles/Nutrition'}
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

export default WorkoutDetail;
