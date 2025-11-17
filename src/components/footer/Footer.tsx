import { Col, Container, Row } from "react-grid-system";
import { Link } from "react-router-dom";

import './Footer.css';
import { DownloadSimple, LinkedinLogo } from "@phosphor-icons/react";

function Footer() {
  return (
    <footer className="bg-surface py-8">
      <Container className="w-full">
        <Row justify="between">
          <Col lg={3} xxl={2} className="col-footer flex flex-col first-col">
            <span>Théo Blandin ©2025</span>
            <Link to="/legals"><span>Mentions légales</span></Link>
          </Col>
          <Col lg={3} xxl={2} className="col-footer flex flex-col">
            <a href="https://www.linkedin.com/in/th%C3%A9o-blandin/"
              aria-label="Visitez mon profil LinkedIn" target="_blank" rel="noopener noreferrer">
              <div className="flex flex-row items-center gap-2">
                <LinkedinLogo size={20} className="t-default" />
                <span>LinkedIn</span>
              </div>
            </a>
            <a href="/assets/CV_Theo_Blandin.pdf" aria-label="Visualiser mon CV"
              target="_blank" rel="noopener noreferrer">
              <div className="flex flex-row items-center gap-2">
                <DownloadSimple size={20} className="t-default" />
                <span>CV</span>
              </div>
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer;