import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { X, List } from "@phosphor-icons/react";

import './Navbar.css';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false); // mobile menu open
  const [scrolled, setScrolled] = useState(false); // detect scroll for changing background
  const [solidNavbar, setSolidNavbar] = useState(false); // solid navbar = dark background, when user is on specifid pages

  const location = useLocation(); // current user location

  // If user scoll more than 50px, navbar background go from transparent to dark color
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Navbar has dark background when user is on specific pages (with no colored header)
  useEffect(() => {
    if (location.pathname == '/about' || location.pathname == '/legals') {
      setSolidNavbar(true);
    }
    else {
      setSolidNavbar(false);
    }
  }, [location]);

  return (
    <nav role="navigation" className={`flex flex-row justify-center navigation ${menuOpen ? 'open' : ''} ${scrolled || solidNavbar ? 'scrolled' : ''}`}>
      <ul className="desktop-nav flex flex-row px-4 gap-8 justify-end w-full max-w-[1440px]">
        <li>
          <Link to="/" className={`nav-link ${scrolled || solidNavbar ? 'scrolled' : ''}`}>Accueil</Link>
        </li>
        <li>
          <a href="/#projects" className={`nav-link ${scrolled || solidNavbar ? 'scrolled' : ''}`}>Mes projets</a>
        </li>
        <li>
          <Link to="/about" className={`nav-link ${scrolled || solidNavbar ? 'scrolled' : ''}`}>À propos</Link>
        </li>
      </ul>
      <div className="mobile-nav justify-end w-full px-2">
        <button
          className="flex flex-col items-center justify-center p-2"
          onClick={() => setMenuOpen(prev => !prev)}
          aria-label="Ouvrir le menu de navigation"
        >
          {menuOpen ?
            <X className="t-inverse" size={32} />
            : <List className={`${scrolled || solidNavbar ? 't-inverse' : 't-default'}`} size={32} />}
        </button>
        <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
          <Link to="/" className="nav-link" onClick={() => setMenuOpen(false)}>Accueil</Link>
          <a href="/#projects" className="nav-link" onClick={() => setMenuOpen(false)}>Mes projets</a>
          <Link to="/about" className="nav-link" onClick={() => setMenuOpen(false)}>À propos</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;