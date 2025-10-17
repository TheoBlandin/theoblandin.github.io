import { useEffect } from "react";

import { Col, Container, Row } from "react-grid-system";

import Cloud from './../assets/cloud.svg'
import Picture from './../assets/picture.svg';
import ArrowMore from './../assets/arrow-down.svg';
import ArrowSelf from './../assets/arrow-self.svg';
import ArrowPoulpy from './../assets/arrow-poulpy.svg';

import './Home.css';

function Home() {
  useEffect(() => {
    document.title = "Théo Blandin - Portfolio";
  }, []);

  return (
    <div className="bg-blue hero-banner">
      <Container>
        <img src={Cloud} className="absolute h-auto cloud-1" alt="" />
        <img src={Cloud} className="absolute h-auto cloud-2" alt="" />
        <img src={Cloud} className="absolute h-auto cloud-3" alt="" />
        <img src={Cloud} className="absolute h-auto cloud-4" alt="" />
        <Row>
          <Col xl={7} xxl={6}>
            <div className="h-full flex flex-col justify-center gap-1">
              <h1>
                Salut, moi c'est Théo&nbsp;!
              </h1>
              <p className="catchphrase">
                UX Designer et Développeur Front-End Rennais spécialisé en accessibilité numérique
              </p>
            </div>
          </Col>
          <Col xl={5} xxl={6} style={{ textAlign: 'center' }}>
            <img className="aspect-square max-w-[470px] w-full mx-auto picture" src={Picture} alt="Auto-portrait dessiné numériquement" />
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
    </div>
  )
}

export default Home