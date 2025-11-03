import { useEffect, useRef, useState } from "react";

import HeaderProject from "../../components/headerProject/HeaderProject";
import PresentationProject from "../../components/presentationProject/PresentationProject";

import Data from "./../../assets/projects/manger_de_saison/project.json";
import type { Flow, Presentation } from "../../types/types";

import "./MangerDeSaison.css";
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

  const presentationProject: Presentation = Data.presentation;
  const flowProject: Flow[] = Data.flow;

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
                />
              </div>
              <div
                ref={showcaseRef}
                className="flex-1 hidden lg:grid grid-cols-2 gap-3 h-fit"
              >
                <img src="src/assets/projects/manger_de_saison/fruit-1.png" />
                <img src="src/assets/projects/manger_de_saison/fruit-2.png" />
                <img src="src/assets/projects/manger_de_saison/fruit-3.png" />
                <img src="src/assets/projects/manger_de_saison/fruit-4.png" />
                <img src="src/assets/projects/manger_de_saison/fruit-5.png" />
                <img src="src/assets/projects/manger_de_saison/fruit-6.png" />
              </div>
              <div
                className="bg-surface flex-1 flex items-center justify-center py-4 px-10 md:px-8 lg:px-0"
                style={{ height: height ?? "auto" }}
              >
                <img
                  className="w-full lg:w-auto lg:h-full"
                  src="src/assets/projects/manger_de_saison/mockup-2.png"
                />
              </div>
            </div>
            <div className="flex-1 grid lg:hidden grid-cols-2 md:grid-cols-3 gap-3 h-fit">
              <img src="src/assets/projects/manger_de_saison/fruit-1.png" />
              <img src="src/assets/projects/manger_de_saison/fruit-2.png" />
              <img src="src/assets/projects/manger_de_saison/fruit-3.png" />
              <img src="src/assets/projects/manger_de_saison/fruit-4.png" />
              <img src="src/assets/projects/manger_de_saison/fruit-5.png" />
              <img src="src/assets/projects/manger_de_saison/fruit-6.png" />
            </div>
          </div>
        </div>

        <Container className="w-full flex flex-col gap-12">
          {flowProject.map((el, index) => {
            return (
              <div className="flex flex-col gap-5">
                <Row key={`txt-${index}`} justify="center">
                  <Col sm={12} xl={7} className="flex flex-col gap-2">
                    <h2>{el.title}</h2>
                    <div className="flex flex-col gap-1">
                      {el.text.map((p, i) => {
                        return (
                          <p
                            key={i}
                            dangerouslySetInnerHTML={{ __html: p }}
                          ></p>
                        );
                      })}
                    </div>
                  </Col>
                  <Col xl={3}></Col>
                </Row>

                {el.images && (
                  <Row key={`img-${index}`} justify="center">
                    <Col sm={12} xl={10} className="flex flex-col gap-5">
                      {el.images.map((img, i) => {
                        return (
                          <div key={i} className="w-full h-fit flex flex-row justify-center">
                            <img
                              src={img.src}
                              alt={img.alt}
                            />
                          </div>
                        );
                      })}
                    </Col>
                  </Row>
                )}
              </div>
            );
          })}
        </Container>
      </div>
    </>
  );
}

export default MangerDeSaison;
