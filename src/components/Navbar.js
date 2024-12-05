import React from 'react';
import './Navbar.css';
import { Container, Row, Col } from 'react-grid-system';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav role="navigation">
            <Container>
                <Row>
                    <Col md={1}>
                        <Link to="/" className="nav-link">Accueil</Link>
                    </Col>
                    <Col md={1}>
                        <Link to="/" className="nav-link">Mes projets</Link>
                    </Col>
                    <Col md={1}>
                        <Link to="/about" className="nav-link">À propos</Link>
                    </Col>
                </Row>
            </Container>
        </nav>
    );
}

export default Navbar;
