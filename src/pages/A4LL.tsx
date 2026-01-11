import { useEffect } from "react";
import { Link } from "react-router-dom";

import HeaderProject from "../components/headerProject/HeaderProject";
import PresentationProject from "../components/presentationProject/PresentationProject";

import Data from "../assets/projects/a4ll/project.json";
import type { Presentation } from "../types/types";

import { Col, Container, Row } from "react-grid-system";

import ReactPlayer from "react-player";

import { getAsset } from "../utils/getAsset";
import PersonaComponent from "../components/persona/PersonaComponent";

function A4LL() {
  useEffect(() => {
    document.title = "A4LL - Théo Blandin";
  }, []);

  const presentationProject: Presentation = Data;

  return (
    <>
      <HeaderProject color="#C5C9E4" name="A4LL" />

      <div className="my-8 flex flex-col gap-8">
        <PresentationProject project={presentationProject} />

        {/* Visuals */}
        <div className="w-full flex flex-row justify-center">
          <div className="w-full max-w-[1440px] flex flex-col gap-2 lg:gap-3">
            <div className="flex flex-col-reverse lg:flex-row gap-2 lg:gap-3 px-3 w-full">
              <div className="bg-surface flex items-center justify-center py-6 px-4 lg:px-6 lg:w-[33%]">
                <img
                  loading="lazy"
                  className="w-full"
                  src={getAsset("/src/assets/projects/a4ll/quote-1280.webp")}
                  srcSet={`
                  ${getAsset("/src/assets/projects/a4ll/quote-480.webp")} 480w,
                  ${getAsset("/src/assets/projects/a4ll/quote-768.webp")} 768w,
                  ${getAsset("/src/assets/projects/a4ll/quote-1280.webp")} 1280w
                `}
                  sizes="(max-width: 768px) 100vw, 768px"
                  alt=""
                />
              </div>
              <div className="bg-surface flex-1 flex items-center justify-center py-6 px-4 lg:px-12">
                <img
                  loading="lazy"
                  className="w-full"
                  src={getAsset("/src/assets/projects/a4ll/mockup_1-1280.webp")}
                  srcSet={`
                  ${getAsset(
                    "/src/assets/projects/a4ll/mockup_1-480.webp"
                  )} 480w,
                  ${getAsset(
                    "/src/assets/projects/a4ll/mockup_1-768.webp"
                  )} 768w,
                  ${getAsset(
                    "/src/assets/projects/a4ll/mockup_1-1280.webp"
                  )} 1280w
                `}
                  sizes="(max-width: 768px) 100vw, 768px"
                  alt=""
                />
              </div>
            </div>
            <div className="flex flex-col lg:flex-row gap-2 lg:gap-3 px-3 w-full">
              <div className="bg-surface flex-1 flex items-center justify-center py-6 px-4 lg:px-12">
                <img
                  loading="lazy"
                  className="w-full"
                  src={getAsset("/src/assets/projects/a4ll/mockup_2-1280.webp")}
                  srcSet={`
                  ${getAsset(
                    "/src/assets/projects/a4ll/mockup_2-480.webp"
                  )} 480w,
                  ${getAsset(
                    "/src/assets/projects/a4ll/mockup_2-768.webp"
                  )} 768w,
                  ${getAsset(
                    "/src/assets/projects/a4ll/mockup_2-1280.webp"
                  )} 1280w
                `}
                  sizes="(max-width: 768px) 100vw, 768px"
                  alt=""
                />
              </div>
              <div className="bg-surface flex items-center justify-center py-6 px-4 lg:px-6 lg:w-[33%]">
                <img
                  loading="lazy"
                  className="w-full"
                  src={getAsset("/src/assets/projects/a4ll/workflow-1280.webp")}
                  srcSet={`
                  ${getAsset(
                    "/src/assets/projects/a4ll/workflow-480.webp"
                  )} 480w,
                  ${getAsset(
                    "/src/assets/projects/a4ll/workflow-768.webp"
                  )} 768w,
                  ${getAsset(
                    "/src/assets/projects/a4ll/workflow-1280.webp"
                  )} 1280w
                `}
                  sizes="(max-width: 768px) 100vw, 768px"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>

        <Container className="w-full flex flex-col gap-12">
          {/* Problème */}
          <section
            aria-labelledby="a4ll-section_1"
            className="flex flex-col gap-5"
          >
            <Row justify="center">
              <Col sm={12} xl={7} className="flex flex-col gap-2">
                <h2 id="a4ll-section_1">Problème</h2>
                <div className="flex flex-col gap-1">
                  <p>
                    Dans l'enseignement des langues secondes à l'université,
                    l'accent est souvent mis sur les erreurs des apprenants
                    plutôt que sur une évaluation globale de leur niveau,
                    comprenant aussi bien leurs forces que leurs faiblesses.
                  </p>
                  <p>
                    Une analyse de ce type, répétée pour l'ensemble des
                    étudiants dont un enseignant a la charge, représenterait
                    néanmoins une charge de travail beaucoup trop élevé.
                  </p>
                  <p>
                    C'est de ce constat qu'est né le projet de recherche{" "}
                    <i>A4LL</i>. Et si l'équipe a su brillamment relever le défi
                    technique, l'outil souffrait néanmoins d'un manque
                    d'ergonomie et de vulgarisation dû à son statut de MVP, ce
                    qui limitait son adoption par des enseignants parfois peu à
                    l'aise avec le numérique ou ne disposant pas de
                    connaissances approfondies en linguistique.
                  </p>
                </div>
              </Col>
              <Col xl={3}></Col>
            </Row>
          </section>

          {/* Solution */}
          <section
            aria-labelledby="a4ll-section_2"
            className="flex flex-col gap-5"
          >
            <Row justify="center">
              <Col sm={12} xl={7} className="flex flex-col gap-2">
                <h2 id="a4ll-section_2">Solution</h2>
                <div className="flex flex-col gap-1">
                  <p>
                    Afin de rendre le tableau de bord d'<i>A4LL</i> plus
                    accessible pour son public cible, la refonte s'est articulée
                    autour de deux axes principaux :
                  </p>
                  <ul className="list-disc list-outside ms-8 flex flex-col gap-1">
                    <li>
                      <span className="bold">
                        Remettre l'utilisateur au centre
                      </span>{" "}
                      : l'interface a été repensée pour répondre aux besoins
                      réels des enseignants, tant en termes de fonctionnalités
                      que d'ergonomie
                    </li>
                    <li>
                      <span className="bold">
                        Épurer les données linguistiques
                      </span>{" "}
                      : les données et graphiques les plus complexes ont été
                      retravaillés afin de les rendre plus compréhensibles pour
                      un public éclairé mais non spécialiste en linguistique.
                    </li>
                  </ul>
                </div>
              </Col>
              <Col xl={3}></Col>
            </Row>
          </section>

          {/* Étude de l'existant */}
          <section
            aria-labelledby="a4ll-section_3"
            className="flex flex-col gap-5"
          >
            <Row justify="center">
              <Col sm={12} xl={7} className="flex flex-col gap-2">
                <h2 id="a4ll-section_3">Étude de l'existant</h2>
                <div className="flex flex-col gap-1">
                  <p>
                    La première étape du processus a été l'étude de l'interface
                    existante réalisée par l'équipe de recherche, afin d'en
                    ressortir les éléments positifs et les éléments améliorables
                    pour la construction de la nouvelle interface.
                  </p>
                  <p>
                    Mon point de vue extérieur au projet et au domaine de la
                    linguistique dans son ensemble a constitué un véritable
                    atout. Il m'a permis d'identifier des problèmes et des
                    opportunités nouvelles pour l'équipe.
                  </p>
                </div>
              </Col>
              <Col xl={3}></Col>
            </Row>
            <Row justify="center">
              <Col sm={12} xl={10} className="flex flex-col gap-5">
                <div className="w-full h-fit flex flex-row justify-center">
                  <img
                    loading="lazy"
                    src={getAsset("/src/assets/projects/a4ll/old_ui-1280.webp")}
                    srcSet={`
                      ${getAsset(
                        "/src/assets/projects/a4ll/old_ui-480.webp"
                      )} 480w,
                      ${getAsset(
                        "/src/assets/projects/a4ll/old_ui-768.webp"
                      )} 768w,
                      ${getAsset(
                        "/src/assets/projects/a4ll/old_ui-1280.webp"
                      )} 1280w
                    `}
                    sizes="(max-width: 768px) 100vw, 768px"
                    alt="Logo, couleurs et typographie de Proficlais"
                  />
                </div>
              </Col>
            </Row>
          </section>

          {/* Entretiens utilisateurs */}
          <section
            aria-labelledby="a4ll-section_4"
            className="flex flex-col gap-5"
          >
            <Row justify="center">
              <Col sm={12} xl={7} className="flex flex-col gap-2">
                <h2 id="a4ll-section_4">Entretiens utilisateurs</h2>
                <div className="flex flex-col gap-1">
                  <p>
                    Afin de mieux comprendre les besoins réels liés à
                    l'enseignement des langues secondes, nous avons mené une
                    série d'entretiens individuels avec 15 enseignants du
                    supérieur.
                  </p>
                  <p>
                    Ces échanges avaient pour objectif d'identifier leurs
                    difficultés et leurs pratiques quotidiennes, sans présenter
                    notre solution dans un premier temps afin de ne pas orienter
                    leurs réponses. Des thématiques communes ont ainsi émergé
                    entre les différents profils interrogés.
                  </p>
                </div>
              </Col>
              <Col xl={3}></Col>
            </Row>
            <Row justify="center">
              <Col sm={12} xl={10}>
                <div className="flex flex-col md:grid lg:grid-cols-2 lg:grid-rows-4 gap-4">
                  <div className="stroke-dark !border-2 p-3 flex flex-col gap-2">
                    <div className="bg-yellow flex flex-col items-center px-4 py-2">
                      <span className="bold">
                        Manque d'implication des élèves
                      </span>
                      <span className="small">(10 enseignants)</span>
                    </div>
                    <p>
                      Les élèves manquent de temps et/ou de motivation pour
                      s'impliquer suffisamment dans leur apprentissage de la
                      langue, les autres matières sont plus souvent privilégiées
                      vis à vis des langues vivantes.
                    </p>
                  </div>
                  <div className="stroke-dark !border-2 p-3 flex flex-col gap-2">
                    <div className="bg-yellow flex flex-col items-center px-4 py-2">
                      <span className="bold">S'adapter aux élèves</span>
                      <span className="small">(9 enseignants)</span>
                    </div>
                    <p>
                      Les enseignants ont besoin de s'adapter aux différents
                      profils d'élèves et à leurs envies pour proposer un cours
                      efficace et utile.
                    </p>
                  </div>
                  <div className="stroke-dark !border-2 p-3 flex flex-col gap-2">
                    <div className="bg-yellow flex flex-col items-center px-4 py-2">
                      <span className="bold">Manque de temps</span>
                      <span className="small">(8 enseignants)</span>
                    </div>
                    <p>
                      Les enseignants manquent de temps pour pouvoir proposer
                      l'expérience d'enseignement qu'ils voudraient. Cela prend
                      beaucoup de place dans leur vie personnelle.
                    </p>
                  </div>
                  <div className="stroke-dark !border-2 p-3 flex flex-col gap-2">
                    <div className="bg-yellow flex flex-col items-center px-4 py-2">
                      <span className="bold">
                        Optimiser le temps face aux élèves
                      </span>
                      <span className="small">(8 enseignants)</span>
                    </div>
                    <p>
                      Le temps alloué face aux étudiants est limité et les
                      enseignants ont tendance à vouloir optimiser ce temps pour
                      privilégier l'interaction, de telle manière que ce qui
                      peut se faire en autonomie est souvent mit à la charge de
                      l'élève en dehors des heures de cours.
                    </p>
                  </div>
                  <div className="stroke-dark !border-2 p-3 flex flex-col gap-2">
                    <div className="bg-yellow flex flex-col items-center px-4 py-2">
                      <span className="bold">
                        Des questions vis à vis du numérique
                      </span>
                      <span className="small">(8 enseignants)</span>
                    </div>
                    <p>
                      L'IA générative et les traducteurs automatique sont
                      surutilisé par les élèves, de telle sorte qu'ils ne
                      travaillent plus par eux mêmes et n'apprennent pas. Les
                      enseignants tentent de sensibiliser leurs élèves face à
                      ces questionnement, mais ce n'est pas toujours efficace.
                    </p>
                  </div>
                  <div className="stroke-dark !border-2 p-3 flex flex-col gap-2">
                    <div className="bg-yellow flex flex-col items-center px-4 py-2">
                      <span className="bold">Manque de pratique écrite</span>
                      <span className="small">(7 enseignants)</span>
                    </div>
                    <p>
                      Les enseignants ne parviennent pas à faire travailler
                      suffisamment l'écrit alors même qu'ils jugent cet exercice
                      comme bénéfique pour l'apprentissage.
                    </p>
                  </div>
                  <div className="stroke-dark !border-2 p-3 flex flex-col gap-2">
                    <div className="bg-yellow flex flex-col items-center px-4 py-2">
                      <span className="bold">Aller vers plus de concret</span>
                      <span className="small">(7 enseignants)</span>
                    </div>
                    <p>
                      Les enseignants cherchent à faire davantage de pratique et
                      à aller vers des mise en situation concrète plutôt que
                      d'utiliser des exercices didactiques. Ils se basent pour
                      ça sur une utilisation de documents authentiques et de
                      documents en lien direct avec les sujets abordés.
                    </p>
                  </div>
                  <div className="stroke-dark !border-2 p-3 flex flex-col gap-2">
                    <div className="bg-yellow flex flex-col items-center px-4 py-2">
                      <span className="bold">
                        Focalisation sur l'expression orale
                      </span>
                      <span className="small">(7 enseignants)</span>
                    </div>
                    <p>
                      Les enseignements se focalisent davantage sur l'oral,
                      notamment pour l'aspect communication que cela implique.
                      Ils considèrent que l'heure de cours est l'un des seuls
                      moments où les élèves pourront pratiquer, contrairement à
                      l'expression écrite.
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
          </section>

          {/* Personas */}
          <section
            aria-labelledby="a4ll-section_5"
            className="flex flex-col gap-5"
          >
            <Row justify="center">
              <Col sm={12} xl={7} className="flex flex-col gap-2">
                <h2 id="a4ll-section_5">Personas</h2>
                <div className="flex flex-col gap-1">
                  <p>
                    Deux personas d'enseignants ont été crée à partir des
                    entretiens utilisateurs..
                  </p>
                </div>
              </Col>
              <Col xl={3}></Col>
            </Row>
            <Row justify="center">
              <Col sm={12} xl={10} className="flex flex-col gap-5">
                <PersonaComponent
                  persona={{
                    img: "/src/assets/projects/a4ll/isabelle_verdier-1280.webp",
                    color: "yellow",
                    name: "Isabelle Verdier",
                    features: [
                      "Impliquée",
                      "50 ans",
                      "Enseignante-chercheuse",
                      "Expérimentée",
                      "Observatrice",
                      "Spécialiste en linguistique",
                    ],
                    bio: "Isabelle, 50 ans, est enseignante-chercheuse à l'université depuis plus de 20 ans. Elle connaît bien son métier mais manque de temps pour y mettre autant de temps qu'elle le souhaiterait. Observatrice et impliquée, elle est à la recherche de moyens d'optimiser son temps de travail et ses heures de cours face aux élèves. Peu à l'aise avec le numérique et les nouvelles technologies, elle possède en revanche une expertise solide en linguistique grâce à son travail de recherche.",
                    data: {
                      want: {
                        title: "Ce qu'elle veut faire",
                        content: "Optimiser et gagner du temps",
                      },
                      need: {
                        title: "Ce qu'elle souhaiterait",
                        content: "Proposer des activités adaptés à ses élèves",
                      },
                      use: {
                        title: "Ce qu'elle va utiliser",
                        content: "La vue d'ensemble de ses élèves",
                      },
                      block: {
                        title: "Ce qui la bloque",
                        content:
                          "Son manque de temps dù à ses autres responsabilités",
                      },
                    },
                  }}
                />
                <PersonaComponent
                  persona={{
                    img: "/src/assets/projects/a4ll/daniel_kensington-1280.webp",
                    color: "orange",
                    name: "Daniel Kensington",
                    features: [
                      "Dynamique",
                      "28 ans",
                      "Enseignant à l'université",
                      "Nationalité anglaise",
                      "Patient",
                      "Technophile",
                    ],
                    bio: "Daniel, 28 ans, est enseignant d'anglais à l'université en France depuis 2 ans. De nationalité anglaise, il a parfois du mal à communiquer des idées complexes à ses élèves. Curieux et dynamique, il cherche sans cesse à améliorer ses connaissances, que ça soit en termes de pédagogie, de linguistique ou de maîtrise du français. Il est à l'aise avec le numérique et utilise déjà de nombreux outils au quotidien pour faciliter son enseignement.",
                    data: {
                      want: {
                        title: "Ce qu'il veut faire",
                        content:
                          "Mieux comprendre les difficultés de ses élèves",
                      },
                      need: {
                        title: "Ce qu'il souhaiterait",
                        content:
                          "Être accompagné dans la gestion de ses classes",
                      },
                      use: {
                        title: "Ce qu'il va utiliser",
                        content: "Les indicateurs et leurs explications",
                      },
                      block: {
                        title: "Ce qui le bloque",
                        content: "Connaissances limités en linguistique ",
                      },
                    },
                  }}
                />
              </Col>
            </Row>
          </section>

          {/* Maquettes */}
          <section
            aria-labelledby="a4ll-section_6"
            className="flex flex-col gap-5"
          >
            <Row justify="center">
              <Col sm={12} xl={7} className="flex flex-col gap-2">
                <h2 id="a4ll-section_6">Maquettes</h2>
                <div className="flex flex-col gap-1">
                  <p>
                    Les premières maquettes de la nouvelle interface ont été
                    conçues sur Figma, en s'appuyant sur le Simple Design System
                    fourni par l'outil.
                  </p>
                  <p>
                    Elles ont ensuite évolué vers des maquettes haute fidélité,
                    en parallèle de la création d'un design system plus adapté
                    au produit. L'ancienne interface reposait principalement sur
                    le design de la librairie Bootstrap.
                  </p>
                </div>
              </Col>
              <Col xl={3}></Col>
            </Row>
            <Row justify="center">
              <Col sm={12} xl={10} className="flex flex-col gap-5">
                <div className="w-full h-fit flex flex-row justify-center">
                  <img
                    loading="lazy"
                    src={getAsset("/src/assets/projects/a4ll/figma-1280.webp")}
                    srcSet={`
                      ${getAsset(
                        "/src/assets/projects/a4ll/figma-480.webp"
                      )} 480w,
                      ${getAsset(
                        "/src/assets/projects/a4ll/figma-768.webp"
                      )} 768w,
                      ${getAsset(
                        "/src/assets/projects/a4ll/figma-1280.webp"
                      )} 1280w
                    `}
                    sizes="(max-width: 768px) 100vw, 768px"
                    alt="Logo, couleurs et typographie de Proficlais"
                  />
                </div>
              </Col>
            </Row>
          </section>

          {/* Développement */}
          <section
            aria-labelledby="a4ll-section_7"
            className="flex flex-col gap-5"
          >
            <Row justify="center">
              <Col sm={12} xl={7} className="flex flex-col gap-2">
                <h2 id="a4ll-section_7">Développement</h2>
                <div className="flex flex-col gap-1">
                  <p>
                    Le nouveau tableau de bord d'<i>A4LL</i> a été développé
                    avec le framework React, en reprenant l'ancien code du
                    projet. La librairie Recharts a été utilisé pour la création
                    des graphiques interactifs.
                  </p>
                </div>
              </Col>
              <Col xl={3}></Col>
            </Row>
            <Row justify="center">
              <Col sm={12} xl={10} className="flex flex-col gap-5">
                <div className="w-full h-fit flex flex-row justify-center">
                  <ReactPlayer
                    src={getAsset(
                      "/src/assets/projects/a4ll/demo_dashboard.mp4"
                    )}
                    width="100%"
                    height="100%"
                    loop={true}
                    playing={true}
                    muted={true}
                  />
                </div>
              </Col>
            </Row>
          </section>

          {/* Tests utilisateurs */}
          <section
            aria-labelledby="a4ll-section_8"
            className="flex flex-col gap-5"
          >
            <Row justify="center">
              <Col sm={12} xl={7} className="flex flex-col gap-2">
                <h2 id="a4ll-section_8">Tests utilisateurs</h2>
                <div className="flex flex-col gap-1">
                  <p>
                    L'interface d'<i>A4LL</i> étant fortement interactive et
                    reposant sur des données complexes, le choix a été fait de
                    mener des tests utilisateurs uniquement après le
                    développement d'une première version fonctionnelle du
                    nouveau tableau de bord. Au total, quatre enseignants ont
                    participé à ces sessions de test. Ils ne connaissaient le
                    projet qu'à travers une description brève et n'avaient
                    jamais vu ni utilisé l'ancienne version de l'interface.
                  </p>
                  <p>
                    Après avoir recueilli le profil de testeur, celui-ci était
                    laissé dans une phase de découverte de l'interface. A
                    ensuite suivi une suite de deux scénarios. Le premier
                    consistait à proposer une action pédagogique pour un élève
                    choisi par le médiateur. Le deuxième scénario était
                    identique, sauf que l'action pédagogique devait être à
                    destination d'un duo d'élèves. Pour conclure la session, les
                    participants ont complété un questionnaire d'utilisabilité,
                    basé sur le{" "}
                    <abbr title="Computer System Usability Questionnaire">
                      CSUQ
                    </abbr>{" "}
                    .
                  </p>
                </div>
              </Col>
              <Col xl={3}></Col>
            </Row>
            <Row justify="center">
              <Col sm={12} xl={10}>
                <div className="flex flex-col lg:flex-row gap-4">
                  <div className="stroke-dark !border-2 p-3 flex flex-col gap-2">
                    <div className="bg-yellow flex flex-col items-center text-center px-4 py-2 bold">
                      Intéressant, mais pas indispensable
                    </div>
                    <p>
                      L'utilité d'un tel outil est remise en question par les
                      enseignants. Si l'agrégation des indicateurs pour
                      plusieurs élèves a été jugée intéressante, l'analyse
                      individuelle d'un seul texte reste, selon eux,
                      suffisamment couverte par les méthodes classiques
                      lorsqu'un besoin ponctuel se présente. Même si les données
                      présentées sont pour la grande majorité jugés
                      intéressantes par l'utilisateur, ceux-ci ne les ont
                      pourtant que très peu utilisés lors des scénarios.
                    </p>
                  </div>
                  <div className="stroke-dark !border-2 p-3 flex flex-col gap-2">
                    <div className="bg-yellow flex flex-col items-center px-4 py-2 bold">
                      Lecture difficile
                    </div>
                    <p>
                      Tant l'aspect statistique et mathématiques que l'aspect
                      linguistique a été difficile à appréhender pour la
                      majorité des enseignants.{" "}
                      <i>"Ce n'est pas mon langage"</i> déclare une utilisatrice
                      en parlant des graphiques devant lesquels elle se sent
                      perdu,{" "}
                      <i>
                        "C'est quelque chose que l'on utilise plus depuis qu'on
                        a fini nos études"
                      </i>{" "}
                      déclare une autre en parlant des notions linguistiques.
                      L'interface et les données qu'elle présente sont jugés
                      comme trop complexes pour être comprises en autonomie.
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
          </section>

          {/* Issue du projet */}
          <section
            aria-labelledby="a4ll-section_9"
            className="flex flex-col gap-5"
          >
            <Row justify="center">
              <Col sm={12} xl={7} className="flex flex-col gap-2">
                <h2 id="a4ll-section_9">Issue du projet</h2>
                <div className="flex flex-col gap-1">
                  <p>
                    À la suite des tests utilisateurs et de l'étude de marché
                    menée en parallèle, la décision a été prise de réorienter
                    l'exploitation de la technologie d'analyse linguistique
                    développée dans le cadre d'A4LL. Après plusieurs itérations
                    et pistes explorées, le projet a finalement évolué pour
                    devenir <Link to="/proficlais">Proficlais</Link>.
                  </p>
                  <p>
                    La taille trop restreinte du marché, combinée aux
                    contraintes budgétaires de l'enseignement supérieur, ne
                    permettait pas d'envisager un projet économiquement viable.
                    De plus, bien que l'intérêt des enseignants rencontrés ait
                    été réel et enthousiaste, le produit n'était pas perçu comme
                    un outil indispensable.
                  </p>
                </div>
              </Col>
              <Col xl={3}></Col>
            </Row>
          </section>
        </Container>
      </div>
    </>
  );
}

export default A4LL;
