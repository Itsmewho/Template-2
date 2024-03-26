/** @format */
import '../styles/articles.css';
import React, { useEffect, useState } from 'react';
import BreadCrums from '../components/BreadCrums';
import axios from 'axios';
import Nutrition from '../components/Nutrition';

function NutritionScreen() {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import(`locomotive-scroll`)).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  const [nutritions, setNutritions] = useState([]);

  useEffect(() => {
    const fetchNutrition = async () => {
      const { data } = await axios.get('/api/nutritions');
      setNutritions(data);
    };
    fetchNutrition();
  }, []);

  return (
    <>
      <section>
        <div className="page-wrapper">
          <div className="articles-title">
            <h1 className="letter-b fs-700">Nutrition</h1>
            <h2 className="letter-s fs-300 upper">Articles</h2>
          </div>
          <div className="breadcrumholder fs-300 letter-s upper">
            <BreadCrums></BreadCrums>
          </div>
          <div className="articles-grid">
            {nutritions.map((nutritions) => (
              <div key={nutritions._id}>
                <Nutrition nutritions={nutritions}></Nutrition>
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

export default NutritionScreen;
