/** @format */

import '../styles/articles.css';
import React, { useEffect, useState } from 'react';
import BreadCrums from '../components/BreadCrums';
import axios from 'axios';
import Muscle from '../components/Muscle';

function MuscleScreen() {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import('locomotive-scroll')).default;
      new LocomotiveScroll();
    })();
  }, []);

  const [muscleBlog, setmuscleBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      const { data } = await axios.get('/api/muscle');
      setmuscleBlogs(data);
    };
    fetchBlogs();
  }, []);

  return (
    <>
      <section>
        <div className="page-wrapper">
          <div className="articles-title">
            <h1 className="letter-b fs-700">Muscle</h1>
            <h2 className="letter-s fs-300 upper">Articles</h2>
          </div>
          <div className="breadcrumholder fs-300 letter-s upper">
            <BreadCrums></BreadCrums>
          </div>
          <div className="articles-grid">
            {muscleBlog.map((muscleBlog) => (
              <div key={muscleBlog._id}>
                <Muscle muscleBlog={muscleBlog}></Muscle>
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
}

export default MuscleScreen;
