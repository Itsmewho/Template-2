/** @format */

import React, { useEffect } from 'react';

function CartScreen() {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import('locomotive-scroll')).default;
      new LocomotiveScroll();
    })();
  }, []);
  
  return <div>CartScreen</div>;
}

export default CartScreen;
