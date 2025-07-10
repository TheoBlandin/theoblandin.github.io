import React from "react";
import { useEffect } from "react";
import './legals.css'
import { Container, Row, Col } from 'react-grid-system';

export default function Legals() {
    useEffect(() => {
        document.title = "Mentions légales - Théo Blandin";
    }, []);

    return (
        <Container>
            <section aria-label="Mentions légales" className="legals mb-5">
                <Row justify="center" className="h-100">
                    <Col xl={6} className="d-flex flex-column gap-5">
                        <div className="d-flex flex-column gap-3">
                            <span className="lead"><strong>Éditeur</strong></span>
                            <p>
                                Le site https://theoblandin.com est édité par Théo Blandin. <br />
                                Contact : blandin.theo.44@gmail.com
                            </p>
                        </div>

                        <div className="d-flex flex-column gap-3">
                            <span className="lead"><strong>Hébergeur</strong></span>
                            <p>
                                Le site https://theoblandin.com est hébergé par GitHub. <br />
                                Siège social : San Francisco, Californie, États-Unis
                            </p>
                        </div>

                        <div className="d-flex flex-column gap-3">
                            <span className="lead"><strong>Propriété intellectuelle</strong></span>
                            <p>
                                Ce site web est soumis à la législation française sur le droit d'auteur et la propriété intellectuelle. Tous les éléments du site, y compris, mais sans s'y limiter, les images, les graphismes, le texte et les logos, sont la propriété exclusive de Théo Blandin, sauf en ce qui concerne les marques, les logos ou les contenus appartenant à d'autres entreprises partenaires ou auteurs. La reproduction, la représentation, la transmission, la distribution ou l'enregistrement de tout ou partie de ces éléments est strictement interdite sans l'autorisation expresse de Théo Blandin.
                            </p>
                        </div>
                    </Col>
                </Row>
            </section>
        </Container >
    )
}