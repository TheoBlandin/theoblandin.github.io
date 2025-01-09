import React from "react";
import './manger-de-saison.css';
import { useEffect } from "react";
import { Container, Row, Col } from 'react-grid-system';
import { ReactComponent as GitHub } from './../../assets/icons/github.svg'
import { ReactComponent as ChevronBack } from './../../assets/icons/chevron_backward.svg'
import { ReactComponent as ChevronForward } from './../../assets/icons/chevron_forward.svg'
import Slider from "react-slick";
import ModalImage from "react-modal-image";
import Part02_Illu01 from './../../assets/illustrations/manger-de-saison/part02_illu01.png';
import Part02_Illu02 from './../../assets/illustrations/manger-de-saison/part02_illu02.png';
import Part02_Illu03 from './../../assets/illustrations/manger-de-saison/part02_illu03.png';
import Part03_Illu01 from './../../assets/illustrations/manger-de-saison/part03_illu01.png';

export default function MangerDeSaison() {
    const slider = React.useRef(null);

    useEffect(() => {
        function handleKeyDown(event) {
            if (event.key === 'ArrowLeft') {
                slider?.current?.slickPrev()
            }
            if (event.key === 'ArrowRight') {
                slider?.current?.slickNext()
            }
        };
        document.addEventListener('keydown', handleKeyDown);

        return function cleanup() {
            document.removeEventListener('keydown', handleKeyDown);
        }
    });

    const imagesContext = require.context(
        './../../assets/screens/',
        true,
        /\.png$/
    );

    const getProjectImages = (projectName) => {
        const projectPath = `./${projectName}/carousel/`;
        return {
            pic_01: imagesContext(`${projectPath}pic_01.png`),
            pic_02: imagesContext(`${projectPath}pic_02.png`),
            pic_03: imagesContext(`${projectPath}pic_03.png`),
            pic_04: imagesContext(`${projectPath}pic_04.png`),
            pic_05: imagesContext(`${projectPath}pic_05.png`),
            pic_06: imagesContext(`${projectPath}pic_06.png`),
        };
    };

    const images = getProjectImages('manger-de-saison');

    const responsiveMobile = [
        {
            breakpoint: 1440,
            settings: {
                slidesToShow: 5
            }
        },
        {
            breakpoint: 1280,
            settings: {
                slidesToShow: 4
            }
        },
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1
            }
        },
        {
            breakpoint: 320,
            settings: {
                slidesToShow: 1
            }
        }
    ];

    var settings = {
        dots: false,
        speed: 300, // duration in ms
        slidesToScroll: 1,
        slidesToShow: 5,
        centerMode: true,
        arrows: false,
        responsive: responsiveMobile
    };

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

            <div className="my-5 body-container">
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
                <div className="container-carousel">
                    <Slider ref={slider} {...settings}>
                        {Object.values(images).map((urlImg, index) => (
                            <div key={index} className="mockup">
                                <svg
                                    className="mockup-svg"
                                    viewBox="0 0 280 607"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <foreignObject
                                        x="5.5"
                                        y="8"
                                        width="266"
                                        height="592"
                                        className="mockup-content mockup-content-mobile"
                                    >
                                        <div xmlns="http://www.w3.org/1999/xhtml" className="mockup-image-wrapper">
                                            <img
                                                src={urlImg}
                                                alt="Mockup Content"
                                            />
                                        </div>
                                    </foreignObject>
                                    // path from ''./../../assets/devices-mockups/mobile.svg'
                                    <path fillRule="evenodd" clipRule="evenodd" d="M36.8491 1.08643C15.0442 1.08643 0 16.0309 0 36.3348L9.98456e-05 573.291C9.98456e-05 593.595 14.9159 605.51 36.7208 605.51L240.188 605.51C261.992 605.51 277.018 593.595 277.018 573.291L277.018 249.053H277.876C278.824 249.053 279.391 248.598 279.391 247.716V213.043C279.391 212.16 278.824 211.184 277.876 211.184H277.018V174.532H277.876C278.824 174.532 279.391 173.752 279.391 172.869V104.324C279.391 103.441 278.824 102.79 277.876 102.79H277.018V36.3349C277.018 16.0311 262.063 1.08643 240.259 1.08643H36.8491ZM36.8491 9.13024C19.7844 9.13024 8.58285 20.4448 8.58285 36.3348L8.58305 573.291C8.58305 589.181 19.6561 597.142 36.7208 597.142H240.188C257.252 597.142 268.435 589.181 268.435 573.291L268.435 36.3349C268.435 20.445 257.323 9.13024 240.259 9.13024L36.8491 9.13024Z" fill="#1E1E1F" />
                                    <path d="M146.088 21.3043C146.088 25.6745 142.545 29.2173 138.175 29.2173C133.805 29.2173 130.262 25.6745 130.262 21.3043C130.262 16.934 133.805 13.3912 138.175 13.3912C142.545 13.3912 146.088 16.934 146.088 21.3043Z" fill="#1E1E1F" />
                                </svg>
                            </div>
                        ))}
                    </Slider>
                    <div className="container-carousel-nav">
                        <button className="carousel-btn" onClick={() => slider?.current?.slickPrev()}>
                            <ChevronBack className="icon-dark carousel-nav-icon" />
                        </button>
                        <button className="carousel-btn" onClick={() => slider?.current?.slickNext()}>
                            <ChevronForward className="icon-dark carousel-nav-icon" />
                        </button>
                    </div>
                </div>
                <Container className="container-explanations">
                    <Row justify="center">
                        <Col xl={6}>
                            <div className="section">
                                <div>
                                    <span className="display-S">01</span>
                                    <h1 style={{ marginTop: '-8px' }}>Benchmark</h1>
                                </div>
                                <div className="alinea">
                                    <p className="mb-2">Il existe plusieurs applications et sites web similaires à Manger de saison. J'en ai analysé plusieurs, principalement francophones, pour avoir une vision claire de l'offre actuelle.</p>

                                    <p className="mb-2">Les retours utilisateurs sur ces applications mobiles ont également été pris en compte pour enrichir mon étude.</p>
                                </div>
                            </div>
                        </Col>
                        <Col xl={3}></Col>
                    </Row>
                    <div className="section-container">
                        <Row justify="center">
                            <Col xl={6}>
                                <div className="section">
                                    <div>
                                        <span className="display-S">02</span>
                                        <h1 style={{ marginTop: '-8px' }}>Maquettages</h1>
                                    </div>
                                    <div className="alinea">
                                        <p className="mb-2">La première version de la maquette de l'application a été réalisée sur papier lors de la phase d'idéation, puis transférée sur Figma. Elle n'est pas destinée à être reproduite exactement à l'identique, mais plutôt à servir de point de départ. Au fil du développement, le design s'est affiné parallèlement à l'évolution de mes compétences.</p>
                                    </div>
                                </div>
                            </Col>
                            <Col xl={3}></Col>
                        </Row>
                        <Row justify="center">
                            <Col xl={9} className="multiple-illu">
                                <div className="illu">
                                    <img
                                        src={Part02_Illu01}
                                        alt="Maquette sur papier de l'application avec annotations"
                                        style={{ width: '100%' }}
                                    />
                                    <span aria-hidden="true" className="small">
                                        Maquette sur papier
                                    </span>
                                </div>
                                <div className="illu">
                                    <div className="prout">
                                        <img
                                            src={Part02_Illu02}
                                            alt="Création d'une illustration sur Inkscape"
                                            style={{ width: '100%' }}
                                        />
                                        <img
                                            src={Part02_Illu03}
                                            alt="Création d'une illustration sur Inkscape"
                                            style={{ width: '100%' }}
                                        />
                                    </div>
                                    <span aria-hidden="true" className="small">
                                        Création d'une illustration sur Inkscape
                                    </span>
                                </div>
                            </Col>
                        </Row>
                    </div>
                    <div className="section-container">
                        <Row justify="center">
                            <Col xl={6}>
                                <div className="section">
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
                            <Col xl={3}></Col>
                        </Row>
                        <Row justify="center">
                            <Col xl={9} className="illu">
                                {/* besoin de hide la navbar quand c'est ouvert pour ModalImage, jspa comment faire */}
                                {/* <ModalImage
                                    small={Part03_Illu01}
                                    large={Part03_Illu01}
                                    alt="Création d'une illustration sur Inkscape"
                                    hideDownload="true"
                                    style={{ width: '100%' }}
                                /> */}
                                <img
                                    src={Part03_Illu01}
                                    alt="Création d'une illustration représentant un ail sur Inkscape"
                                    style={{ width: '100%' }}
                                />
                                <span aria-hidden="true" className="small">
                                    Création d'une illustration sur Inkscape
                                </span>
                            </Col>
                        </Row>
                    </div>
                    <Row justify="center">
                        <Col xl={6}>
                            <div className="section">
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
                        <Col xl={3}></Col>
                    </Row>
                    <Row justify="center">
                        <Col xl={6}>
                            <div className="section">
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
                        <Col xl={3}></Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}