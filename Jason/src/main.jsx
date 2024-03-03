import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Stylepage from './screens/stylescreen.jsx'
import './global.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Stylepage />
  </React.StrictMode>,
)
