/** @format */
import { useEffect } from 'react';

function LogInScreen() {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import('locomotive-scroll')).default;
      new LocomotiveScroll();
    })();
  }, []);

  return <div>LogInScreen</div>;
}

export default LogInScreen;
