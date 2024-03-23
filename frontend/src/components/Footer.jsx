/** @format */
import '../styles/footer.css';
import { Link } from 'react-router-dom';
import Megnet from './Megnet';

function Footer() {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className="f-container">
      <div className="footer-top">
        <h1 className="quote p-big ff-serif letter-b fs-500">
          Transform Your Body!
        </h1>
        <div className="footer-p">
          <p className="top-quote ff-sans l-1 letter-s fs-600 fw-100">
            Unleash Your Passion! with our premium and expert guidance. Embrace
            the journey with us today!
          </p>
        </div>
        <Megnet>
          <div className="grid-row">
            <div className="btn-container">
              <div className="outer-btn">
                <Link to={'/Shop'} className="btn-link" onClick={scrollToTop}>
                  <span className="btn-text">Go Shop</span>
                </Link>
              </div>
            </div>
          </div>
        </Megnet>
      </div>
      <div className="line-container">
        <div className="line-1"></div>
        <div className="line"></div>
      </div>
      <div className="f-grid" data-scroll-section>
        <div className="grid-row">
          <a
            href="#"
            alt="Scroll back to top"
            className=" underline-r dark-white addres letter-b fs-800 upper ff-serif">
            JASON
          </a>
        </div>
        <div className="grid-row">
          <ul
            className="links ul-2 fs-400 upper letter-m l-4">
            <Link to={'/About'} onClick={scrollToTop}>
              <li className="link-items underline-r white">My Story</li>
            </Link>
            <Link to={'/Gallery'} onClick={scrollToTop}>
              <li className="link-items underline-r white">Gallery</li>
            </Link>
            <Link to={'/Articles'} onClick={scrollToTop}>
              <li className="link-items underline-r white">Articles</li>
            </Link>
            <Link to={'/Shop'} onClick={scrollToTop}>
              <li className="link-items underline-r white">Shop</li>
            </Link>
            <Link to={'/Contact'} onClick={scrollToTop}>
              <li className="link-items underline-r white">Contact</li>
            </Link>
          </ul>
        </div>
        <div className="grid-row">
          <ul
            className="links fs-400 upper letter-m l-4">
            <li className="link-items underline-r">Instagram</li>
            <li className="link-items underline-r">TikTok</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
