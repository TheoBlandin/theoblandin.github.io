import { Routes, Route, useLocation } from "react-router-dom";

import { setConfiguration } from "react-grid-system";

import "./App.css";

import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import { useEffect } from "react";
import Footer from "./components/footer/Footer";
import MangerDeSaison from "./pages/MangerDeSaison";
import Swap from "./pages/Swap";
import SecuriteMobile from "./pages/SecuriteMobile";
import Proficlais from "./pages/Proficlais";
import About from "./pages/about/About";
import Page404 from "./pages/Page404";
import Legals from "./pages/Legals";
import A4LL from "./pages/A4LL";

setConfiguration({
  breakpoints: [360, 480, 768, 1024, 1280, 1440], // sm, md, lg, xl, xxl, xxxl
  containerWidths: [350, 450, 738, 984, 1180, 1300],
  gutterWidth: 20,
  gridColumns: 12,
});

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // anchor links
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
}

function App() {
  return (
    <>
      <Navbar />
      <ScrollToTop />
      <main className="flex-grow">
        <Routes>
          <Route path="*" element={<Page404 /> } />
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/legals" element={<Legals />} />
          <Route path="/manger_de_saison" element={<MangerDeSaison />} />
          <Route path="/swap" element={<Swap />} />
          <Route path="/securite_mobile" element={<SecuriteMobile />} />
          <Route path="/proficlais" element={<Proficlais />} />
          <Route path="/a4ll" element={<A4LL />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
