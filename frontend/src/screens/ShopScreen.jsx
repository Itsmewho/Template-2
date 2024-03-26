/** @format */
import '../styles/shop.css';
import React, {useEffect} from 'react';

function ShopScreen() {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import(`locomotive-scroll`)).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  return <div className="shop">ShopScreen</div>;
}

export default ShopScreen;
