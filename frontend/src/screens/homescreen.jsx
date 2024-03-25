/** @format */
import React, {useEffect} from 'react';
import Hero from '../components/Hero';
import Categories from '../components/Categories';
import Gallery from '../components/Gallery';
import BlogIntro from '../components/BlogIntro';
import Testimonials from '../components/Testimonials';

function Homescreen() {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import(`locomotive-scroll`)).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);

  return (
    <>
    
      <Hero></Hero>
      <Categories></Categories>
      <Gallery></Gallery>
      <Testimonials></Testimonials>
      <BlogIntro></BlogIntro>
    </>
  );
}

export default Homescreen;
