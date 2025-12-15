import { useEffect, useRef, useState } from "react";

import HeaderProject from "../components/headerProject/HeaderProject";
import PresentationProject from "../components/presentationProject/PresentationProject";

import Data from "../assets/projects/manger_de_saison/project.json";
import type { Presentation } from "../types/types";

import { Col, Container, Row } from "react-grid-system";

import { getAsset } from "../utils/getAsset";

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
                  loading="lazy"
                  className="w-full lg:w-auto lg:h-full"
                  src={getAsset("/src/assets/projects/manger_de_saison/mockup_1-1280.webp")}
                  srcSet={`
                    ${getAsset("/src/assets/projects/manger_de_saison/mockup_1-480.webp")} 480w,
                    ${getAsset("/src/assets/projects/manger_de_saison/mockup_1-768.webp")} 768w,
                    ${getAsset("/src/assets/projects/manger_de_saison/mockup_1-1280.webp")} 1280w
                  `}
                  sizes="(max-width: 768px) 100vw, 768px"
                  alt=""
                />
              </div>
              <div
                ref={showcaseRef}
                className="flex-1 grid grid-cols-2 gap-3 h-fit"
              >
                <img
                  loading="lazy"
                  src={getAsset("/src/assets/projects/manger_de_saison/fruit_1-1280.webp")}
                  srcSet={`
                    ${getAsset("/src/assets/projects/manger_de_saison/fruit_1-480.webp")} 480w,
                    ${getAsset("/src/assets/projects/manger_de_saison/fruit_1-768.webp")} 768w,
                    ${getAsset("/src/assets/projects/manger_de_saison/fruit_1-1280.webp")} 1280w
                  `}
                  sizes="(max-width: 768px) 100vw, 768px"
                  alt=""
                />
                <img
                  loading="lazy"
                  src={getAsset("/src/assets/projects/manger_de_saison/fruit_2-1280.webp")}
                  srcSet={`
                    ${getAsset("/src/assets/projects/manger_de_saison/fruit_2-480.webp")} 480w,
                    ${getAsset("/src/assets/projects/manger_de_saison/fruit_2-768.webp")} 768w,
                    ${getAsset("/src/assets/projects/manger_de_saison/fruit_2-1280.webp")} 1280w
                  `}
                  sizes="(max-width: 768px) 100vw, 768px"
                  alt=""
                />
                <img
                  loading="lazy"
                  src={getAsset("/src/assets/projects/manger_de_saison/fruit_3-1280.webp")}
                  srcSet={`
                    ${getAsset("/src/assets/projects/manger_de_saison/fruit_3-480.webp")} 480w,
                    ${getAsset("/src/assets/projects/manger_de_saison/fruit_3-768.webp")} 768w,
                    ${getAsset("/src/assets/projects/manger_de_saison/fruit_3-1280.webp")} 1280w
                  `}
                  sizes="(max-width: 768px) 100vw, 768px"
                  alt=""
                />
                <img
                  loading="lazy"
                  src={getAsset("/src/assets/projects/manger_de_saison/fruit_4-1280.webp")}
                  srcSet={`
                    ${getAsset("/src/assets/projects/manger_de_saison/fruit_4-480.webp")} 480w,
                    ${getAsset("/src/assets/projects/manger_de_saison/fruit_4-768.webp")} 768w,
                    ${getAsset("/src/assets/projects/manger_de_saison/fruit_4-1280.webp")} 1280w
                  `}
                  sizes="(max-width: 768px) 100vw, 768px"
                  alt=""
                />
                <img
                  loading="lazy"
                  src={getAsset("/src/assets/projects/manger_de_saison/fruit_5-1280.webp")}
                  srcSet={`
                    ${getAsset("/src/assets/projects/manger_de_saison/fruit_5-480.webp")} 480w,
                    ${getAsset("/src/assets/projects/manger_de_saison/fruit_5-768.webp")} 768w,
                    ${getAsset("/src/assets/projects/manger_de_saison/fruit_5-1280.webp")} 1280w
                  `}
                  sizes="(max-width: 768px) 100vw, 768px"
                  alt=""
                />
                <img
                  loading="lazy"
                  src={getAsset("/src/assets/projects/manger_de_saison/fruit_6-1280.webp")}
                  srcSet={`
                    ${getAsset("/src/assets/projects/manger_de_saison/fruit_6-480.webp")} 480w,
                    ${getAsset("/src/assets/projects/manger_de_saison/fruit_6-768.webp")} 768w,
                    ${getAsset("/src/assets/projects/manger_de_saison/fruit_6-1280.webp")} 1280w
                  `}
                  sizes="(max-width: 768px) 100vw, 768px"
                  alt=""
                />
              </div>
              <div
                className="bg-surface flex-1 flex items-center justify-center py-4 px-10 md:px-8 lg:px-0"
                style={{ height: height ?? "auto" }}
              >
                <img
                  loading="lazy"
                  className="w-full lg:w-auto lg:h-full"
                  src={getAsset("/src/assets/projects/manger_de_saison/mockup_2-1280.webp")}
                  srcSet={`
                    ${getAsset("/src/assets/projects/manger_de_saison/mockup_2-480.webp")} 480w,
                    ${getAsset("/src/assets/projects/manger_de_saison/mockup_2-768.webp")} 768w,
                    ${getAsset("/src/assets/projects/manger_de_saison/mockup_2-1280.webp")} 1280w
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
          <section aria-labelledby="manger_de_saison-section_1" className="flex flex-col gap-5">
            <Row justify="center">
              <Col sm={12} xl={7} className="flex flex-col gap-2">
                <h2 id="manger_de_saison-section_1">Problème</h2>
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
          </section>

          {/* Solution */}
          <section aria-labelledby="manger_de_saison-section_2" className="flex flex-col gap-5">
            <Row justify="center">
              <Col sm={12} xl={7} className="flex flex-col gap-2">
                <h2 id="manger_de_saison-section_2">Solution</h2>
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
          </section>

          {/* Maquettage */}
          <section aria-labelledby="manger_de_saison-section_3" className="flex flex-col gap-5">
            <Row justify="center">
              <Col sm={12} xl={7} className="flex flex-col gap-2">
                <h2 id="manger_de_saison-section_3">Maquettage</h2>
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
                    loading="lazy"
                    src={getAsset("/src/assets/projects/manger_de_saison/hand_drawn-1280.webp")}
                    srcSet={`
                      ${getAsset("/src/assets/projects/manger_de_saison/hand_drawn-480.webp")} 480w,
                      ${getAsset("/src/assets/projects/manger_de_saison/hand_drawn-768.webp")} 768w,
                      ${getAsset("/src/assets/projects/manger_de_saison/hand_drawn-1280.webp")} 1280w
                    `}
                    sizes="(max-width: 768px) 100vw, 768px"
                    alt="Croquis à la main présentant les premières idées d'interface et de fonctionnalités pour le projet."
                  />
                </div>
                <div className="w-full h-fit flex flex-row justify-center">
                  <img
                    loading="lazy"
                    src={getAsset("/src/assets/projects/manger_de_saison/figma-1280.webp")}
                    srcSet={`
                      ${getAsset("/src/assets/projects/manger_de_saison/figma-480.webp")} 480w,
                      ${getAsset("/src/assets/projects/manger_de_saison/figma-768.webp")} 768w,
                      ${getAsset("/src/assets/projects/manger_de_saison/figma-1280.webp")} 1280w
                    `}
                    sizes="(max-width: 768px) 100vw, 768px"
                    alt="Maquettes Figma haute fidélité, accompagnées de commentaires sur le fonctionnement de l'application."
                  />
                </div>
              </Col>
            </Row>
          </section>

          {/* Illustrations */}
          <section aria-labelledby="manger_de_saison-section_4" className="flex flex-col gap-5">
            <Row justify="center">
              <Col sm={12} xl={7} className="flex flex-col gap-2">
                <h2 id="manger_de_saison-section_4">Illustrations</h2>
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
                    loading="lazy"
                    src={getAsset("/src/assets/projects/manger_de_saison/inkscape-1280.webp")}
                    srcSet={`
                      ${getAsset("/src/assets/projects/manger_de_saison/inkscape-480.webp")} 480w,
                      ${getAsset("/src/assets/projects/manger_de_saison/inkscape-768.webp")} 768w,
                      ${getAsset("/src/assets/projects/manger_de_saison/inkscape-1280.webp")} 1280w
                    `}
                    sizes="(max-width: 768px) 100vw, 768px"
                    alt="Capture d'écran d'Inkscape montrant la création de l'illustration d'une paire de cerises."
                  />
                </div>
              </Col>
            </Row>
          </section>

          {/* Développement */}
          <section aria-labelledby="manger_de_saison-section_5" className="flex flex-col gap-5">
            <Row justify="center">
              <Col sm={12} xl={7} className="flex flex-col gap-2">
                <h2 id="manger_de_saison-section_5">Développement</h2>
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
          </section>
        </Container>
      </div>
    </>
  );
}

export default MangerDeSaison;
