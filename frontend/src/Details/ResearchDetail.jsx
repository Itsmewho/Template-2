/** @format */

import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import BreadCrums from '../components/BreadCrums';
import '../styles/articlesDetail.css';

function ResearchDetail() {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import('locomotive-scroll')).default;
      new LocomotiveScroll();
    })();
  }, []);
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  const { id: researchId } = useParams();
  const [researchBlog, setresearchBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      const { data } = await axios.get(`/api/research/${researchId}`);
      setresearchBlogs(data);
    };
    fetchBlogs();
  }, [researchId]);

  return (
    <>
      <section className="article-detail-section">
        <div className="page-wrapper">
          <div className="breadcrumholder fs-300 letter-s upper">
            <BreadCrums></BreadCrums>
          </div>
          <div className="articledetail-grid">
            <div className="image-detail">
              <h1 className="fs-900 ff-serif letter-b">{researchBlog.name}</h1>
              <picture className="mobile-order">
                <source
                  srcSet={researchBlog.image}
                  alt={researchBlog.alt}
                  media="(min-width: 1250px)"
                />
                <img src={researchBlog.mobileImage} alt={researchBlog.alt} />
              </picture>
              <p className="secondaire-text fs-600 ff-serif">
                {researchBlog.description}
              </p>
            </div>
            <div className="longtext ff-sans fs-400">
              <p className="longtext-p">{researchBlog.paragraph}</p>
              <p className="longtext-p">{researchBlog.paragraph1}</p>
              <p className="longtext-p">{researchBlog.paragraph2}</p>
            </div>
          </div>
          <div className="articledetail-grid2">
            <div className="longtext2 fs-400 ff-sans">
              <p className="longtext-p">{researchBlog.paragraph3}</p>
              <p className="longtext-p">{researchBlog.paragraph4}</p>
            </div>
            <div className="image-detail-2">
              <div className="center-detail">
                <div>
                  <p className="longtext-q">{researchBlog.short}</p>
                </div>
                <div>
                  <p className="longtext-q">{researchBlog.short1}</p>
                </div>
              </div>
              <picture>
                <source
                  srcSet={researchBlog.detailImage}
                  alt={researchBlog.alt}
                  media="(min-width: 1250px)"
                />
                <img
                  src={researchBlog.detailMobileImage}
                  alt={researchBlog.alt}
                />
              </picture>
              <div className="center-detail-2">
                <div>
                  <Link
                    to={'../Articles/Research'}
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

export default ResearchDetail;
