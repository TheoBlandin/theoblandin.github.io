import { useEffect } from "react";
import { Container, Row, Col } from "react-grid-system";

function Legals() {
  useEffect(() => {
    document.title = "Mentions légales - Théo Blandin";
  }, []);

  return (
    <Container className="py-8">
      <Row justify="center" className="">
        <Col xl={8} className="flex flex-col gap-3 mt-14">
          <h1>Mentions légales</h1>
          <section aria-labelledby="legals-1" className="flex flex-col gap-1">
            <h2 id="legals-1">Éditeur</h2>
            <p>
              Le site https://theoblandin.com est édité par Théo Blandin. <br />
              Contact : blandin.theo.44@gmail.com
            </p>
          </section>

          <section aria-labelledby="legals-2" className="flex flex-col gap-1">
            <h2 id="legals-2">Hébergeur</h2>
            <p>
              Le site https://theoblandin.com est hébergé par GitHub. <br />
              Siège social : San Francisco, Californie, États-Unis
            </p>
          </section>

          <section aria-labelledby="legals-3" className="flex flex-col gap-1">
            <h2 id="legals-3">Propriété intellectuelle</h2>
            <p>
              Ce site web est soumis à la législation française sur le droit
              d'auteur et la propriété intellectuelle. Tous les éléments du
              site, y compris, mais sans s'y limiter, les images, les
              graphismes, le texte et les logos, sont la propriété exclusive de
              Théo Blandin, sauf en ce qui concerne les marques, les logos ou
              les contenus appartenant à d'autres entreprises partenaires ou
              auteurs. La reproduction, la représentation, la transmission, la
              distribution ou l'enregistrement de tout ou partie de ces éléments
              est strictement interdite sans l'autorisation expresse de Théo
              Blandin.
            </p>
          </section>
        </Col>
      </Row>
    </Container>
  );
}

export default Legals;
