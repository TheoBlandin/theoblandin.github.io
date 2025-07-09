import React from "react";
import { useEffect } from "react";
import './home.css';
import { Container, Row, Col } from 'react-grid-system';
import Picture from './../../assets/picture.svg';
import ArrowMore from './../../assets/arrow-down.svg'
import ArrowSelf from './../../assets/arrow-self.svg'
import ArrowPoulpy from './../../assets/arrow-poulpy.svg'
import { ReactComponent as Cloud } from './../../assets/cloud.svg'
import CardProject from '../../components/card-project/CardProject'
import projects from './../../assets/data/summary.json';


export default function Home() {
    const projectNames = Object.keys(projects);
    useEffect(() => {
        document.title = "Théo Blandin - Portfolio";
    }, []);

    return (
        <>
            <div className="hero-banner">
                <Container>
                    <Cloud className="position-absolute h-auto cloud-1" />
                    <Cloud className="position-absolute h-auto cloud-2" />
                    <Cloud className="position-absolute h-auto cloud-3" />
                    <Cloud className="position-absolute h-auto cloud-4" />
                    <Row>
                        <Col xl={7} xxl={6}>
                            <div className="h-100 d-flex flex-column justify-content-center gap-2">
                                <h1 className="mr-3">
                                    Salut, moi c'est Théo&nbsp;!
                                </h1>
                                <h2>
                                    UX Designer et Développeur Front-End Rennais spécialisé en accessibilité numérique
                                </h2>
                            </div>
                        </Col>
                        <Col xl={5} xxl={6} style={{ textAlign: 'center' }}>
                            <img className="picture w-100" src={Picture} alt="Auto-portrait dessiné numériquement" />
                        </Col>
                    </Row>
                    <Row justify="center">
                        <a href="#projects" className="scroll-link">
                            <img src={ArrowMore} alt="Scroll" />
                        </a>
                    </Row>

                    <img className="arrow-self position-absolute" src={ArrowSelf} alt="" />
                    <img className="arrow-poulpy position-absolute" src={ArrowPoulpy} alt="" />
                    <span className="lead name-poulpy position-absolute">Poulpy</span>
                </Container>
            </div>

            <div className="my-5" id="projects" style={{ scrollMarginTop: "68px" }}>
                <Container className="mb-5 projects-title">
                    <Row justify="center">
                        <Col xl={10}>
                            <h1>Mes projets</h1>
                        </Col>
                    </Row>
                </Container>
                {projectNames.map((name, index) => (
                    <CardProject key={index} project={name} />
                ))}
            </div>
        </>
    )
}