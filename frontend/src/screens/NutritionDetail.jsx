/** @format */

import React, { useEffect } from 'react';

function NutritionDetail() {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import(`locomotive-scroll`)).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);
  return <div>NutritionDetail</div>;
}

export default NutritionDetail;
