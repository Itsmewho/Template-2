/** @format */
import Contact from '../components/Contact';
import '../styles/contact.css';
import { useEffect } from 'react';

function ContactScreen() {

  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import('locomotive-scroll')).default;
      new LocomotiveScroll();
    })();
  }, []);

  return (
    <>
      <section>
        <Contact></Contact>
      </section>
    </>
  );
}

export default ContactScreen;
