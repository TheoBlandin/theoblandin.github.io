import { Routes, Route, useLocation } from "react-router-dom";

import { setConfiguration } from "react-grid-system";

import "./App.css";

import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import { useEffect } from "react";
import Footer from "./components/footer/Footer";
import MangerDeSaison from "./pages/mangerDeSaison/MangerDeSaison";

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
          <Route path="*" element={<h1>Page non trouvée</h1>} />{" "}
          {/* Page 404 à faire */}
          <Route path="/" element={<Home />} />
          <Route path="/manger_de_saison" element={<MangerDeSaison />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
