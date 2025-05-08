import React from 'react';
import './Navbar.css';
import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { ReactComponent as Menu } from './../../assets/icons/menu.svg'
import { ReactComponent as Close } from './../../assets/icons/close.svg'

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [aboutPage, setAboutPage] = useState(false);

    const location = useLocation();

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    useEffect(() => {
        console.log(location.pathname)
        if (location.pathname == '/about') {
            setAboutPage(true);
        }
        else {
            setAboutPage(false);
        }
    }, [location]);

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

    return (
        <nav role="navigation" className={`navigation ${menuOpen ? 'open' : ''} ${scrolled || aboutPage ? 'scrolled' : ''}`}>
            <div className="desktop-nav d-flex px-4 gap-5 justify-content-right">
                <Link to="/" className={`nav-link ${scrolled || aboutPage ? 'scrolled' : ''}`}>Accueil</Link>
                <a href="/#projects" className={`nav-link ${scrolled || aboutPage ? 'scrolled' : ''}`}>Mes projets</a>
                <Link to="/about" className={`nav-link ${scrolled || aboutPage ? 'scrolled' : ''}`}>À propos</Link>
            </div>
            <div className="mobile-nav w-100 px-3">
                <button className="burger-menu" onClick={toggleMenu} aria-label="Ouvrir le menu de navigation">
                    {menuOpen ?
                        <Close style={{ fill: 'var(--light)', width: '32px', height: '32px' }} />
                        : <Menu style={{ fill: scrolled || aboutPage ? 'var(--light)' : 'var(--dark)', width: '32px', height: '32px' }} />}
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
