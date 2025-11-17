import { Col, Container, Row } from "react-grid-system";
import type { Persona } from "../../types/types";

import './PersonaComponent.css'

function PersonaComponent({ persona }: { persona: Persona }) {
  return (
    <Container className="w-full py-3">
      <Row align="center">
        <Col xl={12} xxl={9} className="flex flex-col items-center gap-5 mb-5 lg:mb-0">
          <div className="flex flex-col gap-4">
            <img
              src={persona.img}
              alt=""
              className="h-[120px] md:h-[150px] lg:h-[200px] object-contain"
            />
            <span className="display-M">{persona.name}</span>
          </div>
          <div className="flex flex-wrap justify-center gap-2 lg:gap-4 lg:w-[80%]">
            {persona.features.map((feature, index) => (
              <div
                key={index}
                className={`px-4 py-1 lg:py-2 rounded-full bg-light-${persona.color}`}
              >
                {feature}
              </div>
            ))}
          </div>
          <div className="data-container">
            {Object.entries(persona.data).map(([key, data], index) => (
              <div key={index} className={`flex flex-col container-${key}`}>
                <span className="lead">
                  <strong>{data.title}</strong>
                </span>
                <span>{data.content}</span>
              </div>
            ))}
          </div>
        </Col>
        <Col xl={12} xxl={3} className="flex flex-col gap-1">
          <span className="lead">
            <strong>Biographie</strong>
          </span>
          <p>{persona.bio}</p>
        </Col>
      </Row>
    </Container>
  );
}

export default PersonaComponent;
