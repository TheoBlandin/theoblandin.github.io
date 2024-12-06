import React from 'react';
import './Navbar.css';
import { Container, Row } from 'react-grid-system';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { ReactComponent as Menu } from './../assets/menu.svg'
import { ReactComponent as Close } from './../assets/close.svg'

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

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
        <nav role="navigation" className={`navigation ${menuOpen ? 'open' : ''} ${scrolled ? 'scrolled' : ''}`}>
            <Container>
                <Row className="desktop-nav">
                    <Link to="/" className={`nav-link ${scrolled ? 'scrolled' : ''}`}>Accueil</Link>
                    <Link to="/" className={`nav-link ${scrolled ? 'scrolled' : ''}`}>Mes projets</Link>
                    <Link to="/about" className={`nav-link ${scrolled ? 'scrolled' : ''}`}>À propos</Link>
                </Row>
            </Container>
            <div className="mobile-nav">
                <button className="burger-menu" onClick={toggleMenu} aria-label="Ouvrir le menu de navigation">
                    {menuOpen ?
                        <Close style={{ fill: 'var(--light)', width: '32px', height: '32px' }} />
                        : <Menu style={{ fill: scrolled ? 'var(--light)' : 'var(--dark)', width: '32px', height: '32px' }} />}
                </button>
                <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
                    <Link to="/" className="nav-link" onClick={() => setMenuOpen(false)}>Accueil</Link>
                    <Link to="/" className="nav-link" onClick={() => setMenuOpen(false)}>Mes projets</Link>
                    <Link to="/about" className="nav-link" onClick={() => setMenuOpen(false)}>À propos</Link>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
