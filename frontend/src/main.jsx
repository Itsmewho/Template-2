/** @format */

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import Homescreen from './screens/homescreen.jsx';
import './global.css';
import "./styles/animations.css"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Homescreen></Homescreen>
  </React.StrictMode>
);