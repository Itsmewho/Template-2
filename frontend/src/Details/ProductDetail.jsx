/** @format */

import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import Slider from '../components/Slider';
import Tab from '../components/Tab';
import '../styles/shop.css';

function ProductDetail() {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import('locomotive-scroll')).default;
      new LocomotiveScroll();
    })();
  }, []);
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  const { id: productsId } = useParams();
  const [products, setproducts] = useState([]);

  useEffect(() => {
    const products = async () => {
      const { data } = await axios.get(`/api/products/${productsId}`);
      setproducts(data);
    };
    products();
  }, [productsId]);

  const image = `${products.image}`;
  const image1 = `${products.image1}`;
  const image2 = `${products.image2}`;

  const iamgeArry = [image, image1, image2];

  return (
    <>
      <div className="page-wrapper">
        <div className="shop-grid">
          <div className="left-product">
            <div className="shop-slider-grid">
              <div className="image-shop">
                <Slider imageURLs={iamgeArry}></Slider>
              </div>
              <div className="product-description fs-400 ">
                <p>{products.shortdescription}</p>
              </div>
            </div>
            <div className="tabs-container">
              <Tab products={products}></Tab>
            </div>
          </div>
          <div className="right-product">
            <div className="sticky-card"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductDetail;
