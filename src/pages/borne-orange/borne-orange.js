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
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'

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
                                <Zoom zoomMargin={32}>
                                    <img
                                        alt="Interface initiale de la borne"
                                        src={Part03_Illu01}
                                        className="w-100"
                                    />
                                </Zoom>
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

                    <div className="section d-flex flex-column gap-4">
                        <Row justify="center">
                            <Col xl={7} xxl={6}>
                                <div className="section d-flex flex-column gap-4">
                                    <div>
                                        <span className="display-S">06</span>
                                        <h1 style={{ marginTop: '-8px' }}>Idéation</h1>
                                    </div>
                                    <div className="alinea">
                                        <p className="mb-2">Grâce au programme développé en amont par l'équipe projet, j'avais accès à plusieurs informations issues de l'audit du téléphone. J'ai recensé ces données, déjà partiellement ou totalement utilisées dans l'interface initiale, et je me suis questionné sur chacune d'elles :</p>

                                        <p className="mb-2">
                                            <ul>
                                                <li>Est-ce que cette information est intéressante pour mon utilisateur ?</li>
                                                <li>Cette information a-t-elle davantage sa place sur l'écran de la borne ou sur le site web accessible via le mobile ? Sur les deux ?</li>
                                                <li>Comment représenter cette information de la manière la plus pertinente et compréhensible possible pour mon utilisateur ? Y a-t-il déjà un composant existant dans le Design System d'Orange qui pourrait être utilisé ? Sinon, ai-je des références pour m'en inspirer ?</li>
                                                <li>Me manque-t-il des informations supplémentaires pour fournir quelque chose d'intéressant à l'utilisateur ? Si oui, ces informations peuvent-elles être obtenues ?</li>
                                            </ul>
                                        </p>

                                        <p className="mb-2">Ce travail a abouti à la création d'une carte mentale pour chaque jeu de données, me permettant de visualiser et d'explorer les différentes options pour leur intégration dans l'interface.</p>
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
                                        <span className="display-S">07</span>
                                        <h1 style={{ marginTop: '-8px' }}>Parcours utilisateur</h1>
                                    </div>
                                    <div className="alinea">
                                        <p className="mb-2">L'écran de la borne n'étant pas interactif, les actions de l'utilisateur se limitent à sa connexion au système et à sa navigation sur son téléphone. Voici un aperçu simplifié du parcours utilisateur.</p>

                                        <p className="mb-2">Les actions effectuées par l'utilisateur sont représentées en orange avec des angles droits, tandis que les réponses du système apparaissent en jaune avec des angles arrondis.</p>
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
                                        <span className="display-S">08</span>
                                        <h1 style={{ marginTop: '-8px' }}>Maquettes</h1>
                                    </div>
                                    <div className="alinea">
                                        <p className="mb-2">Le projet comporte deux maquettes :</p>

                                        <p className="mb-2">
                                            <ul>
                                                <li>La maquette destinée à l'écran de la borne, en 1920 par 1080px strictrement</li>
                                                <li>La maquette destinée au mobile, optimisée pour un affichage sur téléphone en mode portrait</li>
                                            </ul>
                                        </p>

                                        <p className="mb-2">Les maquettes finales de ces deux interfaces ont été réalisées après plusieurs itérations, intégrant les retours de l'équipe et les résultats des tests utilisateurs.</p>
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
                                        <span className="display-S">09</span>
                                        <h1 style={{ marginTop: '-8px' }}>Tests utilisateurs</h1>
                                    </div>
                                    <div className="alinea">
                                        <p className="mb-2">Plusieurs sessions de tests utilisateurs ont été organisées sur les maquettes, impliquant des employés d'Orange présents sur le site. L'objectif était de mener une session par semaine pendant trois semaines, avec plusieurs tests individuels à chaque session. Après chaque session, les maquettes ont été ajustées en fonction des retours recueillis.</p>

                                        <p className="mb-2">Lors des tests, le profil des participants a été relevé pour contextualiser leurs retours. De plus, un questionnaire SUS (System Usability Scale) a été complété à la fin de chaque séance, permettant de mesurer quantitativement l'amélioration de la maquette tout au long du processus.</p>
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
                                        <span className="display-S">10</span>
                                        <h1 style={{ marginTop: '-8px' }}>Développement</h1>
                                    </div>
                                    <div className="alinea">
                                        <p className="mb-2">L'implémentation de la nouvelle interface a été réalisée avec le framework Angular, en s'appuyant sur le code existant, notamment pour la gestion de la communication avec les différentes API du projet.</p>

                                        <p className="mb-2">Pour le style des composants, Boosted, une variante de Bootstrap adaptée au Design System d'Orange, a été utilisé.</p>
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
                                        <span className="display-S">11</span>
                                        <h1 style={{ marginTop: '-8px' }}>Ce que ça m'a apporté</h1>
                                    </div>
                                    <div className="alinea">
                                        <p className="mb-2">Cette expérience de six mois vient clôturer mes études à l'ENSIM. Il fut l'occasion pour moi d'appliquer de manière concrète les compétences qui m'ont le plus intéressé au cours de ma scolarité : le design d'expérience utilisateur et le développement front-end. Travailler sur un projet concret m'a permis de relever des défis techniques tant dans un domaine que dans l'autre, me faisant significativement progresser. J'ai également pu en apprendre plus sur la gestion de projets numériques, notamment en Recherche & Développement.</p>

                                        <p className="mb-2">L'analyse et l'utilisation d'un Design System aussi complet que celui d'Orange m'a permis de découvrir les exigences et pratiques du design dans un contexte professionnel à grande échelle.</p>

                                        <p className="mb-2">Ce projet m'a également donné l'occasion de mener de véritables tests utilisateurs, un aspect particulièrement enrichissant. Cela m'a appris à gérer les retours, à les intégrer dans mon travail, et à recentrer mes designs sur les besoins des utilisateurs. Cette expérience fut d'autant plus marquante que je n'avais pas souvent l'occasion de réaliser ce type de tests dans mes projets personnels.</p>
                                    </div>
                                </div>
                            </Col>
                            <Col xl={2} xxl={3}></Col>
                        </Row>
                    </div>

                </Container>
            </div>
        </>
    )
}