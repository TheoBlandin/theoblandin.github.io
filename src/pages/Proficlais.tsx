import { useEffect } from "react";

import HeaderProject from "../components/headerProject/HeaderProject";
import PresentationProject from "../components/presentationProject/PresentationProject";

import Data from "../assets/projects/proficlais/project.json";
import type { Presentation } from "../types/types";

import { Col, Container, Row } from "react-grid-system";

import ReactPlayer from "react-player";

function Proficlais() {
  useEffect(() => {
    document.title = "Proficlais - Théo Blandin";

    const script = document.createElement("script");
    script.src =
      "https://front-staging-857e.up.railway.app/demo/demo-widget.js";
    script.async = true;

    const container = document.getElementById("demo-widget");
    if (container) {
      container.appendChild(script);
    }

    return () => {
      if (container && container.contains(script)) {
        container.removeChild(script);
      }
    };
  }, []);

  const presentationProject: Presentation = Data;

  return (
    <>
      <HeaderProject color="#C5BFDD" name="Proficlais" />

      <div className="my-8 flex flex-col gap-8">
        <PresentationProject project={presentationProject} />

        {/* Visuals */}
        <div className="w-full flex flex-row justify-center">
          <div className="flex flex-col lg:flex-row gap-2 lg:gap-3 px-3 w-full max-w-[1440px]">
            <div className="bg-surface flex items-center justify-center py-6 px-4 lg:px-6 lg:w-[33%]">
              <img
                loading="lazy"
                className="w-full"
                src="src/assets/projects/proficlais/chatbot-1280.webp"
                srcSet="
                src/assets/projects/proficlais/chatbot-480.webp 480w,
                src/assets/projects/proficlais/chatbot-768.webp 768w,
                src/assets/projects/proficlais/chatbot-1280.webp 1280w
                "
                sizes="
                (max-width: 480px) 100vw,
                (max-width: 768px) 100vw,
                768px
                "
                alt=""
              />
            </div>
            <div className="bg-surface flex-1 flex items-center justify-center py-6 px-4 lg:px-12">
              <img
                loading="lazy"
                className="w-full"
                src="src/assets/projects/proficlais/admin_mockup-1280.webp"
                srcSet="
                  src/assets/projects/proficlais/admin_mockup-480.webp 480w,
                  src/assets/projects/proficlais/admin_mockup-768.webp 768w,
                  src/assets/projects/proficlais/admin_mockup-1280.webp 1280w
                  "
                sizes="
                  (max-width: 480px) 100vw,
                  (max-width: 768px) 100vw,
                  768px
                  "
                alt=""
              />
            </div>
          </div>
        </div>

        <Container className="w-full flex flex-col gap-12">
          {/* Problème */}
          <div className="flex flex-col gap-5">
            <Row justify="center">
              <Col sm={12} xl={7} className="flex flex-col gap-2">
                <h2>Problème</h2>
                <div className="flex flex-col gap-1">
                  <p>
                    La conversion de prospects est un enjeu central pour toute
                    activité B2C : il s'agit à la fois de convaincre
                    l'utilisateur que l'offre correspond à ses besoins, et de
                    comprendre précisément ce qu'il recherche. Les organismes de
                    formation en langues ne font pas exception et proposent
                    souvent des tests de niveau en ligne pour encourager les
                    visiteurs à passer à l'action.
                  </p>
                  <p>
                    Cependant, ces tests prennent généralement la forme de QCM,
                    un format qui peine à évaluer réellement les compétences
                    linguistiques. L'utilisateur ne peut ni s'exprimer avec ses
                    propres mots, ni se projeter dans une discussion complète.
                    Il est même possible d'obtenir une bonne réponse simplement
                    en devinant, ce qui risque de complètement biaiser les
                    résultats si le test est court.
                  </p>
                  <p>
                    Par ailleurs, ces tests classiques n'apportent presque
                    aucune information sur le profil du visiteur : ses
                    motivations, ses objectifs, son contexte, ou encore le type
                    d'accompagnement dont il aurait besoin.
                  </p>
                  <p>
                    Ces tests restent encore trop superficiels et ne fournissent
                    au formateur que des données limitées, généralement un moyen
                    de contact et une idée approximative du niveau linguistique.
                  </p>
                </div>
              </Col>
              <Col xl={3}></Col>
            </Row>
          </div>

          {/* Solution */}
          <div className="flex flex-col gap-5">
            <Row justify="center">
              <Col sm={12} xl={7} className="flex flex-col gap-2">
                <h2>Solution</h2>
                <div className="flex flex-col gap-1">
                  <p>
                    <i>Proficlais</i> propose d'allier utilité et simplicité
                    grâce à Botly, un chatbot conçu pour discuter avec les
                    visiteurs de leurs besoins en langue, le tout en anglais.
                  </p>
                  <p>
                    L'évaluation du niveau s'appuie sur plusieurs dimensions
                    linguistiques définies dans le cadre du projet de recherche
                    A4LL, mené à l'Université Rennes 2. Le programme utilise des
                    techniques de machine learning pour analyser les textes
                    produits par l'utilisateur et les comparer à ceux d'une
                    cohorte d'apprenants francophones annotés par des
                    enseignants. Cette approche permet de fournir une analyse
                    détaillée du niveau linguistique de l'utilisateur, en
                    complément de son niveau{" "}
                    <abbr title="Cadre européen commun de référence pour les langues">
                      CECR
                    </abbr>{" "}
                    (A1, A2, B1, etc.), et de mettre en évidence ses forces et
                    ses faiblesses.
                  </p>
                  <p>
                    Au-delà de l'analyse linguistique, la conversation vise
                    également à collecter des informations sur le profil du
                    visiteur. Botly pose des questions ciblées afin d'amener la
                    personne à parler de ses objectifs, motivations ou
                    contraintes. Ce recueil de données se fait naturellement, en
                    limitant les frictions habituellement liées aux formulaires
                    traditionnels.
                  </p>
                </div>
              </Col>
              <Col xl={3}></Col>
            </Row>
          </div>

          {/* Analyse des besoins clients */}
          <div className="flex flex-col gap-5">
            <Row justify="center">
              <Col sm={12} xl={7} className="flex flex-col gap-2">
                <h2>Analyse des besoins clients</h2>
                <div className="flex flex-col gap-1">
                  <p>
                    Au cours de la création de notre produit, nous avons
                    sollicité nos clients potentiels afin d'évaluer leurs
                    besoins réels.
                  </p>
                  <p>Ces échanges se sont déroulés de deux manières :</p>
                  <ul className="list-disc list-outside ms-8 flex flex-col gap-1">
                    <li>
                      Par prise de contact directe ou par mise en relation, afin
                      d'échanger avec des professionnels du secteur et
                      d'organiser des entretiens en face à face pour cerner
                      leurs besoins
                    </li>
                    <li>
                      Lors de salons professionnels, notamment au Learning Show
                      2025 à Rennes, où nous avons pu échanger directement avec
                      de nombreux acteurs du marché
                    </li>
                  </ul>
                  <p>
                    Chaque interaction a été soigneusement documentée. Mon rôle
                    consistait ensuite à synthétiser ces retours et à rédiger un
                    rapport complet regroupant l'ensemble de nos observations.
                  </p>
                  <p>
                    Ces observations nous ont permit de construire une solution
                    adaptée à nos clients et à leurs besoins.
                  </p>
                </div>
              </Col>
              <Col xl={3}></Col>
            </Row>
          </div>

          {/* Identité visuelle */}
          <div className="flex flex-col gap-5">
            <Row justify="center">
              <Col sm={12} xl={7} className="flex flex-col gap-2">
                <h2>Identité visuelle</h2>
                <div className="flex flex-col gap-1">
                  <p>
                    L'identité visuelle de <i>Proficlais</i> a été conçue pour
                    rester simple et neutre, afin de mettre l'accent sur les
                    fonctionnalités et la précision technique du service, tout
                    en permettant un widget en marque blanche.
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
                    src="src/assets/projects/proficlais/visual_identity-1280.webp"
                    srcSet="
                    src/assets/projects/proficlais/visual_identity-480.webp 480w,
                    src/assets/projects/proficlais/visual_identity-768.webp 768w,
                    src/assets/projects/proficlais/visual_identity-1280.webp 1280w
                    "
                    sizes="
                    (max-width: 480px) 100vw,
                    (max-width: 768px) 100vw,
                    768px
                    "
                    alt="Logo, couleurs et typographie de Proficlais"
                  />
                </div>
              </Col>
            </Row>
          </div>

          {/* Personnalisation */}
          <div className="flex flex-col gap-5">
            <Row justify="center">
              <Col sm={12} xl={7} className="flex flex-col gap-2">
                <h2>Personnalisation</h2>
                <div className="flex flex-col gap-1">
                  <p>
                    Le widget est proposé en marque blanche, ce qui permet au
                    client de le personnaliser afin qu'il s'adapte à sa propre
                    charte graphique.
                  </p>
                  <p>
                    La palette de couleurs s'ajuste automatiquement à partir de
                    la couleur principale sélectionnée et génère une palette
                    cohérente et adaptée. Le widget reste ainsi esthétique tout
                    en garantissant un contraste minimum de 4,5:1 entre la
                    couleur primaire et le texte affiché sur celle-ci,
                    conformément aux exigences du{" "}
                    <abbr title="Référentiel général d'amélioration de l'accessibilité">
                      RGAA
                    </abbr>{" "}
                    .
                  </p>
                </div>
              </Col>
              <Col xl={3}></Col>
            </Row>
            <Row justify="center">
              <Col sm={12} xl={10} className="flex flex-col gap-5">
                <div className="w-full h-fit flex flex-row justify-center">
                  <ReactPlayer
                    src="src/assets/projects/proficlais/personnalisation_widget.mp4"
                    width="100%"
                    height="100%"
                    loop={true}
                    playing={true}
                    muted={true}
                  />
                </div>
                <div className="w-full h-fit flex flex-row justify-center">
                  <img
                    loading="lazy"
                    src="src/assets/projects/proficlais/palette_personnalisation-1280.webp"
                    srcSet="
                    src/assets/projects/proficlais/palette_personnalisation-480.webp 480w,
                    src/assets/projects/proficlais/palette_personnalisation-768.webp 768w,
                    src/assets/projects/proficlais/palette_personnalisation-1280.webp 1280w
                    "
                    sizes="
                    (max-width: 480px) 100vw,
                    (max-width: 768px) 100vw,
                    768px
                    "
                    alt="Deux versions du chatbot côte à côté, l'une en violet et l'autre en vert. Le détails des couleurs est indiqués via des annotations."
                  />
                </div>
              </Col>
            </Row>
          </div>

          {/* Développement */}
          <div className="flex flex-col gap-5">
            <Row justify="center">
              <Col sm={12} xl={7} className="flex flex-col gap-2">
                <h2>Développement</h2>
                <div className="flex flex-col gap-1">
                  <p>
                    L'interface de management et le widget ont été développés
                    avec le framework React, en utilisant Tailwind CSS pour le
                    style. La communication avec le backend s'appuie sur des
                    appels API dédiés.
                  </p>
                  <p>
                    Une version démo du widget a également été conçue, sans
                    appel d'API et reposant sur un scénario de discussion
                    prédéfini, afin de présenter le fonctionnement du chatbot
                    tout en évitant l'utilisation de ressources inutiles, dans
                    une démarche d'éco-conception.
                  </p>
                </div>
              </Col>
              <Col xl={3}></Col>
            </Row>
            <Row justify="center">
              <Col sm={12} xl={10} className="flex flex-col gap-5">
                <div className="w-full h-fit flex flex-row justify-center">
                  <div id="demo-widget" className="w-full"></div>
                </div>
              </Col>
            </Row>
          </div>

          {/* Issue du projet */}
          <div className="flex flex-col gap-5">
            <Row justify="center">
              <Col sm={12} xl={7} className="flex flex-col gap-2">
                <h2>Issue du projet</h2>
                <div className="flex flex-col gap-1">
                  <p>
                    Ce projet a été porté et financé par l'INRIA Startup Studio
                    pour une durée de 12 mois. À l'issue de cette période, le
                    porteur du projet a décidé de ne pas créer la startup et de
                    publier les travaux en open-source sur GitLab, sous la forme
                    d'un MVP. La version disponible est fonctionnelle mais
                    minimale, n'ayant pas pu bénéficier d'itérations ou de tests
                    utilisateurs.
                  </p>
                  <p>
                    Cette année d'accompagnement a entre autre pour but de mener
                    une étude de marché. Celle-ci a révéler un marché trop
                    restreint pour garantir la viabilité économique du projet.
                  </p>
                  <p>
                    Les marques d'intérêt recueillies auprès des organismes de
                    formation se sont avérées insuffisantes, ces acteurs se
                    concentrent aujourd'hui davantage sur leur communication que
                    sur la génération de leads, étape qui intervient seulement
                    après que le prospect ait déjà pris connaissance de leur
                    offre.
                  </p>
                </div>
              </Col>
              <Col xl={3}></Col>
            </Row>
          </div>
        </Container>
      </div>
    </>
  );
}

export default Proficlais;
