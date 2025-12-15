import { useEffect } from "react";
import { Col, Container, Row } from "react-grid-system";

function Page404() {
  useEffect(() => {
    document.title = "Page non trouvée - Théo Blandin";
  }, []);

  return (
    <Container className="flex flex-col gap-12 py-8">
      <section aria-label="Page non trouvée" className="mt-14">
        <Row justify="center">
          <Col xl={12} className="flex flex-col gap-2">
            <h1>Oups !</h1>
            <p className="lead">Cette page n'existe pas</p>
            <a
              href="/"
              className="flex flex-row items-center gap-1 w-fit py-3 "
            >
              Retourner à l'accueil
            </a>
          </Col>
        </Row>
      </section>
    </Container>
  );
}



export default Page404;
