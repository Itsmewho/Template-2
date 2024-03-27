/** @format */
import '../styles/articles.css';
import React, { useEffect, useState } from 'react';
import BreadCrums from '../components/BreadCrums';
import LifeStyle from '../components/LifeStyle';
import axios from 'axios';

function LifeStyleScreen() {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import('locomotive-scroll')).default;
      new LocomotiveScroll();
    })();
  }, []);

  const [lifestyles, setlifestyles] = useState([]);

  useEffect(() => {
    const fetchLifestyle = async () => {
      const { data } = await axios.get('/api/lifestyles');
      setlifestyles(data);
    };
    fetchLifestyle();
  }, []);
  return (
    <>
      <section>
        <div className="page-wrapper">
          <div className="articles-title">
            <h1 className="letter-b fs-700">Lifestyles</h1>
            <h2 className="letter-s fs-300 upper">Articles</h2>
          </div>
          <div className="breadcrumholder fs-300 letter-s upper">
            <BreadCrums></BreadCrums>
          </div>
          <div className="articles-grid">
            {lifestyles.map((lifestyles) => (
              <div key={lifestyles._id}>
                <LifeStyle lifestyles={lifestyles}></LifeStyle>
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

export default LifeStyleScreen;
