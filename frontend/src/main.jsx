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
import LifeStyleDetail from './Details/LifeStyleDetail.jsx';
import FitnessScreen from './screens/FitnessScreen.jsx';
import FitnessDetail from './Details/FitnessDetail.jsx';
import NutritionScreen from './screens/NutritionScreen.jsx';
import NutritionDetail from './Details/NutritionDetail.jsx';
import NotFound from './screens/NotFoundScreen.jsx';
import CartScreen from './screens/CartScreen.jsx';
import LogInScreen from './screens/LogInScreen.jsx';
import ResearchDetail from './Details/ResearchDetail.jsx';
import ResearchScreen from './screens/ResearchScreen.jsx';
import RecipesDetail from './Details/RecipesDetail.jsx';
import RecipesScreen from './screens/RecipesScreen.jsx';
import WorkoutDetail from './Details/WorkoutDetail.jsx';
import WorkoutScreen from './screens/WorkoutScreen.jsx';
import MuscleDetail from './Details/MuscleDetail.jsx';
import MuscleScreen from './screens/MuscleScreen.jsx';
import ProductsDetail from './Details/ProductDetail.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} path="/" element={<Homescreen />} loader={Loader} />
      <Route path="*" element={<NotFound />} loader={Loader} />
      <Route path="/About" element={<AboutScreen />} loader={Loader} />
      <Route path="/Contact" element={<ContactScreen />} loader={Loader} />
      <Route path="/Gallery" element={<GalleryScreen />} loader={Loader} />
      <Route path="/Articles" element={<ArticleScreen />} loader={Loader} />
      <Route path="/Shop" element={<ShopScreen />} loader={Loader} />
      <Route
        path="Shop/Products/:id"
        element={<ProductsDetail />}
        loader={Loader}
      />
      <Route
        path="Articles/Lifestyle"
        element={<LifeStyleScreen />}
        loader={Loader}
      />
      <Route
        path="Articles/Lifestyle/:id"
        element={<LifeStyleDetail />}
        loader={Loader}
      />
      <Route
        path="Articles/Fitness"
        element={<FitnessScreen />}
        loader={Loader}
      />
      <Route
        path="Articles/Fitness/:id"
        element={<FitnessDetail />}
        loader={Loader}
      />
      <Route
        path="Articles/Nutrition"
        element={<NutritionScreen />}
        loader={Loader}
      />
      <Route
        path="Articles/Nutrition/:id"
        element={<NutritionDetail />}
        loader={Loader}
      />
      <Route
        path="Articles/Research"
        element={<ResearchScreen />}
        loader={Loader}
      />
      <Route
        path="Articles/Research/:id"
        element={<ResearchDetail />}
        loader={Loader}
      />
      <Route
        path="Articles/Recipes"
        element={<RecipesScreen />}
        loader={Loader}
      />
      <Route
        path="Articles/Recipes/:id"
        element={<RecipesDetail />}
        loader={Loader}
      />
      <Route
        path="Articles/Workouts"
        element={<WorkoutScreen />}
        loader={Loader}
      />
      <Route
        path="Articles/Workouts/:id"
        element={<WorkoutDetail />}
        loader={Loader}
      />
      <Route
        path="Articles/Muscle"
        element={<MuscleScreen />}
        loader={Loader}
      />
      <Route
        path="Articles/Muscle/:id"
        element={<MuscleDetail />}
        loader={Loader}
      />
      <Route path="/Cart" element={<CartScreen />} loader={Loader} />
      <Route path="/Login" element={<LogInScreen />} loader={Loader} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
