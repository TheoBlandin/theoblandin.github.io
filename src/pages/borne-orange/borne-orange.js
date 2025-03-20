import React from "react";
import './borne-orange.css';
import InfoProject from '../../assets/data/borne-orange.json';
import HeaderProject from "../../components/header_project/HeaderProject";
import PresentationProject from "../../components/presentation-project/PresentationProject";
import Carousel from "../../components/carousel/Carousel";
import { Link } from 'react-router-dom';
import { useEffect } from "react";
import { Container, Row, Col } from 'react-grid-system';
import { ReactComponent as Forward } from './../../assets/icons/forward.svg'

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
                    <Row justify="center">
                        <Col xl={7} xxl={6}>
                            <div className="section d-flex flex-column gap-4">
                                <div>
                                    <span className="display-S">01</span>
                                    <h1 style={{ marginTop: '-8px' }}>Cahier des charges</h1>
                                </div>
                                <div className="ps-4">
                                    <p className="mb-2">L'objectif principal de ce projet de refonte est de concevoir une nouvelle interface destinée au grand public, offrant une expérience utilisateur rapide, autonome, et éducative.</p>

                                    <p className="mb-2">En complément de la refonte de l'interface existante, un site web dédié à l'utilisation sur téléphone doit être développé. Ce site permettra à l'utilisateur d'accéder à des informations supplémentaires et de télécharger un compte-rendu de l'audit.</p>

                                    <p className="mb-2">L'ensemble de l'interface doit être entièrement conforme au Design System d'Orange et disponible en anglais et en français.</p>
                                </div>
                            </div>
                        </Col>
                        <Col xl={2} xxl={3}></Col>
                    </Row>
                    
                </Container>
            </div>
        </>
    )
}