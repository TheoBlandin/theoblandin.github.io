import React from "react";
import './manger-de-saison.css';
import { useEffect } from "react";
import { Container, Row, Col } from 'react-grid-system';
import { ReactComponent as GitHub } from './../../assets/icons/github.svg'
import { ReactComponent as ChevronBack } from './../../assets/icons/chevron_backward.svg'
import { ReactComponent as ChevronForward } from './../../assets/icons/chevron_forward.svg'
import Slider from "react-slick";

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
            </div>
        </>
    )
}