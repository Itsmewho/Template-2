/** @format */

import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import BreadCrums from '../components/BreadCrums';
import '../styles/articlesDetail.css';

function FitnessDetail() {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import('locomotive-scroll')).default;
      new LocomotiveScroll();
    })();
  }, []);
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  const { id: fitnessId } = useParams();
  const [fitnessB, setfitnessBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      const { data } = await axios.get(`/api/fitnessBlog/${fitnessId}`);
      setfitnessBlogs(data);
    };
    fetchBlogs();
  }, [fitnessId]);

  return (
    <>
      <section className="article-detail-section">
        <div className="page-wrapper">
          <div className="breadcrumholder fs-300 letter-s upper">
            <BreadCrums></BreadCrums>
          </div>
          <div className="articledetail-grid">
            <div className="image-detail">
              <h1 className="fs-900 ff-serif letter-b">{fitnessB.name}</h1>
              <picture className="mobile-order">
                <source
                  as="image"
                  srcSet={fitnessB.image}
                  alt={fitnessB.alt}
                  media="(min-width: 1250px)"
                />
                <img as="image" src={fitnessB.mobileImage} alt={fitnessB.alt} />
              </picture>
              <p className="secondaire-text fs-600 ff-serif">
                {fitnessB.description}
              </p>
            </div>
            <div className="longtext ff-sans fs-400">
              <p className="longtext-p">{fitnessB.longtext}</p>
              <p className="longtext-p">{fitnessB.longtext1}</p>
              <p className="longtext-p">{fitnessB.longtext2}</p>
            </div>	  
          </div>
          <div className="articledetail-grid2">
            <div className="longtext2 fs-400 ff-sans">
              <p className="longtext-p">{fitnessB.longtext3}</p>
              <p className="longtext-p">{fitnessB.longtext4}</p>
            </div>
            <div className="image-detail-2">
              <div className="center-detail">
                <div>
                  <p className="longtext-q">{fitnessB.short}</p>
                </div>
                <div>
                  <p className="longtext-q">{fitnessB.short1}</p>
                </div>
              </div>
              <picture>
                <source
                  as="image"
                  srcSet={fitnessB.detailImage}
                  alt={fitnessB.alt}
                  media="(min-width: 1250px)"
                />
                <img
                  as="image"
                  src={fitnessB.detailMobileImage}
                  alt={fitnessB.alt}
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

export default FitnessDetail;
