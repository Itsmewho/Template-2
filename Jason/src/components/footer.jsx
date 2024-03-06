/** @format */
import '../styles/footer.css';
import Megnet from './megnet';
import MegnetTwo from './megnetTwo';

function Footer() {
  return (
    <div className="f-container">
      <div className="footer-top">
        <div className="quote p-big ff-serif letter-b fs-500">
          Transform Your Body!
        </div>
        <div className="footer-p">
          <p className="top-quote ff-sans l-1 letter-s fs-600 fw-100">
            Unleash Your Passion! with our premium and expert guidance. Embrace
            the journey with us today!
          </p>
        </div>
        <div className="grid-row">
          <Megnet>
            <div className="btn-container">
              <div className="outer-btn">
                <MegnetTwo>
                  <a className="btn-link">
                    <MegnetTwo>
                      <span className="btn-text">Go Shop</span>
                    </MegnetTwo>
                  </a>
                </MegnetTwo>
              </div>
            </div>
          </Megnet>
        </div>
      </div>
      <div className="line-container">
        <div className="line-1"></div>
        <div className="line"></div>
      </div>
      <div className="f-grid">
        <div className="grid-row">
          <a
            href="#"
            className=" underline-r dark-white addres letter-b fs-800 upper ff-serif">
            <div className="one">J</div>
            <div className="two">A</div>
            <div className="three">S</div>
            <div className="four">O</div>
            <div className="five">N</div>
          </a>
        </div>
        <div className="grid-row">
          <ul className="links ul-2 fs-400 upper letter-m l-4">
            <li className="link-items underline-r">About</li>
            <li className="link-items underline-r">Gallery</li>
            <li className="link-items underline-r">Articles</li>
            <li className="link-items underline-r">Shop</li>
            <li className="link-items underline-r">Contact</li>
          </ul>
        </div>
        <div className="grid-row">
          <ul className="links fs-400 upper letter-m l-4">
            <li className="link-items li-2 underline-r">Instagram</li>
            <li className="link-items li-2 underline-r">TikTok</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
