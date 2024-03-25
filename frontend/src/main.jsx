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
import { Loader } from './components/Loader';
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
import CartScreen from './screens/CartScreen.jsx';
import LogInScreen from './screens/LogInScreen.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} path="/" element={<Homescreen />} loader={Loader} />
      <Route path="*" element={<NotFound />}  loader={Loader}/>
      <Route path="/About" element={<AboutScreen />} loader={Loader} />
      <Route path="/Contact" element={<ContactScreen />} loader={Loader}/>
      <Route path="/Gallery" element={<GalleryScreen />}loader={Loader} />
      <Route path="/Articles" element={<ArticleScreen />}loader={Loader} />
      <Route path="/Shop" element={<ShopScreen />}loader={Loader} />
      <Route path="/Lifestyle" element={<LifeStyleScreen />}loader={Loader} />
      <Route path="/Fitness" element={<FitnessScreen />}loader={Loader} />
      <Route path="/Nutrition" element={<NutritionScreen />}loader={Loader} />
      <Route path="/Cart" element={<CartScreen />}loader={Loader} />
      <Route path="/Login" element={<LogInScreen />}loader={Loader} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
