/** @format */

import React from 'react';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import Categories from '../components/Categories';

function Homescreen() {
  return (
    <>
      <Navigation></Navigation>
      <Hero></Hero>
      <Categories></Categories>
      <Footer></Footer>
    </>
  );
}

export default Homescreen;
