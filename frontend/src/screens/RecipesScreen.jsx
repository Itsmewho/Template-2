/** @format */

import '../styles/articles.css';
import React, { useEffect, useState } from 'react';
import BreadCrums from '../components/BreadCrums';
import axios from 'axios';
import Recipes from '../components/Recipes';

function RecipesScreen() {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import('locomotive-scroll')).default;
      new LocomotiveScroll();
    })();
  }, []);

  const [recipesBlog, setrecipesBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      const { data } = await axios.get('/api/recipes');
      setrecipesBlogs(data);
    };
    fetchBlogs();
  }, []);

  return (
    <>
      <section>
        <div className="page-wrapper">
          <div className="articles-title">
            <h1 className="letter-b fs-700">Recipes</h1>
            <h2 className="letter-s fs-300 upper">Articles</h2>
          </div>
          <div className="breadcrumholder fs-300 letter-s upper">
            <BreadCrums></BreadCrums>
          </div>
          <div className="articles-grid">
            {recipesBlog.map((recipesBlog) => (
              <div key={recipesBlog._id}>
                <Recipes recipesBlog={recipesBlog}></Recipes>
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

export default RecipesScreen;
