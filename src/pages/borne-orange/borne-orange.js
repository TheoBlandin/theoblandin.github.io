import React from "react";
import './borne-orange.css';
import InfoProject from '../../assets/data/borne-orange.json';
import HeaderProject from "../../components/header_project/HeaderProject";
import PresentationProject from "../../components/presentation-project/PresentationProject";
import Carousel from "../../components/carousel/Carousel";
import Persona from "../../components/persona/Persona";
import Personas from './../../assets/data/personas.json';
import { useEffect } from "react";
import { Container, Row, Col } from 'react-grid-system';
import Part03_Illu01 from './../../assets/illustrations/borne-orange/part03_illu01.png';
// import { ReactComponent as Forward } from './../../assets/icons/forward.svg'
// import { Link } from 'react-router-dom';

export default function BorneOrange() {
    useEffect(() => {
        document.title = "Borne de sécurité mobile - Théo Blandin";
    }, []);

    return (
        <>
            <HeaderProject project={InfoProject}></HeaderProject>

            <div className="my-5 d-flex flex-column gap-5">
                <PresentationProject
                    project={InfoProject}>
                </PresentationProject>

                <Carousel project={InfoProject}></Carousel>

                <Container className="container-explanations d-flex flex-column">
                    <div className="section d-flex flex-column gap-4">
                        <Row justify="center">
                            <Col xl={7} xxl={6}>
                                <div className="section d-flex flex-column gap-4">
                                    <div>
                                        <span className="display-S">01</span>
                                        <h1 style={{ marginTop: '-8px' }}>Cahier des charges</h1>
                                    </div>
                                    <div className="alinea">
                                        <p className="mb-2">L'objectif principal de ce projet de refonte est de concevoir une nouvelle interface destinée au grand public, offrant une expérience utilisateur rapide, autonome, et éducative.</p>

                                        <p className="mb-2">En complément de la refonte de l'interface existante, un site web dédié à l'utilisation sur téléphone doit être développé. Ce site permettra à l'utilisateur d'accéder à des informations supplémentaires et de télécharger un compte-rendu de l'audit.</p>

                                        <p className="mb-2">L'ensemble de l'interface doit être entièrement conforme au Design System d'Orange et disponible en anglais et en français.</p>
                                    </div>
                                </div>
                            </Col>
                            <Col xl={2} xxl={3}></Col>
                        </Row>
                    </div>

                    <div className="section d-flex flex-column gap-4">
                        <Row justify="center">
                            <Col xl={7} xxl={6}>
                                <div className="section d-flex flex-column gap-4">
                                    <div>
                                        <span className="display-S">02</span>
                                        <h1 style={{ marginTop: '-8px' }}>Problématique</h1>
                                    </div>
                                    <div className="alinea">
                                        <p className="mb-2">Pour ce projet, la problématique est la suivante : <b>Comment pourrions-nous inciter les utilisateurs à s'intéresser aux questions de cybersécurité sans créer un sentiment d'alerte ou d'incompréhension ?</b></p>

                                        <p className="mb-2">Derrière cette problématique, on retrouve les notions d'autonomie de l'utilisateur, d'expérience rapide et éducative, et d'un interface destiné au grand public.</p>
                                    </div>
                                </div>
                            </Col>
                            <Col xl={2} xxl={3}></Col>
                        </Row>
                    </div>

                    <div className="section d-flex flex-column gap-4">
                        <Row justify="center">
                            <Col xl={7} xxl={6}>
                                <div className="section d-flex flex-column gap-4">
                                    <div>
                                        <span className="display-S">03</span>
                                        <h1 style={{ marginTop: '-8px' }}>Étude de l'existant</h1>
                                    </div>
                                    <div className="alinea">
                                        <p className="mb-2">L'interface initiale a été analysée section par section pour diviser le travail en étapes. Les points positifs et les axes d'amélioration ont été identifiés pour chaque section, en tenant compte de l'accessibilité, de la pertinence des informations pour un utilisateur non technique, de leur clarté, et de l'ergonomie.</p>

                                        <p className="mb-2">Cette analyse a ensuite été présentée à l'équipe afin d'initier un travail d'idéation pour la suite du processus de création.</p>
                                    </div>
                                </div>
                            </Col>
                            <Col xl={2} xxl={3}></Col>
                        </Row>
                        <Row justify="center">
                            <Col xl={9} className="d-flex flex-column align-items-center gap-2">
                                <img
                                    src={Part03_Illu01}
                                    alt="Interface initiale de la borne"
                                    className="w-100"
                                />
                                <span aria-hidden="true" className="small">
                                    Interface initiale de la borne
                                </span>
                            </Col>
                        </Row>
                    </div>

                    <div className="section d-flex flex-column gap-4">
                        <Row justify="center">
                            <Col xl={7} xxl={6}>
                                <div className="section d-flex flex-column gap-4">
                                    <div>
                                        <span className="display-S">04</span>
                                        <h1 style={{ marginTop: '-8px' }}>Benchmark</h1>
                                    </div>
                                    <div className="alinea">
                                        <p className="mb-2">Différents SIEM (Security Information and Event Management) proposés par l'équipe projet ont été analysés pour établir un état de l'art des solutions similaires. Néanmoins, ces outils étant conçus pour une surveillance à long terme d'un réseau, ils se distinguent de la borne d'audit qui elle est destinée à une utilisation ponctuelle et ciblée sur un téléphone unique.</p>

                                        <p className="mb-2">En parallèle, j'ai étudié l'utilisation du Design System d'Orange à travers plusieurs de leurs applications, afin de me l'approprier et de correctement l'appliquer dans la suite du projet.</p>
                                    </div>
                                </div>
                            </Col>
                            <Col xl={2} xxl={3}></Col>
                        </Row>
                    </div>

                    <div className="section d-flex flex-column gap-4">
                        <Row justify="center">
                            <Col xl={7} xxl={6}>
                                <div className="section d-flex flex-column gap-4">
                                    <div>
                                        <span className="display-S">05</span>
                                        <h1 style={{ marginTop: '-8px' }}>Personas</h1>
                                    </div>
                                    <div className="alinea">
                                        <p className="mb-2">Trois personas ont été élaborés pour ce projet, en se basant sur l'idée d'une utilisation de la borne directement sur le site d'Orange.</p>
                                    </div>
                                </div>
                            </Col>
                            <Col xl={2} xxl={3}></Col>
                        </Row>

                        {Personas["borne-orange"].map((persona, index) => (
                            <Row justify="center">
                                <Col xl={9} key={index} className="d-flex flex-column align-items-center gap-2">
                                    <Persona infoPersona={persona} />
                                    <span className="small">
                                        Persona de {persona.name}
                                    </span>
                                </Col>
                            </Row>
                        ))}


                    </div>

                </Container>
            </div>
        </>
    )
}