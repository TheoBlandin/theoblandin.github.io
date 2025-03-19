import React from "react";
import './Persona.css';
import { Container, Row, Col } from 'react-grid-system';

function Persona(props) {
    const persona = props.infoPersona
    console.log(persona)

    const imagesContext = require.context(
        './../../assets/personas/',
        true,
        /\.svg$/
    );

    const personaImages = imagesContext.keys().map(imagesContext);

    const getPersonaImage = (name) => {
        return personaImages.find((img) => img.includes(name));
    };

    const personaImg = getPersonaImage(persona.img);

    return (
        <Container className="w-100">
            <Row align="center">
                <Col xxl={9} className="d-flex flex-column align-items-center col-left-container">
                    <div className="d-flex flex-column gap-4">
                        <img src={personaImg} className="persona-image" />
                        <span className="display-M-body">{persona.name}</span>
                    </div>
                    <div className="d-flex flex-wrap justify-content-center features-container">
                        {persona.features.map((feature, index) => (
                            <div key={index} className={`px-4 py-2 br-6 bg-${persona.color}`}>{feature}</div>
                        ))}
                    </div>

                    <div className="data-container">
                        {persona.data.map((data, index) => (
                            <div key={index} className={`d-flex flex-column container-${data.name}`} >
                                <span className="lead bold">{data.title}</span>
                                <span>{data.content}</span>
                            </div>
                        ))}
                    </div>
                </Col>
                <Col xxl={3} className="d-flex flex-column gap-2 col-right-container">
                    <span className="lead bold">Biographie</span>
                    <p>{persona.bio}</p>
                </Col>
            </Row>
        </Container>
    )
}

export default Persona