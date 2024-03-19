/** @format */
import { useEffect } from 'react';
import React from 'react';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';
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
      <Navigation></Navigation>
      <Hero></Hero>
      <Categories></Categories>
      <Gallery></Gallery>
      <Testimonials></Testimonials>
      <BlogIntro></BlogIntro>
      <Footer></Footer>
    </>
  );
}

export default Homescreen;
