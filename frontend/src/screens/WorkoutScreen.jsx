/** @format */

import '../styles/articles.css';
import React, { useEffect, useState } from 'react';
import BreadCrums from '../components/BreadCrums';
import axios from 'axios';
import Workouts from '../components/Workouts';

function WorkoutScreen() {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import('locomotive-scroll')).default;
      new LocomotiveScroll();
    })();
  }, []);
  const [workoutBlog, setworkoutBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      const { data } = await axios.get('/api/workouts');
      setworkoutBlogs(data);
    };
    fetchBlogs();
  }, []);

  return (
    <>
      <section>
        <div className="page-wrapper">
          <div className="articles-title">
            <h1 className="letter-b fs-700">Fitness</h1>
            <h2 className="letter-s fs-300 upper">Articles</h2>
          </div>
          <div className="breadcrumholder fs-300 letter-s upper">
            <BreadCrums></BreadCrums>
          </div>
          <div className="articles-grid">
            {workoutBlog.map((workoutBlog) => (
              <div key={workoutBlog._id}>
                <Workouts workoutBlog={workoutBlog}></Workouts>
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

export default WorkoutScreen;
