/** @format */
import '../styles/shop.css';
import { useEffect, useState } from 'react';
import Contact from '../components/Contact';
import axios from 'axios';
import Products from '../components/Products';

function ShopScreen() {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import('locomotive-scroll')).default;
      new LocomotiveScroll();
    })();
  }, []);
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  const [products, setproducts] = useState([]);

  useEffect(() => {
    const fetchShop = async () => {
      const { data } = await axios.get('/api/products');
      setproducts(data);
    };
    fetchShop();
  }, []);

  return (
    <>
      <section data-scroll-section>
        <div className="page-wrapper">
          <div className="articles-title">
            <h1 className="letter-b fs-700">Shop</h1>
            <h2 className="letter-s fs-300 upper">Products</h2>
          </div>
          <div className="articles-grid padding-products">
            {products.map((products) => (
              <div key={products._id}>
                <Products products={products}></Products>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section>
        <div className="page-wrapper">
          <div className="proposal">
            <h1 className="prop-title ff-serif letter-b fs-700 underline-r fw-400">
              Attention <span className="accent">Sport Suppliers</span>!
            </h1>
            <div className="prop-grid">
              <div className="border-grid">
                <h2 className="subtitle fs-600 letter-b fw-400">
                  Are you <span className="accent">ready</span> to expand?
                </h2>
                <p className="prop-p ff-sans letter-s fs-500">
                  Streamline your expansion? Partner with Jason! As a leading
                  fitness website, we're seeking
                  <span className="accent"> premium sports supplement </span>
                  suppliers who can meet the demands of our health-conscious
                  community. Our platform attracts thousands of
                  <span className="accent"> fitness enthusiasts</span> eager to
                  optimize their performance and achieve their goals. By joining
                  forces with us, you'll gain access to a targeted audience
                  actively seeking high-quality supplements.
                </p>
                <h3 className="subtitle fs-600 letter-b fw-400">
                  Don't miss this <span className="accent">opportunity</span>!
                </h3>
                <p className="prop-p ff-sans letter-s fs-500">
                  Elevate your brand and increase your
                  <span className="accent"> sales</span>. Let's collaborate to
                  provide top-notch supplements and exceptional service to
                  fitness enthusiasts worldwide. Reach out today to explore how
                  we can{' '}
                  <span className="accent">
                    work together for mutual success
                  </span>
                  !
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="page-wrapper margin-bottom">
          <Contact></Contact>
        </div>
      </section>
    </>
  );
}

export default ShopScreen;
