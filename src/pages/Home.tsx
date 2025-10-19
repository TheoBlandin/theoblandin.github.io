import { useEffect } from "react";

import { Col, Container, Row } from "react-grid-system";

import Cloud from "./../assets/home/cloud.svg";
import Picture from "./../assets/home/picture.svg";
import ArrowMore from "./../assets/home/arrow-down.svg";
import ArrowSelf from "./../assets/home/arrow-self.svg";
import ArrowPoulpy from "./../assets/home/arrow-poulpy.svg";

import projectsJSON from "./../assets/projects.json";

import "./Home.css";

import CardProject from "../components/cardProject/CardProject";

import type { Project } from "../types/types";

function Home() {
  const projects: Project[] = projectsJSON["projects"];

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
          <img src={Cloud} className="absolute h-auto cloud-1" alt="" />
          <img src={Cloud} className="absolute h-auto cloud-2" alt="" />
          <img src={Cloud} className="absolute h-auto cloud-3" alt="" />
          <img src={Cloud} className="absolute h-auto cloud-4" alt="" />
          <Row>
            <Col xl={7} xxl={6}>
              <div className="h-full flex flex-col justify-center gap-1">
                <h1 id="hero-title">Salut, moi c'est Théo&nbsp;!</h1>
                <p className="catchphrase">
                  UX Designer et Développeur Front-End Rennais spécialisé en
                  accessibilité numérique
                </p>
              </div>
            </Col>
            <Col xl={5} xxl={6} style={{ textAlign: "center" }}>
              <img
                className="aspect-square max-w-[470px] w-full mx-auto picture"
                src={Picture}
                alt="Auto-portrait dessiné numériquement"
              />
            </Col>
          </Row>
          <Row justify="center">
            <a href="#projects">
              <img src={ArrowMore} alt="Aller à la section principale" />
            </a>
          </Row>

          <img className="arrow-self absolute" src={ArrowSelf} alt="" />
          <img className="arrow-poulpy absolute" src={ArrowPoulpy} alt="" />
          <span className="lead name-poulpy absolute">Poulpy</span>
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
              <Container className="!p-0" >
                <Row className="gap-y-6">
                  {projects.map((project, index) => (
                    <Col key={index} sm={12} lg={6}>
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
