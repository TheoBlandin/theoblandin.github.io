import { Col, Container, Row } from "react-grid-system";

import type { Presentation } from "../../types/types";
import { ArrowSquareOut } from "@phosphor-icons/react";

function PresentationProject({ project }: { project: Presentation }) {
  return (
    <Container className="w-full flex flex-col gap-4">
      <Row justify="center">
        <Col sm={12} xl={10}>
          <h2>Projet</h2>
        </Col>
      </Row>
      <Row justify="center">
        <Col sm={12} xl={5} className="flex flex-col gap-1 mb-3">
          {project.intro.map((el, index) => {
            return <p key={index} dangerouslySetInnerHTML={{ __html: el }}></p>;
          })}
        </Col>
        <Col sm={0} xl={1}></Col>
        <Col sm={12} xl={4}>
          <div className="grid grid-cols-2 gap-6 w-full">
            <div className="flex flex-col gap-2">
              <span className="lead bold">Contexte</span>
              <div className="flex flex-col gap-1">
                {project.context.map((el, index) => {
                  return <span key={index}>{el}</span>;
                })}
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <span className="lead bold">Outils</span>
              <div className="flex flex-col gap-1">
                {project.tools.map((el, index) => {
                  return <span key={index}>{el}</span>;
                })}
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <span className="lead bold">Rôle</span>
              <div className="flex flex-col gap-1">
                {project.role.map((el, index) => {
                  return <span key={index}>{el}</span>;
                })}
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <span className="lead bold">Liens</span>
              <div className="flex flex-col gap-1">
                {project.links.map((el, index) => {
                  return (
                    <a
                      href={el.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      key={index}
                      className="flex flex-row items-center gap-1 back-link w-fit"
                    >
                      {el.label}
                      <ArrowSquareOut size={20} />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default PresentationProject;
