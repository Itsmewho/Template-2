/** @format */
import '../styles/shop.css';
import { useEffect } from 'react';

function ShopScreen() {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import('locomotive-scroll')).default;
      new LocomotiveScroll();
    })();
  }, []);

  return <div className="shop">ShopScreen</div>;
}

export default ShopScreen;
