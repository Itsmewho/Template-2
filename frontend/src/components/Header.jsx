/** @format */
import '../styles/header.css';
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import gsap from 'gsap';

function Header() {
  const [isActive, setActive] = useState(true);
  const navToggle = () => {
    setActive(!isActive);
    window.scrollTo(0, 0);
  };
  const location = useLocation();
  useEffect(() => {
    gsap.fromTo('.page-wrapper', { opacity: 0 }, { opacity: 1 });
  }, [location]);

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
            <ol className="nav-list fs-serif letter-b fs-700 dark-white">
              <li
                onClick={navToggle}
                className={
                  isActive
                    ? 'nav-links-close underline-r l-1'
                    : 'nav-links underline-r l-1'
                }>
                <Link to="/About">
                  <span className="white">My Story</span>
                </Link>
              </li>
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
              <li
                onClick={navToggle}
                className={
                  isActive
                    ? 'nav-links-close underline-r l-1'
                    : 'nav-links underline-r l-1'
                }>
                <Link to="/Contact">
                  <span className="white contact">Contact</span>
                </Link>
              </li>
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
          <div className="menu fs-500 letter-m l-2">
            <span className="menu underline-r" onClick={navToggle}>
              MENU
            </span>
            <Link to={'/Login'} className="icon"></Link>
            <Link to={'/Cart'} className="icon1"></Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
