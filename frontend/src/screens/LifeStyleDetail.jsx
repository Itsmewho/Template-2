/** @format */
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import BreadCrums from '../components/BreadCrums';
import '../styles/articlesDetail.css';

function LifeStyleDetail() {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import('locomotive-scroll')).default;
      new LocomotiveScroll();
    })();
  }, []);
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  const { id: lifestylesId } = useParams();
  const [lifestyles, setlifestyles] = useState([]);

  useEffect(() => {
    const fetchLife = async () => {
      const { data } = await axios.get(`/api/lifestyles/${lifestylesId}`);
      setlifestyles(data);
    };
    fetchLife();
  }, [lifestylesId]);

  return (
    <>
      <section className="article-detail-section">
        <div className="page-wrapper">
          <div className="breadcrumholder fs-300 letter-s upper">
            <BreadCrums></BreadCrums>
          </div>
          <div className="articledetail-grid">
            <div className="image-detail">
              <h1 className="fs-900 ff-serif letter-b">{lifestyles.name}</h1>
              <picture className="mobile-order">
                <source
                  as="image"
                  srcSet={lifestyles.image}
                  alt={lifestyles.alt}
                  media="(min-width: 1250px)"
                />
                <img
                  as="image"
                  src={lifestyles.mobileImage}
                  alt={lifestyles.alt}
                />
              </picture>
              <p className="secondaire-text fs-600 ff-serif">
                {lifestyles.description}
              </p>
            </div>
            <div className="longtext ff-sans fs-400">
              <p className="longtext-p">{lifestyles.paragraph}</p>
              <p className="longtext-p">{lifestyles.paragraph1}</p>
              <p className="longtext-p">{lifestyles.paragraph2}</p>
            </div>
          </div>
          <div className="articledetail-grid2">
            <div className="longtext2 fs-400 ff-sans">
              <p className="longtext-p">{lifestyles.paragraph3}</p>
              <p className="longtext-p">{lifestyles.paragraph4}</p>
            </div>
            <div className="image-detail-2">
              <div className="center-detail">
                <div>
                  <p className="longtext-q">{lifestyles.short}</p>
                </div>
                <div>
                  <p className="longtext-q">{lifestyles.short1}</p>
                </div>
              </div>
              <picture>
                <source
                  as="image"
                  srcSet={lifestyles.detailImage}
                  alt={lifestyles.alt}
                  media="(min-width: 1250px)"
                />
                <img
                  as="image"
                  src={lifestyles.detailMobileImage}
                  alt={lifestyles.alt}
                />
              </picture>
              <div className="center-detail-2">
                <div>
                  <Link
                    to={'../Articles/Lifestyle'}
                    className="l-btn link"
                    onClick={scrollToTop}>
                    <span className="l-btn-text" data-hover="Read more">
                      read more
                    </span>
                  </Link>
                </div>
                <div>
                  <Link
                    to={'/shop'}
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

export default LifeStyleDetail;
