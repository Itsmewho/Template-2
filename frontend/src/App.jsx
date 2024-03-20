/** @format */

import { Outlet } from 'react-router-dom';
import React from 'react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';


const App = () => {
  return (
    <>
      <Navigation></Navigation>
      <main>
        <Outlet></Outlet>
      </main>
      <Footer></Footer>
    </>
  );
};

export default App;
