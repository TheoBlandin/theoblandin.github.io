import React from "react";
import { useEffect } from "react";
import './about.css'
import { Container, Row, Col } from 'react-grid-system';
import Self from './../../assets/photos/self.png';
import DesignTools from './../../assets/design-tools.svg'
import DevTools from './../../assets/dev-tools.svg'
import AccessibilityTools from './../../assets/accessibility-tools.svg'
import Figma from './../../assets/icons/figma.svg'
import DesignThinking from './../../assets/icons/design-thinking.svg'
import Empathy from './../../assets/icons/empathy.svg'
import Inkscape from './../../assets/icons/inkscape.svg'
import Notebook from './../../assets/icons/notebook.svg'
import Canva from './../../assets/icons/canva.svg'
import Creativity from './../../assets/icons/creativity.svg'
import HTML from './../../assets/icons/html.svg'
import CSS from './../../assets/icons/css.svg'
import JavaScript from './../../assets/icons/javascript.svg'
import Angular from './../../assets/icons/angular.svg'
import ReactLogo from './../../assets/icons/react.svg'
import Bootstrap from './../../assets/icons/bootstrap.svg'
import Flutter from './../../assets/icons/flutter.svg'
import Responsive from './../../assets/icons/responsive.svg'
import WCAG from './../../assets/icons/wcag.svg'
import Audit from './../../assets/icons/audit.svg'
import RGAA from './../../assets/icons/rgaa.svg'
import Analysis from './../../assets/icons/analysis.svg'
import Disabilities from './../../assets/icons/disabilities.svg'
import YoungSelf from './../../assets/photos/young-self.png';
import Cat from './../../assets/photos/cat.png';
import Cooking from './../../assets/photos/cooking.png';
import IceCream from './../../assets/photos/ice-cream.png';
import Ocean from './../../assets/photos/ocean.png';
import Puzzle from './../../assets/photos/puzzle.png';
import Streetart from './../../assets/photos/streetart.png';
import Swimming from './../../assets/photos/swimming.png';

export default function About() {
    useEffect(() => {
        document.title = "À propos - Théo Blandin";
    }, []);

    return (
        <Container>
            <section aria-label="À propos de moi" className="about">
                <Row justify="center">
                    <Col xl={10}>
                        <h1 className="mb-4">À propos de moi</h1>
                    </Col>
                </Row>
                <Row justify="center">
                    <Col lg={6} xl={4}>
                        <img src={Self} className="w-100" alt="Selfie" />
                    </Col>
                    <Col xl={6}>
                        <p className="lead bold mb-3">Je m'appelle Théo, je suis UX Designer et Développeur Front-End à Rennes, spécialisé en accessibilité numérique.</p>

                        <p className="mb-2">Je suis passionné par la conception orientée utilisateur et m'efforce de créer des interfaces intuitives, esthétiques et accessibles dans mon travail.</p>

                        <p className="mb-2">Je possède un diplôme d'ingénieur en informatique obtenu à l'ENSIM, avec une spécialisation en UX Design. Mes études, combinées à mon goût pour la pédagogie, la rédaction, et mon caractère empathique et créatif, font de moi un profil polyvalent. Cela me permet d'avoir un point de vue unique sur les problèmes que je suis amené à rencontrer.</p>

                        <p className="mb-2">J'apporte une attention toute particulière à l'accessibilité numérique, spécialité que j'ai pu explorer lors de mon stage chez Vially à Dublin, une entreprise spécialisé dans le domaine.</p>

                        <p className="mb-2">Actuellement, je participe à la création d'une startup au sein de l'incubateur de startup de l'INRIA à Rennes. Cette startup est la suite directe du projet de recherche A4LL qui vise à employer l'IA afin d'analyser les écrits des apprenants en langues et d'ainsi fournir une analyse détaillée sous forme de tableau de bord. J'y occupe un travail d'UX Designer et de Développeur Front-End.</p>

                        <a href="/assets/CV_Theo_Blandin.pdf" aria-label="Visualiser mon CV"
                            target="_blank" rel="noopener noreferrer">
                            <button className="mt-4 position-relative ms-auto py-3 px-4 CTA">
                                <span className="position-relative">Télécharger mon CV</span>
                            </button>
                        </a>
                    </Col>
                </Row>
            </section>

            <section aria-label="Mes outils" className="mt-5">
                <Row justify="center">
                    <Col xl={10}>
                        <h1 className="mb-4">Mes outils</h1>
                    </Col>
                </Row>
                <div className="d-flex flex-column gap-20">
                    <Row justify="center" className="square-tools">
                        <Col lg={6} xl={5}>
                            <div className="tools d-flex flex-column align-items-center gap-4 h-100 bg-yellow-light">
                                <img src={DesignTools} className="category-tools-icon icon-dark" alt="" />
                                <span className="lead bold">Design</span>
                                <div className="container-chips-tools d-flex flex-wrap justify-content-center">
                                    <div className="d-flex flex-row align-items-center bg-light gap-2 px-3 py-2 br-4">
                                        <img src={Figma} className="icon-tools" alt="" />
                                        Figma
                                    </div>
                                    <div className="d-flex flex-row align-items-center bg-light gap-2 px-3 py-2 br-4">
                                        <img src={DesignThinking} className="icon-tools" alt="" />
                                        Design thinking
                                    </div>
                                    <div className="d-flex flex-row align-items-center bg-light gap-2 px-3 py-2 br-4">
                                        <img src={Empathy} className="icon-tools" alt="" />
                                        Empathie
                                    </div>
                                    <div className="d-flex flex-row align-items-center bg-light gap-2 px-3 py-2 br-4">
                                        <img src={Inkscape} className="icon-tools" alt="" />
                                        Inkscape
                                    </div>
                                    <div className="d-flex flex-row align-items-center bg-light gap-2 px-3 py-2 br-4">
                                        <img src={Notebook} className="icon-tools" alt="" />
                                        Mon carnet
                                    </div>
                                    <div className="d-flex flex-row align-items-center bg-light gap-2 px-3 py-2 br-4">
                                        <img src={Canva} className="icon-tools" alt="" />
                                        Canva
                                    </div>
                                    <div className="d-flex flex-row align-items-center bg-light gap-2 px-3 py-2 br-4">
                                        <img src={Creativity} className="icon-tools" alt="" />
                                        Créativité
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col lg={6} xl={5}>
                            <div className="tools d-flex flex-column align-items-center gap-4 h-100 bg-orange-light">
                                <img className="category-tools-icon icon-dark" src={DevTools} alt="" />
                                <span className="lead bold">Développement</span>
                                <div className="container-chips-tools d-flex flex-wrap justify-content-center">
                                    <div className="d-flex flex-row align-items-center bg-light gap-2 px-3 py-2 br-4">
                                        <img src={HTML} className="icon-tools" alt="" />
                                        HTML
                                    </div>
                                    <div className="d-flex flex-row align-items-center bg-light gap-2 px-3 py-2 br-4">
                                        <img src={CSS} className="icon-tools" alt="" />
                                        CSS
                                    </div>
                                    <div className="d-flex flex-row align-items-center bg-light gap-2 px-3 py-2 br-4">
                                        <img src={JavaScript} className="icon-tools" alt="" />
                                        JavaScript
                                    </div>
                                    <div className="d-flex flex-row align-items-center bg-light gap-2 px-3 py-2 br-4">
                                        <img src={Angular} className="icon-tools" alt="" />
                                        Angular
                                    </div>
                                    <div className="d-flex flex-row align-items-center bg-light gap-2 px-3 py-2 br-4">
                                        <img src={ReactLogo} className="icon-tools" alt="" />
                                        React
                                    </div>
                                    <div className="d-flex flex-row align-items-center bg-light gap-2 px-3 py-2 br-4">
                                        <img src={Bootstrap} className="icon-tools" alt="" />
                                        Bootstrap
                                    </div>
                                    <div className="d-flex flex-row align-items-center bg-light gap-2 px-3 py-2 br-4">
                                        <img src={Flutter} className="icon-tools" alt="" />
                                        Flutter
                                    </div>
                                    <div className="d-flex flex-row align-items-center bg-light gap-2 px-3 py-2 br-4">
                                        <img src={Responsive} className="icon-tools" alt="" />
                                        Responsive design
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row justify="center">
                        <Col xl={10}>
                            <div className="tools-accessibility bg-green-light d-flex flex-row">
                                <div className="tools d-flex flex-column align-items-center gap-4">
                                    <img className="category-tools-icon icon-dark" src={AccessibilityTools} alt="" />
                                    <span className="lead bold">Accessibilité numérique</span>
                                    <div className="container-chips-tools d-flex flex-wrap justify-content-center">
                                        <div className="d-flex flex-row align-items-center bg-light gap-2 px-3 py-2 br-4">
                                            <img src={WCAG} className="icon-tools" alt="" />
                                            WCAG
                                        </div>
                                        <div className="d-flex flex-row align-items-center bg-light gap-2 px-3 py-2 br-4">
                                            <img src={Audit} className="icon-tools" alt="" />
                                            Audit d'accessibilité
                                        </div>
                                        <div className="d-flex flex-row align-items-center bg-light gap-2 px-3 py-2 br-4">
                                            <img src={RGAA} className="icon-tools" alt="" />
                                            RGAA
                                        </div>
                                        <div className="d-flex flex-row align-items-center bg-light gap-2 px-3 py-2 br-4">
                                            <img src={Analysis} className="icon-tools" alt="" />
                                            Esprit d'analyse
                                        </div>
                                        <div className="d-flex flex-row align-items-center bg-light gap-2 px-3 py-2 br-4">
                                            <img src={Disabilities} className="icon-tools" alt="" />
                                            Connaissance des handicaps
                                        </div>
                                    </div>
                                </div>
                                <div className="accessibility-links d-flex flex-column align-items-start gap-4">
                                    <span className="lead bold">Ce que j'utilise au quotidien</span>
                                    <ul>
                                        <li>
                                            <a href="https://webaim.org/resources/contrastchecker/" target="_blank" rel="noopener noreferrer">
                                                <u>[Site web] Contrast checker</u> <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>open_in_new</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://app.contrast-finder.org/?lang=fr" target="_blank" rel="noopener noreferrer">
                                                <u>[Site web] Contrast finder</u> <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>open_in_new</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://chromewebstore.google.com/detail/lighthouse/blipmdconlkpinefehnmjammfjpmpbjk?hl=fr" target="_blank" rel="noopener noreferrer">
                                                <u>[Extension] Lighthouse</u> <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>open_in_new</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.w3.org/WAI/WCAG21/Understanding/" target="_blank" rel="noopener noreferrer">
                                                <u>[Site web] All WCAG 2.1 Understanding Docs</u> <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>open_in_new</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.figma.com/community/plugin/748533339900865323/contrast" target="_blank" rel="noopener noreferrer">
                                                <u>[Plugin Figma] Contrast</u> <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>open_in_new</span>
                                            </a>
                                        </li>
                                    </ul>
                                    {/* Input text à mettre plus tard */}
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </section>

            <section aria-label="En quelques photos" className="my-5">
                <Row justify="center">
                    <Col xl={10}>
                        <h1 className="mb-4">En quelques photos</h1>
                    </Col>
                </Row>
                <Row justify="center">
                    <Col lg={6} xl={5}>
                        <div className="photos-row d-flex flex-row">
                            <div className="photos-col d-flex flex-column w-100">
                                <img src={Swimming} alt="Piscine municipale vide à l'aspect ancien" className="w-100" />
                                <img src={Puzzle} alt="Puzzle en cours" className="w-100" />
                            </div>
                            <div className="photos-col d-flex flex-column w-100">
                                <img src={Ocean} alt="Vague tapant sur des rochers" className="w-100" />
                                <img src={Cooking} alt="Fournée de biscuits en forme de chat" className="w-100" />
                            </div>
                        </div>
                    </Col>
                    <Col lg={6} xl={5}>
                        <div className="photos-row d-flex flex-row photos-row-2">
                            <div className="photos-col d-flex flex-column">
                                <img src={Streetart} alt="Street-art d'un nounours demandant 'Hug?' en mimant un calin" className="w-100" />
                                <img src={Cat} alt="Chat blanc" className="w-100" />
                            </div>
                            <div className="photos-col d-flex flex-column">
                                <img src={YoungSelf} alt="Photo de moi à environ 5 ans sur un cheval à bascule" className="w-100" />
                                <img src={IceCream} alt="Cornet de glace" className="w-100" />
                            </div>
                        </div>
                    </Col>
                </Row>
            </section>
        </Container>
    )
}