/** @format */

import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import App from './App.jsx';
import './global.css';
import './styles/animations.css';

import Homescreen from './screens/HomeScreen.jsx';
import AboutScreen from './screens/AboutScreen.jsx';
import ContactScreen from './screens/ContactScreen.jsx';
import GalleryScreen from './screens/GalleryScreen.jsx';
import ArticleScreen from './screens/ArticleScreen.jsx';
import ShopScreen from './screens/ShopScreen.jsx';
import LifeStyleScreen from './screens/LifeStyleScreen.jsx';
import FitnessScreen from './screens/FitnessScreen.jsx';
import NutritionScreen from './screens/NutritionScreen.jsx';
import NotFound from './screens/NotFoundScreen.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} path="/" element={<Homescreen />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/About" element={<AboutScreen />} />
      <Route path="/Contact" element={<ContactScreen />} />
      <Route path="/Gallery" element={<GalleryScreen />} />
      <Route path="/Articles" element={<ArticleScreen />} />
      <Route path="/Shop" element={<ShopScreen />} />
      <Route path="/Lifestyle" element={<LifeStyleScreen />} />
      <Route path="/Fitness" element={<FitnessScreen />} />
      <Route path="/Nutrition" element={<NutritionScreen />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
