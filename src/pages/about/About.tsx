import { useEffect } from "react";
import { Col, Container, Row } from "react-grid-system";

import {
  ClipboardText,
  Devices,
  Ear,
  Eye,
  Lightbulb,
  Notebook,
  RainbowCloud,
  TestTube,
} from "@phosphor-icons/react";

import "./About.css";

import { getAsset } from "../../utils/getAsset";

function About() {
  useEffect(() => {
    document.title = "À propos - Théo Blandin";
  }, []);

  return (
    <Container className="flex flex-col gap-12 py-8">
      <section aria-label="À propos de moi" className="mt-14">
        <Row justify="center">
          <Col sm={12} xl={10} className="flex flex-col gap-2">
            <h2>À propos de moi</h2>
            <div className="columns-1 lg:columns-2 gap-5 space-y-1">
              <p>
                Je suis passionné par la conception orientée utilisateur et
                m'efforce de créer des interfaces intuitives, esthétiques et
                accessibles. Ingénieur avec un an d'expérience et diplômé en
                informatique à l'ENSIM, je possède une double spécialisation en
                UX Design et en développement front-end.
              </p>
              <p>
                J'accorde également une grande importance à l'accessibilité
                numérique, domaine que j'ai découvert lors de mon stage chez
                Vially à Dublin, une entreprise spécialisée dans ce secteur. Je
                suis également de près les travaux du collectif Designers
                Éthiques, afin de poursuivre ma formation sur l'accessibilité et
                d'en apprendre davantage sur l'éco-conception.
              </p>
              <p>
                Grâce à mes études, mes expériences, mais aussi mon goût pour la
                pédagogie et ma sensibilité empathique et créative, j'ai
                développé un profil polyvalent qui m'offre un regard unique sur
                les problématiques rencontrées au quotidien dans mon travail.
              </p>
              <p>
                J'apprécie particulièrement l'environnement startup pour la
                diversité des missions et l'autonomie qu'il offre. J'ai
                découvert cet univers lors de mon contrat d'ingénieur au sein de
                l'INRIA Startup Studio, où j'ai accompagné un porteur de projet
                dans la création de sa startup pendant 12 mois. Cette expérience
                m'a beaucoup apporté et m'a donné envie d'évoluer davantage dans
                ce riche écosystème.
              </p>
              <p>
                En dehors du travail, je regarde des films (particulièrement des
                films d'animation), je pratique divers loisirs créatifs, je
                cuisine, je lis, et je nage chaque semaine à la piscine
                Saint-Georges. Je suis également chef de projet, UX designer et
                développeur front-end sur un projet bénévole. Mon équipe et moi
                somme chargé du maintient et du développement d'un site web
                immersif et communautaire. L'équipe est constitué d'UX
                designers, de graphistes et de développeurs.
              </p>
              <p>
                À l'écoute de nouvelles opportunités, je vous invite à me
                contacter sur{" "}
                <a
                  href="https://www.linkedin.com/in/th%C3%A9o-blandin/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>{" "}
                pour en savoir plus sur mon parcours, mon profil et mes projets.
              </p>
              <br />
              <p className="w-full text-right">Théo</p>
            </div>
          </Col>
        </Row>
      </section>

      <section aria-label="Outils et compétences">
        <Row justify="center">
          <Col sm={12} xl={10} className="flex flex-col gap-2">
            <h2>Outils et compétences</h2>
            <div className="flex flex-col lg:flex-row gap-5">
              <div className="bg-light-yellow flex flex-col items-center p-3 gap-3 rounded-lg flex-1">
                <h3>UX Design</h3>
                <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-2">
                  <div className="tools-container">
                    <img
                      src={getAsset("/src/assets/about/tools/figma.svg")}
                      alt=""
                      className="flex-shrink-0"
                    />
                    Figma
                  </div>
                  <div className="tools-container">
                    <Lightbulb size={28} className="flex-shrink-0" />
                    Design Thinking
                  </div>
                  <div className="tools-container">
                    <Ear size={28} className="flex-shrink-0" />
                    Empathie
                  </div>
                  <div className="tools-container">
                    <TestTube size={28} className="flex-shrink-0" />
                    Tests utilisateurs
                  </div>
                  <div className="tools-container">
                    <ClipboardText size={28} className="flex-shrink-0" />
                    Entretiens utilisateurs
                  </div>
                  <div className="tools-container">
                    <Eye size={28} className="flex-shrink-0" />
                    Esprit d'analyse
                  </div>
                  <div className="tools-container">
                    <RainbowCloud size={28} className="flex-shrink-0" />
                    Créativité
                  </div>
                  <div className="tools-container">
                    <Notebook size={28} className="flex-shrink-0" />
                    Mon carnet
                  </div>
                </div>
              </div>
              <div className="bg-light-orange flex flex-col items-center p-3 gap-3 rounded-lg flex-1">
                <h3>Développement</h3>
                <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-2 items-stretch">
                  <div className="tools-container">
                    <img
                      src={getAsset("/src/assets/about/tools/html.svg")}
                      alt=""
                      className="flex-shrink-0"
                    />
                    HTML
                  </div>
                  <div className="tools-container">
                    <img
                      src={getAsset("/src/assets/about/tools/css.svg")}
                      alt=""
                      className="flex-shrink-0"
                    />
                    CSS
                  </div>
                  <div className="tools-container">
                    <img
                      src={getAsset("/src/assets/about/tools/javascript.svg")}
                      alt=""
                      className="flex-shrink-0"
                    />
                    JavaScript
                  </div>
                  <div className="tools-container">
                    <img
                      src={getAsset("/src/assets/about/tools/typescript.svg")}
                      alt=""
                      className="flex-shrink-0"
                    />
                    TypeScript
                  </div>
                  <div className="tools-container">
                    <img
                      src={getAsset("/src/assets/about/tools/react.svg")}
                      alt=""
                      className="flex-shrink-0"
                    />
                    React
                  </div>
                  <div className="tools-container">
                    <img
                      src={getAsset("/src/assets/about/tools/angular.svg")}
                      alt=""
                      className="flex-shrink-0"
                    />
                    Angular
                  </div>
                  <div className="tools-container">
                    <img
                      src={getAsset("/src/assets/about/tools/tailwind.svg")}
                      alt=""
                      className="flex-shrink-0"
                    />
                    Tailwind CSS
                  </div>
                  <div className="tools-container">
                    <Devices size={28} className="flex-shrink-0" />
                    Design responsive
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </section>

      <section aria-label="En quelques photos" className="flex flex-col gap-2">
        <Row justify="center">
          <Col sm={12} xl={10} >
            <h2>En quelques photos</h2>
          </Col>
        </Row>
        <Row justify="center">
          <Col sm={12} xl={10} className="flex flex-col lg:flex-row gap-3 lg:gap-5">
            <div className="flex flex-row gap-3 lg:gap-5">
              <div className="flex flex-col gap-3 lg:gap-5">
                <img src={getAsset("/src/assets/about/photos/pool.png")} alt="Piscine municipale vide" />
                <img src={getAsset("/src/assets/about/photos/puzzle.png")} alt="Puzzle entamé" />
              </div>

              <div className="flex flex-col gap-3 lg:gap-5">
                <img src={getAsset("/src/assets/about/photos/sea.png")} alt="Vagues qui s'écrasent sur des rochers" />
                <img src={getAsset("/src/assets/about/photos/cooking.png")} alt="Madeleines avec une coque en chocolat" />
              </div>
            </div>

            <div className="flex flex-row gap-3 lg:gap-5">
              <div className="flex flex-col gap-3 lg:gap-5">
                <img src={getAsset("/src/assets/about/photos/street_art.png")} alt="Photo d'un street art où on voit un ours demander un calin" />
                <img src={getAsset("/src/assets/about/photos/cat.png")} alt="Gros plan d'un chat blanc qui dort" />
              </div>

              <div className="flex flex-col gap-3 lg:gap-5">
                <img src={getAsset("/src/assets/about/photos/crafting.png")} alt="Citrouille en papier" />
                <img src={getAsset("/src/assets/about/photos/ice_cream.png")} alt="Cornet de glace tenu à la main du point de vue du photographe" />
              </div>
            </div>
          </Col>
        </Row>
      </section>
    </Container>
  );
}

export default About;
