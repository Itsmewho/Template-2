/** @format */

import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import './global.css';
import './styles/animations.css';

const App = () => {
  return (
    <>
      <Header></Header>
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
