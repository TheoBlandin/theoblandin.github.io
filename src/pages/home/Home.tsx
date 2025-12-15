import { useEffect } from "react";
import { Col, Container, Row } from "react-grid-system";

import { getAsset } from "../../utils/getAsset"

import projectsJSON from "./../../assets/projects.json";

import "./Home.css";

import CardProject from "../../components/cardProject/CardProject";

import type { ProjectOverview } from "../../types/types";

function Home() {
  const projects: ProjectOverview[] = projectsJSON["projects"];

  useEffect(() => {
    document.title = "Théo Blandin - Portfolio";
  }, []);

  return (
    <>
      <section
        id="hero"
        aria-labelledby="hero-title"
        className="bg-blue hero-banner"
      >
        <Container className="w-full">
          <img loading="lazy" src={getAsset('/src/assets/home/cloud.svg')} className="absolute h-auto cloud-1" alt="" />
          <img loading="lazy" src={getAsset('/src/assets/home/cloud.svg')} className="absolute h-auto cloud-2" alt="" />
          <img loading="lazy" src={getAsset('/src/assets/home/cloud.svg')} className="absolute h-auto cloud-3" alt="" />
          <img loading="lazy" src={getAsset('/src/assets/home/cloud.svg')} className="absolute h-auto cloud-4" alt="" />
          <Row>
            <Col xl={7} xxl={6}>
              <div className="h-full flex flex-col justify-center gap-1">
                <h1 id="hero-title">Salut, moi c'est Théo&nbsp;!</h1>
                <p className="catchphrase">
                  UX Designer et Développeur Front-End Rennais
                </p>
              </div>
            </Col>
            <Col xl={5} xxl={6} style={{ textAlign: "center" }}>
              <img
              loading="lazy"
                className="aspect-square max-w-[470px] w-full mx-auto picture"
                src={getAsset('/src/assets/home/picture.svg')} 
                alt="Auto-portrait dessiné numériquement"
              />
            </Col>
          </Row>
          <Row justify="center">
            <a href="#projects">
              <span className="sr-only">Aller au contenu principal</span>
              <img aria-hidden={true} loading="lazy" src={getAsset('/src/assets/home/arrow-down.svg')} />
            </a>
          </Row>

          <img loading="lazy" className="arrow-self absolute" src={getAsset('/src/assets/home/arrow-self.svg')}  alt="" />
          <img loading="lazy" className="arrow-poulpy absolute" src={getAsset('/src/assets/home/arrow-poulpy.svg')}  alt="" />
          <span aria-hidden={true} className="lead name-poulpy absolute">Poulpy</span>
        </Container>
      </section>

      <section
        id="projects"
        aria-labelledby="projects-title"
        className="my-8 flex flex-col gap-4"
        style={{ scrollMarginTop: "68px" }}
      >
        <Container className="w-full">
          <Row justify="center">
            <Col sm={12} xl={10} className="flex flex-col gap-4">
              <h2 id="projects-title">Mes projets</h2>
              <Container className="!p-0">
                <Row className="gap-y-6">
                  {projects.map((project, index) => (
                    <Col key={`project-overview-${index}`} sm={12} lg={6}>
                      <CardProject project={project} />
                    </Col>
                  ))}
                </Row>
              </Container>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Home;
