/** @format */
import '../styles/footer.css';
import Megnet from './Megnet';
import MegnetTwo from './MegnetTwo';

function Footer() {
  return (
    <div className="f-container" data-scroll-section>
      <div
        className="footer-top"
        data-scroll
        data-scroll-class="animate"
        data-scroll-repeat="true">
        <h1 className="quote p-big ff-serif letter-b fs-500">
          Transform Your Body!
        </h1>
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
      <div className="f-grid" data-scroll-section>
        <div className="grid-row">
          <a
            href="#"
            className=" underline-r dark-white addres letter-b fs-800 upper ff-serif">
            <div
              className="one"
              data-scroll
              data-scroll-class="a-one"
              data-scroll-repeat="true">
              J
            </div>
            <div
              className="two"
              data-scroll
              data-scroll-class="a-two"
              data-scroll-repeat="true">
              A
            </div>
            <div
              className="three"
              data-scroll
              data-scroll-class="a-three"
              data-scroll-repeat="true">
              S
            </div>
            <div
              className="four"
              data-scroll
              data-scroll-class="a-four"
              data-scroll-repeat="true">
              O
            </div>
            <div
              className="five"
              data-scroll
              data-scroll-class="a-five"
              data-scroll-repeat="true">
              N
            </div>
          </a>
        </div>
        <div className="grid-row">
          <ul
            className="links ul-2 fs-400 upper letter-m l-4"
            data-scroll
            data-scroll-class="slide-in"
            data-scroll-repeat="true">
            <li className="link-items underline-r">About</li>
            <li className="link-items underline-r">Gallery</li>
            <li className="link-items underline-r">Articles</li>
            <li className="link-items underline-r">Shop</li>
            <li className="link-items underline-r">Contact</li>
          </ul>
        </div>
        <div className="grid-row">
          <ul
            className="links fs-400 upper letter-m l-4"
            data-scroll
            data-scroll-class="li-2"
            data-scroll-repeat="true">
            <li className="link-items li-2 underline-r">Instagram</li>
            <li className="link-items li-2 underline-r">TikTok</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
