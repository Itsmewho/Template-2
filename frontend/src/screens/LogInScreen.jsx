/** @format */
import { useEffect } from 'react';

function LogInScreen() {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import(`locomotive-scroll`)).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);

  return <div>LogInScreen</div>;
}

export default LogInScreen;
