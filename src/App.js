import './App.css';
import Navbar from './components/Navbar';
import About from './pages/about'
import Home from './pages/index'
import { setConfiguration } from 'react-grid-system';
import "./fonts/MADE_Sunflower.otf";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

setConfiguration({
  breakpoints: [320, 480, 576, 768, 992, 1200, 1600, 1920], // sm, md, lg, xl, xxl, xxxl (ne couvre donc pas 1600 et 1920)
  containerWidths: [300, 440, 540, 720, 960, 1140, 1540, 1800], 
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
      </div>
    </Router>
  );
}

export default App;
