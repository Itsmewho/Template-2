/** @format */

import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function BreadCrums() {
  const location = useLocation();
  console.log(location);
  let currentLink = [];

  const crumbs = location.pathname
    .split('/')
    .filter((crumb) => crumb !== '')
    .map((crumb) => {
      currentLink.push(`/${crumb}`);

      return (
        <div className="crumb" key={crumb}>
          <Link to={currentLink.join('')} className="dark-white crumbpy">
            {crumb}
          </Link>
        </div>
      );
    });

  return (
    <>
      <div>{crumbs}</div>
    </>
  );
}

export default BreadCrums;
