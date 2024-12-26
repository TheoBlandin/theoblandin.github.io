import React from "react";
import './manger-de-saison.css';
import { useEffect } from "react";
import { Container, Row, Col } from 'react-grid-system';
import { ReactComponent as GitHub } from './../../assets/icons/github.svg'

export default function MangerDeSaison() {
    useEffect(() => {
        document.title = "Manger de saison - Théo Blandin";
    }, []);

    return (
        <>
            <div className="header">
                <Container>
                    <Row>
                        <Col sm={12} className="header-content">
                            <a href="/#projects" className="back-link">
                                <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>arrow_back</span>
                                &nbsp;Retour
                            </a>
                            <span className="display-L">Manger de saison</span>
                        </Col>
                    </Row>
                </Container>
            </div>

            <div className="my-5">
                <Container>
                    <Row justify="center">
                        <Col xl={6}>
                            <div className="paragraph">
                                <span className="lead bold">Projet</span>
                                <div className="alinea">
                                    <p className="mb-2">C'est dans l'optique d'améliorer à la fois mon alimentation et mon empreinte carbone que j'ai créé <i>Manger de saison</i>. Cette application mobile propose un calendrier complet des fruits et légumes de saison, basé sur une localisation en France métropolitaine, dans l'optique d'accompagner ses utilisateurs dans la préparation de leurs repas.</p>

                                    <p className="mb-2">Il existe des applications de fruits et légumes de saison par dizaine, mais là où Manger de saison se distingue, c'est par son interactivité. L'utilisateur a la possibilité d'ajouter une préférence personnelle à chaque aliment (<i>J'aime</i> ou <i>Je n'aime pas</i>), lui permettant ainsi une expérience totalement personnalisée. Ainsi, grâce aux options de tri, il lui sera possible d'afficher uniquement les légumes du mois de mai qu'il aime, lui fournissant une liste précise de ce qu'il pourra manger durant cette période de l'année.</p>

                                    <p className="mb-2">Ce qui fait également la différence de <i>Manger de saison</i>, ce sont ses designs. Chaque aliment possède une illustration réalisée sur Inkscape, proposant des designs originaux et esthétiques.</p>
                                </div>
                            </div>
                        </Col>
                        <Col xl={3}>
                            <div className="info-col">
                                <div className="info-el">
                                    <span className="lead bold">Contexte</span>
                                    <div className="alinea">
                                        <p className="mb-2">Projet personnel</p>
                                        <p className="mb-2">Application mobile</p>
                                    </div>
                                </div>

                                <div className="info-el">
                                    <span className="lead bold">Rôle</span>
                                    <div className="alinea">
                                        <p className="mb-2">UX Designer</p>
                                        <p className="mb-2">Graphiste</p>
                                        <p className="mb-2">Développeur</p>
                                    </div>
                                </div>

                                <div className="info-el">
                                    <span className="lead bold">Date</span>
                                    <div className="alinea">
                                        <p className="mb-2">2023 - maintenant</p>
                                    </div>
                                </div>

                                <div className="info-el">
                                    <span className="lead bold">Lien</span>
                                    <div className="alinea">
                                        <a href="https://github.com/TheoBlandin/manger_de_saison" target="_blank" rel="noopener noreferrer" aria-label="Ouvrir le projet GitHub" className="project-link mb-2">
                                            <GitHub className="icon-L icon-dark" />
                                            <span>Projet GitHub</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}