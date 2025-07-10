import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer'
import About from './pages/about/about'
import Home from './pages/home/home'
import MangerDeSaison from './pages/manger-de-saison/manger-de-saison'
import SWAP from './pages/swap/swap'
import BorneOrange from './pages/borne-orange/borne-orange'
import Legals from './pages/legals/legals'
import { setConfiguration } from 'react-grid-system';
import "./fonts/MADE_Sunflower.otf";
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { useEffect } from "react";


setConfiguration({
  breakpoints: [360, 480, 768, 1024, 1280, 1440], // sm, md, lg, xl, xxl, xxxl 
  containerWidths: [350, 450, 738, 984, 1180, 1300],
  gutterWidth: 20,
  gridColumns: 12,
});

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) { // anchor links
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
}

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <ScrollToTop />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/manger-de-saison" element={<MangerDeSaison />} />
            <Route path="/swap" element={<SWAP />} />
            <Route path="/borne-orange" element={<BorneOrange />} />
            <Route path="/legals" element={<Legals />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
