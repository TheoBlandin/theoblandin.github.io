import { useEffect, useRef, useState } from "react";

import HeaderProject from "../../components/headerProject/HeaderProject";
import PresentationProject from "../../components/presentationProject/PresentationProject";

import Data from "./../../assets/projects/manger_de_saison/project.json";
import type { Presentation } from "../../types/types";

import { Col, Container, Row } from "react-grid-system";

function MangerDeSaison() {
  useEffect(() => {
    document.title = "Manger de saison - Théo Blandin";
  }, []);

  // calculate mockups container height
  const showcaseRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState<number | null>(null);

  useEffect(() => {
    if (showcaseRef.current) {
      const resizeObserver = new ResizeObserver(() => {
        setHeight(showcaseRef.current?.offsetHeight || null);
      });
      resizeObserver.observe(showcaseRef.current);
      return () => resizeObserver.disconnect();
    }
  }, []);

  const presentationProject: Presentation = Data;

  return (
    <>
      <HeaderProject color="#E4F2E4" name="Manger de saison" />

      <div className="my-8 flex flex-col gap-8">
        <PresentationProject project={presentationProject} />

        {/* Visuals */}
        <div className="w-full flex flex-row justify-center">
          <div className="flex flex-col gap-3 px-3 w-full max-w-[1440px]">
            <div className="flex flex-col md:flex-row gap-3">
              <div
                className="bg-surface flex-1 flex items-center justify-center py-4 px-10 md:px-8 lg:px-0"
                style={{ height: height ?? "auto" }}
              >
                <img
                  className="w-full lg:w-auto lg:h-full"
                  src="src/assets/projects/manger_de_saison/mockup-1.png"
                  alt=""
                />
              </div>
              <div
                ref={showcaseRef}
                className="flex-1 hidden lg:grid grid-cols-2 gap-3 h-fit"
              >
                <img
                  src="src/assets/projects/manger_de_saison/fruit-1.png"
                  alt=""
                />
                <img
                  src="src/assets/projects/manger_de_saison/fruit-2.png"
                  alt=""
                />
                <img
                  src="src/assets/projects/manger_de_saison/fruit-3.png"
                  alt=""
                />
                <img
                  src="src/assets/projects/manger_de_saison/fruit-4.png"
                  alt=""
                />
                <img
                  src="src/assets/projects/manger_de_saison/fruit-5.png"
                  alt=""
                />
                <img
                  src="src/assets/projects/manger_de_saison/fruit-6.png"
                  alt=""
                />
              </div>
              <div
                className="bg-surface flex-1 flex items-center justify-center py-4 px-10 md:px-8 lg:px-0"
                style={{ height: height ?? "auto" }}
              >
                <img
                  className="w-full lg:w-auto lg:h-full"
                  src="src/assets/projects/manger_de_saison/mockup-2.png"
                  alt=""
                />
              </div>
            </div>
            <div className="flex-1 grid lg:hidden grid-cols-2 md:grid-cols-3 gap-3 h-fit">
              <img
                src="src/assets/projects/manger_de_saison/fruit-1.png"
                alt=""
              />
              <img
                src="src/assets/projects/manger_de_saison/fruit-2.png"
                alt=""
              />
              <img
                src="src/assets/projects/manger_de_saison/fruit-3.png"
                alt=""
              />
              <img
                src="src/assets/projects/manger_de_saison/fruit-4.png"
                alt=""
              />
              <img
                src="src/assets/projects/manger_de_saison/fruit-5.png"
                alt=""
              />
              <img
                src="src/assets/projects/manger_de_saison/fruit-6.png"
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
                    En 2019, près de deux adultes sur trois n'atteignaient pas
                    les recommandations nutritionnelles (Source : CREDOC, CCAF,
                    2019).
                  </p>
                  <p>
                    Manger des aliments de saison est, en plus d'un impératif
                    écologique, un moyen d'accéder à des produits riches en
                    nutriments, savoureux, et bien souvent plus économiques.
                  </p>
                  <p className="bold">
                    Comment pourrions-nous accompagner les utilisateurs dans une
                    consommation plus responsable des fruits et légumes, tout en
                    les encourageant à en intégrer davantage dans leur
                    alimentation ?
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
                    <i>Manger de saison</i> s'articule autour de trois points
                    clés :
                  </p>
                  <ul className="list-disc list-outside ms-8 flex flex-col gap-1">
                    <li>
                      <span className="bold">Un accès permanent</span> : le
                      calendrier est consultable directement depuis son
                      téléphone, sans avoir besoin d'une connexion Internet.
                    </li>
                    <li>
                      <span className="bold">Des visuels engageants</span> : les
                      illustrations sont douces et colorées, pour donner envie
                      de redécouvrir des aliments qu'on a pu laisser de côté.
                    </li>
                    <li>
                      <span className="bold">Une expérience personnalisée</span>{" "}
                      : l'utilisateur peut renseigner ses préférences afin de
                      filtrer les aliments affichés et d'adapter le contenu à
                      ses goûts.
                    </li>
                  </ul>
                </div>
              </Col>
              <Col xl={3}></Col>
            </Row>
          </div>

          {/* Maquettage */}
          <div className="flex flex-col gap-5">
            <Row justify="center">
              <Col sm={12} xl={7} className="flex flex-col gap-2">
                <h2>Maquettage</h2>
                <div className="flex flex-col gap-1">
                  <p>
                    Les premiers brouillons ont été réalisés à la main, avant
                    d'être mis au propre sur Figma.
                  </p>
                </div>
              </Col>
              <Col xl={3}></Col>
            </Row>
            <Row justify="center">
              <Col sm={12} xl={10} className="flex flex-col gap-5">
                <div className="w-full h-fit flex flex-row justify-center">
                  <img
                    src="src/assets/projects/manger_de_saison/hand_drawn.png"
                    alt="Croquis à la main présentant les premières idées d'interface et de fonctionnalités pour le projet."
                  />
                </div>
                <div className="w-full h-fit flex flex-row justify-center">
                  <img
                    src="src/assets/projects/manger_de_saison/figma.png"
                    alt="Maquettes Figma haute fidélité, accompagnées de commentaires sur le fonctionnement de l'application."
                  />
                </div>
              </Col>
            </Row>
          </div>

          {/* Illustrations */}
          <div className="flex flex-col gap-5">
            <Row justify="center">
              <Col sm={12} xl={7} className="flex flex-col gap-2">
                <h2>Illustrations</h2>
                <div className="flex flex-col gap-1">
                  <p>
                    Chaque illustration est réalisée au format SVG sur le
                    logiciel open source Inkscape.
                  </p>
                </div>
              </Col>
              <Col xl={3}></Col>
            </Row>
            <Row justify="center">
              <Col sm={12} xl={10} className="flex flex-col gap-5">
                <div className="w-full h-fit flex flex-row justify-center">
                  <img
                    src="src/assets/projects/manger_de_saison/inkscape.png"
                    alt="Capture d'écran d'Inkscape montrant la création de l'illustration d'une paire de cerises."
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
                  <p>L'application a été développée avec Flutter.</p>
                  <p>
                    Les données des utilisateurs sont directement stockées sur
                    leur appareil.
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

export default MangerDeSaison;
