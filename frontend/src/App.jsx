/** @format */

import { Outlet } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import './global.css';
import './styles/animations.css';

const App = () => {
  return (
    <>
      <Navigation></Navigation>
      <main>
        <div>
          <Outlet></Outlet>
        </div>
      </main>
      <Footer></Footer>
    </>
  );
};

export default App;
