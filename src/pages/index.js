import React from "react";
import './index.css';
import { Container, Row, Col } from 'react-grid-system';
import Picture from './../assets/picture.svg';
import ArrowMore from './../assets/arrow-down.svg'
import ArrowSelf from './../assets/arrow-self.svg'
import ArrowPoulpy from './../assets/arrow-poulpy.svg'
import { ReactComponent as Cloud } from './../assets/cloud.svg'
import CardProject from './../components/card-project/CardProject'
import projects from './../assets/projects.json';


export default function Home() {
    const projectNames = Object.keys(projects);

    return (
        <>
            <div className="hero-banner">
                <Container>
                    <Cloud className={`cloud cloud-1`} />
                    <Cloud className={`cloud cloud-2`} />
                    <Cloud className={`cloud cloud-3`} />
                    <Cloud className={`cloud cloud-4`} />
                    <Row>
                        <Col xl={6}>
                            <div className="hello">
                                <h1 className="mr-3">
                                    Salut, moi c'est Théo&nbsp;!
                                </h1>
                                <h2>
                                    UX Designer Rennais spécialisé en accessibilité numérique
                                </h2>
                            </div>
                        </Col>
                        <Col xl={6} style={{ textAlign: 'center' }}>
                            <img className="picture" src={Picture} alt="Auto-portrait dessiné numériquement" />
                        </Col>
                    </Row>
                    <Row justify="center">
                        <a href="#projects" className="scroll-link">
                            <img src={ArrowMore} alt="Scroll" />
                        </a>
                    </Row>

                    <img className="arrow-self" src={ArrowSelf} alt="" />
                    <img className="arrow-poulpy" src={ArrowPoulpy} alt="" />
                    <span className="lead name-poulpy">Poulpy</span>
                </Container>
            </div>

            <div className="my-5" id="projects" style={{ scrollMarginTop: "60px" }}>
                <Container className="mb-5 projects-title">
                    <Row justify="center">
                        <Col xl={10}>
                            <h1>Mes projets</h1>
                        </Col>
                    </Row>
                </Container>
                {projectNames.map(name => (
                    <CardProject project={name} />
                ))}
            </div>
        </>
    )
}