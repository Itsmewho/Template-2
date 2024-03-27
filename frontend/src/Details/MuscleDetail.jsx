/** @format */

import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import BreadCrums from '../components/BreadCrums';
import '../styles/articlesDetail.css';

function MuscleDetail() {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import('locomotive-scroll')).default;
      new LocomotiveScroll();
    })();
  }, []);
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  const { id: muscleId } = useParams();
  const [muscleBlog, setmuscleBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      const { data } = await axios.get(`/api/muscle/${muscleId}`);
      setmuscleBlogs(data);
    };
    fetchBlogs();
  }, [muscleId]);

  return (
    <>
      <section className="article-detail-section">
        <div className="page-wrapper">
          <div className="breadcrumholder fs-300 letter-s upper">
            <BreadCrums></BreadCrums>
          </div>
          <div className="articledetail-grid">
            <div className="image-detail">
              <h1 className="fs-900 ff-serif letter-b">{muscleBlog.name}</h1>
              <picture className="mobile-order">
                <source
                  srcSet={muscleBlog.image}
                  alt={muscleBlog.alt}
                  media="(min-width: 1250px)"
                />
                <img src={muscleBlog.mobileImage} alt={muscleBlog.alt} />
              </picture>
              <p className="secondaire-text fs-600 ff-serif">
                {muscleBlog.description}
              </p>
            </div>
            <div className="longtext ff-sans fs-400">
              <p className="longtext-p">{muscleBlog.paragraph}</p>
              <p className="longtext-p">{muscleBlog.paragraph1}</p>
              <p className="longtext-p">{muscleBlog.paragraph2}</p>
            </div>
          </div>
          <div className="articledetail-grid2">
            <div className="longtext2 fs-400 ff-sans">
              <p className="longtext-p">{muscleBlog.paragraph3}</p>
              <p className="longtext-p">{muscleBlog.paragraph4}</p>
            </div>
            <div className="image-detail-2">
              <div className="center-detail">
                <div>
                  <p className="longtext-q">{muscleBlog.short}</p>
                </div>
                <div>
                  <p className="longtext-q">{muscleBlog.short1}</p>
                </div>
              </div>
              <picture>
                <source
                  srcSet={muscleBlog.detailImage}
                  alt={muscleBlog.alt}
                  media="(min-width: 1250px)"
                />
                <img src={muscleBlog.detailMobileImage} alt={muscleBlog.alt} />
              </picture>
              <div className="center-detail-2">
                <div>
                  <Link
                    to={'../Articles/Muscle'}
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

export default MuscleDetail;
