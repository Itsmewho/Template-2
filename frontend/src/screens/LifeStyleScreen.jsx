/** @format */
import '../styles/articles.css';
import React, {useEffect} from 'react';


function LifeStyleScreen() {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import(`locomotive-scroll`)).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);
  return <div className="articles">LifeStyleScreen</div>;
}

export default LifeStyleScreen;
