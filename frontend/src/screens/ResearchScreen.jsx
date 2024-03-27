/** @format */

import '../styles/articles.css';
import React, { useEffect, useState } from 'react';
import BreadCrums from '../components/BreadCrums';
import axios from 'axios';
import Research from '../components/Research';

const ResearchScreen = () => {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import('locomotive-scroll')).default;
      new LocomotiveScroll();
    })();
  }, []);
  const [researchBlog, setresearchBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      const { data } = await axios.get('/api/research');
      setresearchBlogs(data);
    };
    fetchBlogs();
  }, []);

  return (
    <>
      <section>
        <div className="page-wrapper">
          <div className="articles-title">
            <h1 className="letter-b fs-700">Research</h1>
            <h2 className="letter-s fs-300 upper">Articles</h2>
          </div>
          <div className="breadcrumholder fs-300 letter-s upper">
            <BreadCrums></BreadCrums>
          </div>
          <div className="articles-grid">
            {researchBlog.map((researchBlog) => (
              <div key={researchBlog._id}>
                <Research researchBlog={researchBlog}></Research>
              </div>
            ))}
            <div className="breadcrumholder fs-300 letter-s upper">
              <BreadCrums></BreadCrums>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ResearchScreen;
