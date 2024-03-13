/** @format */
import { useEffect } from 'react';
import React from 'react';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import Categories from '../components/Categories';
import Gallery from '../components/Gallery';

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
      <Footer></Footer>
    </>
  );
}

export default Homescreen;
