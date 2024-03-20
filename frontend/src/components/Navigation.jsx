/** @format */
import '../styles/header.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
  const [isActive, setActive] = useState(true);
  const navToggle = () => {
    setActive(!isActive);
    window.scrollTo(0, 0);
  };

  return (
    <>
      <div className={isActive ? 'navigation' : 'navigation-open'}>
        <div className="nav-wrapper">
          <div className="closing-container">
            <h1
              className="white fs-500 ff-serif letter-s close-btn underline-r l-2"
              onClick={navToggle}>
              Close
            </h1>
          </div>
          <div className="nav-center">
            <ol className="nav-list fs-serif letter-b fs-800 dark-white">
              <Link to="/About">
                <li
                  onClick={navToggle}
                  className={
                    isActive
                      ? 'nav-links-close underline-r l-1'
                      : 'nav-links underline-r l-1'
                  }>
                  <span className="white">My Story</span>
                </li>
              </Link>
              <li
                onClick={navToggle}
                className={
                  isActive
                    ? 'nav-links-close underline-r l-1'
                    : 'nav-links underline-r l-1'
                }>
                <Link to="/Gallery">
                  <span className="white">Gallery</span>
                </Link>
              </li>
              <li
                onClick={navToggle}
                className={
                  isActive
                    ? 'nav-links-close underline-r l-1'
                    : 'nav-links underline-r l-1'
                }>
                <Link to="/Articles">
                  <span className="white">Articles</span>
                </Link>
              </li>
              <li
                onClick={navToggle}
                className={
                  isActive
                    ? 'nav-links-close underline-r l-1'
                    : 'nav-links underline-r l-1'
                }>
                <Link to="/Shop">
                  <span className="white">Shop</span>
                </Link>
              </li>
              <Link to="/Contact">
                <li
                  onClick={navToggle}
                  className={
                    isActive
                      ? 'nav-links-close underline-r l-1'
                      : 'nav-links underline-r l-1'
                  }>
                  <span className="white">Contact</span>
                </li>
              </Link>
            </ol>
          </div>
        </div>
      </div>
      <div className="page-wrapper">
        <div className="nav-container white">
          <Link to="/">
            <div className="brand fs-500 ff-serif l-2 underline-r">
              <span className="white">JASON</span>
            </div>
          </Link>
          <div className="menu fs-500 letter-m underline-r l-2">
            <span className="menu" onClick={navToggle}>
              MENU
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navigation;
