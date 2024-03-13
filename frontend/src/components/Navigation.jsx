/** @format */
import '../styles/header.css';
import { useState } from 'react';

function Navigation() {
  const [isActive, setActive] = useState(true);
  const navToggle = () => {
    setActive(!isActive);
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
            <ol className="nav-list fs-serif letter-b fs-700 dark-white">
              <li
                className={
                  isActive
                    ? 'nav-links-close underline-r l-1'
                    : 'nav-links underline-r l-1'
                }>
               My Story
              </li>
              <li
                className={
                  isActive
                    ? 'nav-links-close underline-r l-1'
                    : 'nav-links underline-r l-1'
                }>
                Gallery
              </li>
              <li
                className={
                  isActive
                    ? 'nav-links-close underline-r l-1'
                    : 'nav-links underline-r l-1'
                }>
                Articles
              </li>
              <li
                className={
                  isActive
                    ? 'nav-links-close underline-r l-1'
                    : 'nav-links underline-r l-1'
                }>
                Shop
              </li>
              <li
                className={
                  isActive
                    ? 'nav-links-close underline-r l-1'
                    : 'nav-links underline-r l-1'
                }>
                Contact
              </li>
            </ol>
          </div>
        </div>
      </div>
      <div className="page-wrapper">
        <div className="nav-container white">
          <div className="brand fs-500 ff-serif l-2 underline-r">
            <span>JASON</span>
          </div>
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
