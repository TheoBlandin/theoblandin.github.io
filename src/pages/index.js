import React from "react";
import './index.css';
import { Container, Row, Col } from 'react-grid-system';
import Picture from "./../assets/picture.svg";
import ArrowMore from './../assets/arrow-down.svg'
import ArrowSelf from './../assets/arrow-self.svg'
import ArrowPoulpy from './../assets/arrow-poulpy.svg'

export default function Home() {
    return (
        <>
            <div className="hero-banner">
                <Container>
                    <Row>
                        {/* <Col xxl={1} debug></Col> */}
                        <Col xxl={6} debug>
                            <div className="hello">
                                <h1 className="mr-3">
                                    Salut, moi c'est Théo !
                                </h1>
                                <h2>
                                    UX Designer Rennais spécialisé en accessibilité numérique
                                </h2>
                            </div>
                        </Col>
                        <Col xxl={6} debug>
                            <img className="picture" src={Picture} alt="Auto-portrait dessiné numériquement" />
                        </Col>
                    </Row>
                    <a>
                        <img src={ArrowMore} alt="Scroll" />
                    </a>
                    <img className="arrow-self" src={ArrowSelf} alt="" />
                    <img className="arrow-poulpy" src={ArrowPoulpy} alt="" />
                    <span className="lead name-poulpy">Poulpy</span>
                </Container>
            </div>
        </>
    )
}