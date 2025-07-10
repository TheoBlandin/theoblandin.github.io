import React from "react";
import './Footer.css';
import { Container, Row, Col } from 'react-grid-system';
import { Link } from 'react-router-dom';
import { ReactComponent as Download } from './../../assets/icons/download.svg'
import { ReactComponent as LinkedIn } from './../../assets/icons/linkedin.svg'

function Footer() {
    return (
        <footer className="bg-surface py-5">
            <Container>
                <Row justify="between">
                    <Col lg={3} xxl={2} className="col-footer d-flex flex-column first-col">
                        <span>Théo Blandin ©2024</span>
                        <Link to="/legals"><span>Mentions légales</span></Link>
                    </Col>
                    <Col lg={3} xxl={2} className="col-footer d-flex flex-column">
                        <a href="https://www.linkedin.com/in/th%C3%A9o-blandin-b71a15258/"
                            aria-label="Visitez mon profil LinkedIn" target="_blank" rel="noopener noreferrer">
                            <div className="d-flex flex-row align-items-center gap-3">
                                <LinkedIn className="icon-M icon-dark" />
                                <span>LinkedIn</span>
                            </div>
                        </a>
                        <a href="/assets/CV_Theo_Blandin.pdf" aria-label="Visualiser mon CV"
                            target="_blank" rel="noopener noreferrer">
                            <div className="d-flex flex-row align-items-center gap-3">
                                <Download className="icon-M icon-dark" />
                                <span>CV</span>
                            </div>
                        </a>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer