import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer'
import About from './pages/about'
import Home from './pages/index'
import { setConfiguration } from 'react-grid-system';
import "./fonts/MADE_Sunflower.otf";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

setConfiguration({
  breakpoints: [320, 480, 768, 1024, 1280, 1440], // sm, md, lg, xl, xxl, xxxl 
  containerWidths: [300, 450, 738, 984, 1180, 1300], 
  gutterWidth: 10,
  gridColumns: 12,
});

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
