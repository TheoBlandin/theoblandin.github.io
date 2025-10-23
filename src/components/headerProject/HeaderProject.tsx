import { Col, Container, Row } from "react-grid-system";

import './HeaderProject.css';

import { ArrowLeft } from "@phosphor-icons/react";

function HeaderProject({ color, name }: { color: string, name: string }) {
  return (
    <div className="header" style={{ backgroundColor: color }}>
      <Container>
        <Row>
          <Col sm={12} className="header-content flex flex-col">
            <a
              href="/#projects"
              className="flex flex-row items-center gap-1 back-link w-fit p-3"
            >
              <ArrowLeft size={20} />
              Retour
            </a>
            <h1 className="display">{name}</h1>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default HeaderProject;
