import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './swap.css';
import HeaderProject from "../../components/header_project/HeaderProject";
import Persona from "../../components/persona/Persona";
import PresentationProject from "../../components/presentation-project/PresentationProject";
import Carousel from "../../components/carousel/Carousel";
import InfoProject from './../../assets/data/swap.json';
import Personas from './../../assets/data/personas.json';
import { Container, Row, Col } from 'react-grid-system';
import { ResponsivePie } from '@nivo/pie'
import { TagCloud } from 'react-tagcloud'
import Part04_Illu01 from './../../assets/illustrations/swap/part04_illu01.png';
import Part04_Illu02 from './../../assets/illustrations/swap/part04_illu02.png';
import Part06_Illu01 from './../../assets/illustrations/swap/part06_illu01.png';
import Part08_Illu01 from './../../assets/illustrations/swap/part08_illu01.png';
import { ReactComponent as Forward } from './../../assets/icons/forward.svg'
import theme from './../../utils/dataviz.js';


export default function Swap() {
    const [pieHeight, setPieHeight] = useState(300);
    const [doublePieHeight, setdoublePieHeight] = useState(332);
    const [maxWordSize, setMaxWordSize] = useState(64);

    useEffect(() => {
        document.title = "SWAP - Théo Blandin";

        const handleResize = () => {
            if (window.innerWidth < 480) {
                setPieHeight(150);
                setdoublePieHeight(364);
                setMaxWordSize(48);
            }

            else if (window.innerWidth < 768) {
                setPieHeight(250);
                setdoublePieHeight(564);
                setMaxWordSize(48);
            }

            else if (window.innerWidth > 768) {
                setPieHeight(300);
                setdoublePieHeight(332);
                setMaxWordSize(64);
            }
        };

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const data01 = [
        { id: 'Lycée professionel ', value: 3 },
        { id: 'BTS ', value: 1 },
        { id: 'Lycée général ', value: 2 },
    ];

    const data02 = [
        { id: 'Contractuel ', value: 1 },
        { id: 'Titulaire ', value: 5 },
    ];

    const data03 = [
        { id: 'Privée ', value: 1 },
        { id: 'Public ', value: 5 },
    ];

    const data04 = [
        { id: '0-1 an ', value: 1 },
        { id: '5-10 ans ', value: 1 },
        { id: '10+ ans ', value: 4 },
    ];

    const words = [
        { value: 'Pas/peu de devoirs', count: 3 },
        { value: 'Parents absents des réunions', count: 3 },
        { value: 'Alternance cours/activités', count: 3 },
        { value: 'Profils d\'élèves variés', count: 4 },
        { value: 'Pluridisciplinarité', count: 2 },
        { value: 'Différenciation', count: 3.5 },
        { value: 'Confiance', count: 3 },
        { value: 'Partage avec les collèges volontaire', count: 3.5 },
        { value: 'Pas/peu de moyens', count: 3 },
        { value: 'Rapport à l\'élève', count: 2 },
        { value: 'Métier passion', count: 3 },
        { value: 'Entraide', count: 7 },
        { value: 'Collèges qui ne partagent pas', count: 2 },
        { value: 'Horaires fixes', count: 2 },
        { value: 'Autoformation', count: 3 },
        { value: 'Début difficile', count: 4 },
        { value: 'Pas de formation au numérique', count: 2 },
        { value: 'Transmission de savoir', count: 3 },
        { value: 'Travail le soir/week-end/vacances', count: 3 },
        { value: 'Pas/peu de soutien psychologique', count: 2 },
        { value: 'Espace de partage', count: 4 },
        { value: 'Formation incomplète/inutile', count: 3 },
        { value: 'Plus de demandes avec autant/moins de moyens', count: 2 },
        { value: 'Travail payant sur le long terme', count: 3 },
    ]

    const COLORS = ['#F08845', '#E9C46A', '#1DB79D'];

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
                                        <h1 style={{ marginTop: '-8px' }}>Planification</h1>
                                    </div>
                                    <div className="alinea">
                                        <p className="mb-2">Dans un premier temps, nous avons étudié notre population cible pour identifier les différentes problématiques rencontrées dans la vie professionnelle des enseignants. Nous avons par ce biais identifié 8 sujets pertinents à aborder avec nos utilisateurs.</p>

                                        <p className="mb-2">Pour cela, nous avons pris contact avec plusieurs établissements scolaires de la ville du Mans, dans le but de privilégier les entretiens en présentiel. Au total, 10 établissements ont été contacté.</p>
                                    </div>
                                </div>
                            </Col>
                            <Col xl={2} xxl={3}></Col>
                        </Row>
                        <Row justify="center">
                            <Col xl={9} className="d-flex flex-column align-items-center gap-2">
                                <div className="d-flex flex-column plan-container ">
                                    <div className="plan-row d-flex">
                                        <div className="plan-sub-row flex-1 d-flex">
                                            <div className="px-4 py-4 d-flex flex-column gap-3 align-items-center b-solid bw-2 b-dark flex-1" style={{ maxWidth: '215px', minWidth: '192px' }}>
                                                <span className="px-4 py-3 d-flex flex-row justify-content-center bg-yellow">Le métier</span>
                                                <span className="text-center">Ressenti face au métier, expériences</span>
                                            </div>

                                            <div className="px-4 py-4 d-flex flex-column gap-3 align-items-center b-solid bw-2 b-dark flex-1" style={{ maxWidth: '215px', minWidth: '192px' }}>
                                                <span className="px-4 py-3 d-flex flex-row justify-content-center bg-yellow">Les élèves</span>
                                                <span className="text-center">Élèves en difficulté, isolés et/ou atypiques</span>
                                            </div>
                                        </div>

                                        <div className="plan-sub-row flex-1 d-flex">
                                            <div className="px-4 py-4 d-flex flex-column gap-3 align-items-center b-solid bw-2 b-dark flex-1" style={{ maxWidth: '215px', minWidth: '192px' }}>
                                                <span className="px-4 py-3 d-flex flex-row justify-content-center bg-yellow">Vie pro/perso</span>
                                                <span className="text-center">Horaires, charge de travail en dehors des cours</span>
                                            </div>

                                            <div className="px-4 py-4 d-flex flex-column gap-3 align-items-center b-solid bw-2 b-dark flex-1" style={{ maxWidth: '215px', minWidth: '192px' }}>
                                                <span className="px-4 py-3 d-flex flex-row justify-content-center bg-yellow">Programme</span>
                                                <span className="text-center">
                                                    Préparation des cours, programme scolaire</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="plan-row d-flex">
                                        <div className="plan-sub-row flex-1 d-flex">
                                            <div className="px-4 py-4 d-flex flex-column gap-3 align-items-center b-solid bw-2 b-dark flex-1" style={{ maxWidth: '215px', minWidth: '192px' }}>
                                                <span className="px-4 py-3 d-flex flex-row justify-content-center bg-yellow">Illectronisme</span>
                                                <span className="text-center">
                                                    Enseignement et utilisation du numérique</span>
                                            </div>

                                            <div className="px-4 py-4 d-flex flex-column gap-3 align-items-center b-solid bw-2 b-dark flex-1" style={{ maxWidth: '215px', minWidth: '192px' }}>
                                                <span className="px-4 py-3 d-flex flex-row justify-content-center bg-yellow">Les parents</span>
                                                <span className="text-center">Contact avec les parents, réunions parent-prof</span>
                                            </div>
                                        </div>

                                        <div className="plan-sub-row flex-1 d-flex">
                                            <div className="px-4 py-4 d-flex flex-column gap-3 align-items-center b-solid bw-2 b-dark flex-1" style={{ maxWidth: '215px', minWidth: '192px' }}>
                                                <span className="px-4 py-3 d-flex flex-row justify-content-center bg-yellow">RPS</span>
                                                <span className="text-center">Risques psychosociaux, accompagnement</span>
                                            </div>

                                            <div className="px-4 py-4 d-flex flex-column gap-3 align-items-center b-solid bw-2 b-dark flex-1" style={{ maxWidth: '215px', minWidth: '192px' }}>
                                                <span className="px-4 py-3 d-flex flex-row justify-content-center bg-yellow">L'attention</span>
                                                <span className="text-center">Attention des élèves, participation en classe</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <span className="small">
                                    Domaines identifiés comme possible porteurs de problématiques
                                </span>
                            </Col>
                        </Row>
                    </div>
                    <div className="section d-flex flex-column gap-4">
                        <Row justify="center">
                            <Col xl={7} xxl={6}>
                                <div className="section d-flex flex-column gap-4">
                                    <div>
                                        <span className="display-S">02</span>
                                        <h1 style={{ marginTop: '-8px' }}>Entretiens utilisateurs</h1>
                                    </div>
                                    <div className="alinea">
                                        <p className="mb-2">Au total, 5 entretiens utilisateurs avec 6 utilisateurs en tout ont pu être réalisé (un entretien était un double entretien). Ces entretiens se sont déroulés en présentiel, avec une personne chargé de la prise de note et une personne chargée de mener la discussion avec le ou les utilisateurs. </p>

                                        <p className="mb-2">Ces entretiens se sont basés sur la trame d'entretien rédigé à partir des sujets précédemment identifiés, permettant d'aborder différents thèmes pouvant donner lieu à l'apparition de pain points. En plus de suivre la trame, des informations ont été relevées sur chacun des interviewés afin de mettre en perspective les données récoltées.</p>
                                    </div>
                                </div>
                            </Col>
                            <Col xl={2} xxl={3}></Col>
                        </Row>
                        <Row justify="center">
                            <Col xl={9} className="d-flex flex-column align-items-center gap-2">
                                <div className="d-flex flex-column data-row w-100">
                                    <div className="d-flex data-sub-row" style={{ height: doublePieHeight }}>
                                        <div className="d-flex flex-column align-items-center gap-2 flex-1" style={{ height: pieHeight }} >
                                            <ResponsivePie
                                                data={data01}
                                                margin={{ top: 20, right: 80, bottom: 20, left: 80 }}
                                                activeOuterRadiusOffset={8}
                                                colors={COLORS}
                                                borderWidth={1}
                                                borderColor="#FCFCFC"
                                                theme={theme}
                                                arcLinkLabelsThickness={1}
                                                arcLinkLabelsOffset={-10}
                                                arcLinkLabelsColor="#201708"
                                                startAngle={270}
                                                endAngle={630}
                                            />
                                            <span className="small">
                                                Type d'enseignement
                                            </span>
                                        </div>

                                        <div className="d-flex flex-column align-items-center gap-2 flex-1" style={{ height: pieHeight }} >
                                            <ResponsivePie
                                                data={data02}
                                                margin={{ top: 20, right: 80, bottom: 20, left: 80 }}
                                                activeOuterRadiusOffset={8}
                                                colors={COLORS}
                                                borderWidth={1}
                                                borderColor="#FCFCFC"
                                                theme={theme}
                                                arcLinkLabelsThickness={1}
                                                arcLinkLabelsOffset={-10}
                                                arcLinkLabelsColor="#201708"
                                            />
                                            <span className="small">
                                                Contractuel et titulaire
                                            </span>
                                        </div>
                                    </div>

                                    <div className="d-flex data-sub-row" style={{ height: doublePieHeight }}>
                                        <div className="d-flex flex-column align-items-center gap-2 flex-1" style={{ height: pieHeight }} >
                                            <ResponsivePie
                                                data={data03}
                                                margin={{ top: 20, right: 80, bottom: 20, left: 80 }}
                                                activeOuterRadiusOffset={8}
                                                colors={COLORS}
                                                borderWidth={1}
                                                borderColor="#FCFCFC"
                                                theme={theme}
                                                arcLinkLabelsThickness={1}
                                                arcLinkLabelsOffset={-10}
                                                arcLinkLabelsColor="#201708"
                                            />
                                            <span className="small">
                                                Type d'établissement
                                            </span>
                                        </div>

                                        <div className="d-flex flex-column align-items-center gap-2 flex-1" style={{ height: pieHeight }} >
                                            <ResponsivePie
                                                data={data04}
                                                margin={{ top: 20, right: 80, bottom: 20, left: 80 }}
                                                activeOuterRadiusOffset={8}
                                                colors={COLORS}
                                                borderWidth={1}
                                                borderColor="#FCFCFC"
                                                theme={theme}
                                                arcLinkLabelsThickness={1}
                                                arcLinkLabelsOffset={-10}
                                                arcLinkLabelsColor="#201708"
                                                startAngle={90}
                                                endAngle={450}
                                            />
                                            <span className="small">
                                                Ancienneté
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <span className="small mt-5">
                                    Caractéristiques des utilisateurs interrogés
                                </span>
                            </Col>
                        </Row>
                    </div>
                    <div className="section d-flex flex-column gap-4">
                        <Row justify="center">
                            <Col xl={7} xxl={6}>
                                <div className="section d-flex flex-column gap-4">
                                    <div>
                                        <span className="display-S">03</span>
                                        <h1 style={{ marginTop: '-8px' }}>Analyse</h1>
                                    </div>
                                    <div className="alinea">
                                        <p className="mb-2">Les différents entretiens utilisateurs ont été analysés afin d'identifier une problématique commune. Chaque prise de note a été examinée afin de mettre en évidence les thèmes récurrents, représentés sous forme de nuage de mots. Des verbatims ont également été extraits pour illustrer et appuyer les observations.</p>

                                        <p className="mb-2">La problématique retenue est la suivante : <b>Comment pourrions-nous favoriser la collaboration et le partage de ressources pédagogiques entre les enseignants ?</b></p>
                                    </div>
                                </div>
                            </Col>
                            <Col xl={2} xxl={3}></Col>
                        </Row>
                        <Row justify="center">
                            <Col xl={9} className="d-flex flex-column align-items-center gap-2">
                                <TagCloud
                                    minSize={16}
                                    maxSize={maxWordSize}
                                    tags={words}
                                    shuffle={false}
                                    disableRandomColor={true}
                                    className='bg-surface text-center wordcloud'
                                />
                                <span className="small text-center">
                                    Nuage de mots synthétisant les entretiens utilisateur
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
                                        <h1 style={{ marginTop: '-8px' }}>Idéation</h1>
                                    </div>
                                    <div className="alinea">
                                        <p className="mb-2">L'idéation s'est faite en binôme sous forme d'un brainstorming. Le but étant de répondre à la problématique précédemment établie à travers une solution numérique. C'est à ce moment là qu'est né <i>SWAP</i>.</p>

                                        <p className="mb-2">La contrainte d'une solution numérique découlait directement de notre contexte : en tant qu'étudiants en école d'informatique, une maquette d'application numérique était attendue de notre part. Sans cette exigence, la solution aurait pu prendre une tout autre forme.</p>

                                        <p className="mb-2">Nous n'avions néanmoins aucune limite de moyen, n'étant pas désireux de développer le projet par la suite. </p>
                                    </div>
                                </div>
                            </Col>
                            <Col xl={2} xxl={3}></Col>
                        </Row>
                        <Row justify="center">
                            <Col xl={9} className="d-flex flex-column align-items-center gap-2">
                                <img
                                    src={Part04_Illu01}
                                    alt="Brainstorming du projet réalisé sur un tableau blanc."
                                    className="w-100"
                                />
                                <span aria-hidden="true" className="small">
                                    Résultat du brainstorming
                                </span>
                            </Col>
                        </Row>
                        <Row justify="center">
                            <Col xl={9} className="d-flex flex-column align-items-center gap-2">
                                <img
                                    src={Part04_Illu02}
                                    alt="Mind map d'idéation reprenant les idées du brainstorming. Il y a 4 noeuds principaux : Formulaire d'ajout, Ressource, Recherche et Profil. Ceux-ci sont reliés entre eux par de plus petites fonctionnalités."
                                    className="w-100"
                                />
                                <span aria-hidden="true" className="small">
                                    Mind map d'idéation mise au propre
                                </span>
                            </Col>
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
                                        <p className="mb-2">Trois personas furent créés, se basant sur les profils rencontrés lors des entretiens utilisateurs. Chacun se focalise sur une des fonctionnalités clés de <i>SWAP</i>.</p>
                                    </div>
                                </div>
                            </Col>
                            <Col xl={2} xxl={3}></Col>
                        </Row>

                        {Personas["swap"].map((persona, index) => (
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
                                        <h1 style={{ marginTop: '-8px' }}>Parcours utilisateur</h1>
                                    </div>
                                    <div className="alinea">
                                        <p className="mb-2">Voici un parcours utilisateur simplifié, illustrant les principales fonctionnalités et étapes de navigation sur SWAP.</p>

                                        <p className="mb-2">Les actions effectuées par l'utilisateur sont représentées en orange avec des angles droits, tandis que les réponses du système apparaissent en jaune avec des angles arrondis. Les actions nécessitant la connexion de l'utilisateur sont mises en évidence par un encadré rouge.</p>
                                    </div>
                                </div>
                            </Col>
                            <Col xl={2} xxl={3}></Col>
                        </Row>
                        <Row justify="center">
                            <Col xl={9} className="d-flex flex-column align-items-center gap-2">
                                <img
                                    src={Part06_Illu01}
                                    alt="Workflow simplifié. À partir de la page d'accueil, l'utilisateur peut sélectionner une catégorie, faire une recherche par mots-clés, se connecter ou s'inscrire, publier une nouvelle ressource ou consulter son profil. Pour publier une nouvelle ressource ou consulter son profil, l'utilisateur doit être connecté. Lorsque l'utilisateur a sélectionné une catégorie, il visualise les résultats. Il peut décider de les trier ou de les filtrer, et il peut sélectionner une ressource. Lorsque l'utilisateur a sélectionné une ressource il visualise la page ressource. Sur cette page, il peut consulter la ressource qui est un lien externe, voter pour la ressource avec plus 1 ou moins un, ajouter la ressource à une liste, partager la ressource ou signaler la ressource. Pour ajouter la ressource à une liste, partager la ressource ou signaler la ressource, l'utilisateur doit être connecté."
                                    className="w-100"
                                />
                                <span aria-hidden="true" className="small">
                                    Workflow simplifié
                                </span>
                            </Col>
                        </Row>
                    </div>
                    <div className="section d-flex flex-column gap-4">
                        <Row justify="center">
                            <Col xl={7} xxl={6}>
                                <div className="section d-flex flex-column gap-4">
                                    <div>
                                        <span className="display-S">07</span>
                                        <h1 style={{ marginTop: '-8px' }}>Wireframes</h1>
                                    </div>
                                    <div className="alinea">
                                        <p className="mb-2">Les wireframes ont d'abord été dessinés sur papier, puis formalisé et approfondi sur Figma.</p>

                                        <p className="mb-2">Chacun d'entre nous a esquissé les pages principales de SWAP (Accueil, Résultats de recherche, etc.), puis nous avons confronté nos idées pour en créer une troisième version, intégrant les meilleurs éléments de chacune.</p>
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
                                        <h1 style={{ marginTop: '-8px' }}>Design System</h1>
                                    </div>
                                    <div className="alinea">
                                        <p className="mb-2">Le Design System a été conçu pour offrir une maquette proche d'un rendu professionnel, de tel manière à faciliter les itérations d'un potentiel graphiste externe tout en assurant la cohérence visuelle du design.</p>

                                        <p className="mb-2">Inspiré du Design System de Google, il reprend des codes visuels largement connus, ce qui le rend plus accessible pour une majorité d'utilisateurs. Comme notre produit s'adresse à un public varié ce choix nous a paru être le plus pertinent.</p>
                                    </div>
                                </div>
                            </Col>
                            <Col xl={2} xxl={3}></Col>
                        </Row>
                        <Row justify="center">
                            <Col xl={9} className="d-flex flex-column align-items-center gap-2">
                                <img
                                    src={Part08_Illu01}
                                    alt="Extrait du Design System reprenant les éléments principaux"
                                    className="w-100"
                                />
                                <span aria-hidden="true" className="small">
                                    Extrait du Design System
                                </span>
                            </Col>
                        </Row>
                    </div>
                    <div className="section d-flex flex-column gap-4">
                        <Row justify="center">
                            <Col xl={7} xxl={6}>
                                <div className="section d-flex flex-column gap-4">
                                    <div>
                                        <span className="display-S">09</span>
                                        <h1 style={{ marginTop: '-8px' }}>Prototypage</h1>
                                    </div>
                                    <div className="alinea">
                                        <p className="mb-2">À partir du zoning et du Design System, une maquette interactive haute fidélité a été élaborée, émulant au mieux le fonctionnement imaginé pour <i>SWAP</i>. Elle permet de naviguer entre les différentes pages du site et d'interagir avec divers éléments.</p>
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
                                        <h1 style={{ marginTop: '-8px' }}>Ce que ça m'a apporté</h1>
                                    </div>
                                    <div className="alinea">
                                        <p className="mb-2">Ce projet a représenté pour moi une véritable immersion dans la méthode du Design Thinking, me permettant de découvrir chaque étape de manière concrète et active. J'ai eu l'opportunité d'interagir directement avec de vrais utilisateurs, d'apprendre à les comprendre et de concevoir une solution en réponse à leurs besoins, en suivant le principe fondamental suivant : <b>s'il n'y a pas de problème, il n'y a pas de solution.</b></p>

                                        <p className="mb-2">J'ai également créé mon premier Design System pour <i>SWAP</i>, ce qui m'a permis de perfectionner ma maîtrise de Figma. Enfin, ce projet m'a offert l'occasion d'apprendre à présenter mon travail de façon claire, synthétique et pédagogique, y compris à un public parfois peu initié, que ce soit à travers des rapports écrits ou des présentations orales.</p>

                                        <p className="mb-2">Ce projet a été pour moi une expérience d'apprentissage profonde et a confirmé ma passion pour l'UX Design ainsi que mon envie de poursuivre dans cette voie professionnelle. Il marque également la fin de mes études d'ingénieur, et l'accomplissement de mon apprentissage au cours de ces 5 années de formation.</p>
                                    </div>
                                </div>
                            </Col>
                            <Col xl={2} xxl={3}></Col>
                        </Row>
                    </div>
                    <div className="d-flex flex-row justify-content-end align-items-center gap-2">
                        <Link to='/borne-orange'>
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