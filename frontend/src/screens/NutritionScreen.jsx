/** @format */
import '../styles/articles.css';
import React, {useEffect} from 'react';

function NutritionScreen() {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import(`locomotive-scroll`)).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);
  return <div className='articles'>NutritionScreen</div>;
}

export default NutritionScreen;
