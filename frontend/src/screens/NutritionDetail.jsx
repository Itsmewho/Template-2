/** @format */
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import nutritions from '../nutrition';
import BreadCrums from '../components/BreadCrums';
import '../styles/articlesDetail.css';

function NutritionDetail() {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import(`locomotive-scroll`)).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  const { id: nutritionsId } = useParams();
  const nutrtion = nutritions.find((n) => n.name === nutritionsId);

  return (
    <>
      <section className="article-detail-section">
        <div className="page-wrapper">
          <div className="breadcrumholder fs-300 letter-s upper">
            <BreadCrums></BreadCrums>
          </div>
          <div className="articledetail-grid">
            <div className="image-detail">
              <h1 className="fs-900 ff-serif letter-b">{nutrtion.name}</h1>
              <picture className="mobile-order">
                <source
                  srcSet={nutrtion.image}
                  alt={nutrtion.alt}
                  media="(min-width: 1250px)"
                />
                <img src={nutrtion.mobileImage} alt={nutrtion.alt} />
              </picture>
              <p className="secondaire-text fs-600 ff-serif">
                {nutrtion.description}
              </p>
            </div>
            <div className="longtext ff-sans fs-400">
              <p className="longtext-p">{nutrtion.longtext}</p>
              <p className="longtext-p">{nutrtion.longtext1}</p>
              <p className="longtext-p">{nutrtion.longtext2}</p>
            </div>
          </div>
          <div className="articledetail-grid2">
            <div className="longtext2 fs-400 ff-sans">
              <p className="longtext-p">{nutrtion.longtext3}</p>
              <p className="longtext-p">{nutrtion.longtext4}</p>
            </div>
            <div className="image-detail-2">
              <div className="center-detail">
                <div>
                  <p className="longtext-q">{nutrtion.short}</p>
                </div>
                <div>
                  <p className="longtext-q">{nutrtion.short1}</p>
                </div>
              </div>
              <picture>
                <source
                  srcSet={nutrtion.detailImage}
                  alt={nutrtion.alt}
                  media="(min-width: 1250px)"
                />
                <img
                  src={nutrtion.detailMobileImage}
                  alt={nutrtion.alt}
                />
              </picture>
              <div className="center-detail-2">
                <div>
                  <Link
                    to={'../Articles/fitness'}
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

export default NutritionDetail;
