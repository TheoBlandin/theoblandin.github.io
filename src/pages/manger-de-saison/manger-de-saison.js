import React from "react";
import './manger-de-saison.css';
import InfoProject from './../../assets/data/manger-de-saison.json';
import HeaderProject from "../../components/header_project/HeaderProject";
import PresentationProject from "../../components/presentation-project/PresentationProject";
import Carousel from "../../components/carousel/Carousel";
import { Link } from 'react-router-dom';
import { useEffect } from "react";
import { Container, Row, Col } from 'react-grid-system';
import Part02_Illu01 from './../../assets/illustrations/manger-de-saison/part02_illu01.png';
import Part02_Illu02 from './../../assets/illustrations/manger-de-saison/part02_illu02.png';
import Part02_Illu03 from './../../assets/illustrations/manger-de-saison/part02_illu03.png';
import Part03_Illu01 from './../../assets/illustrations/manger-de-saison/part03_illu01.png';
import { ReactComponent as Forward } from './../../assets/icons/forward.svg'
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'

export default function MangerDeSaison() {
    useEffect(() => {
        document.title = "Manger de saison - Théo Blandin";
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
                                    <h1 style={{ marginTop: '-8px' }}>Benchmark</h1>
                                </div>
                                <div className="alinea">
                                    <p className="mb-2">Il existe plusieurs applications et sites web similaires à <i>Manger de saison</i>. J'en ai analysé plusieurs, principalement francophones, pour avoir une vision claire de l'offre actuelle.</p>

                                    <p className="mb-2">Les retours utilisateurs sur ces applications mobiles ont également été pris en compte pour enrichir mon étude.</p>
                                </div>
                            </div>
                        </Col>
                        <Col xl={2} xxl={3}></Col>
                    </Row>
                    <div className="section d-flex flex-column gap-4">
                        <Row justify="center">
                            <Col xl={7} xxl={6}>
                                <div className="section d-flex flex-column gap-4">
                                    <div>
                                        <span className="display-S">02</span>
                                        <h1 style={{ marginTop: '-8px' }}>Maquettage</h1>
                                    </div>
                                    <div className="alinea">
                                        <p className="mb-2">La première version de la maquette de l'application a été réalisée sur papier lors de la phase d'idéation, puis transférée sur Figma. Elle n'est pas destinée à être reproduite exactement à l'identique, mais plutôt à servir de point de départ. Au fil du développement, le design s'est affiné parallèlement à l'évolution de mes compétences.</p>
                                    </div>
                                </div>
                            </Col>
                            <Col xl={2} xxl={3}></Col>
                        </Row>
                        <Row justify="center">
                            <Col xl={9} className="d-flex align-items-center justify-content-center gap-20 multiple-illu-container w-100">
                                <div className="d-flex flex-column align-items-center gap-2 d-flex flex-column align-items-cneter flex-1">
                                    <Zoom zoomMargin={32}>
                                        <img
                                            alt="Maquette sur papier de l'application avec annotations"
                                            src={Part02_Illu01}
                                            className="w-100"
                                        />
                                    </Zoom>
                                    <span aria-hidden="true" className="small">
                                        Maquette sur papier
                                    </span>
                                </div>
                                <div className="d-flex flex-column align-items-center gap-2 flex-1">
                                    <div className="double-illu d-flex gap-20 w-100">
                                        <Zoom zoomMargin={32} className="illu-of-double-illu">
                                            <img
                                                alt="Maquette sur Figma de l'écran d'accueil de l'application"
                                                src={Part02_Illu02}
                                                className="w-100"
                                            />
                                        </Zoom>

                                        <Zoom zoomMargin={32} className="illu-of-double-illu">
                                            <img
                                                alt="Maquette sur Figma de l'écran d'accueil de l'application avec un modal affichant les informations de l'élément sélectionné"
                                                src={Part02_Illu03}
                                                className="w-100"
                                            />
                                        </Zoom>
                                    </div>
                                    <span aria-hidden="true" className="small">
                                        Maquette sur Figma
                                    </span>
                                </div>
                            </Col>
                        </Row>
                    </div>
                    <div className="section d-flex flex-column gap-4">
                        <Row justify="center">
                            <Col xl={7} xxl={6}>
                                <div className="section d-flex flex-column gap-4">
                                    <div>
                                        <span className="display-S">03</span>
                                        <h1 style={{ marginTop: '-8px' }}>Illustrations</h1>
                                    </div>
                                    <div className="alinea">
                                        <p className="mb-2">Les illustrations des différents fruits et légumes recensés dans le calendrier furent réalisées sous forme de dessin vectoriel à laide du logiciel Inkscape. L'objectif étant de créer un design attractif pour l'utilisateur, tout en lui permettant de reconnaître facilement chaque aliment.</p>

                                        <p className="mb-2">En attendant que l'ensemble des illustrations soit complété, des émojis sont employés, ou un point d'interrogation lorsque aucun émoji n'est disponible dans la bibliothèque utilisée.</p>
                                    </div>
                                </div>
                            </Col>
                            <Col xl={2} xxl={3}></Col>
                        </Row>
                        <Row justify="center">
                            <Col xl={9} className="d-flex flex-column align-items-center gap-2">
                                <Zoom zoomMargin={32}>
                                    <img
                                        alt="Création d'une illustration sur Inkscape"
                                        src={Part03_Illu01}
                                        className="w-100"
                                    />
                                </Zoom>
                                <span aria-hidden="true" className="small">
                                    Création d'une illustration sur Inkscape
                                </span>
                            </Col>
                        </Row>
                    </div>
                    <Row justify="center">
                        <Col xl={7} xxl={6}>
                            <div className="section d-flex flex-column gap-4">
                                <div>
                                    <span className="display-S">04</span>
                                    <h1 style={{ marginTop: '-8px' }}>Développement</h1>
                                </div>
                                <div className="alinea">
                                    <p className="mb-2"><i>Manger de Saison</i> est ma deuxième application mobile développée avec Flutter, destinée aux téléphones Android.</p>

                                    <p className="mb-2">Les données sur les aliments ainsi que les préférences des utilisateurs sont stockées localement sur l'appareil, garantissant un accès continu aux informations tout en réduisant les coûts.</p>
                                </div>
                            </div>
                        </Col>
                        <Col xl={2} xxl={3}></Col>
                    </Row>
                    <Row justify="center">
                        <Col xl={7} xxl={6}>
                            <div className="section d-flex flex-column gap-4">
                                <div>
                                    <span className="display-S">05</span>
                                    <h1 style={{ marginTop: '-8px' }}>Ce que ça m'a apporté</h1>
                                </div>
                                <div className="alinea">
                                    <p className="mb-2"><i>Manger de saison</i> est ma deuxième application mobile, un projet qui m'a permis de progresser à la fois en développement, en approfondissant mes compétences en Flutter, et en design, notamment grâce à la création des illustrations des fruits et légumes.</p>

                                    <p className="mb-2">Ce travail d'illustration, toujours en cours, m'a permis de mieux maîtriser le logiciel Inkscape tout en développant mon propre style graphique. L'application a également traversé plusieurs refontes, reflétant l'évolution continue de mes compétences en design d'interface.</p>

                                    <p className="mb-2">Ce projet constitue pour moi un terrain d'apprentissage idéal, alliant technique et créativité, que je continue à perfectionner avec l'objectif de le publier un jour.</p>
                                </div>
                            </div>
                        </Col>
                        <Col xl={2} xxl={3}></Col>
                    </Row>
                    <div className="d-flex flex-row justify-content-end align-items-center gap-2">
                        <Link to='/swap'>
                            <div className="d-flex flex-row justify-content-end align-items-center gap-2 py-4">
                                <span className="">Vers le prochain projet</span>
                                <Forward className="icon-M icon-dark" />
                            </div>
                        </Link>
                    </div>
                </Container>
            </div>
        </>
    )
}