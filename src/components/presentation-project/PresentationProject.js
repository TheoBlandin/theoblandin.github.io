import React from "react";
import './PresentationProject.css';
import { Container, Row, Col } from 'react-grid-system';
import { ReactComponent as GitHub } from './../../assets/icons/github.svg'
import { ReactComponent as Figma } from './../../assets/icons/figma_mono.svg'
import { ReactComponent as Video } from './../../assets/icons/video.svg'

function PresentationProject(props) {
    const project = props.project
    const icons = {
        'github': <GitHub className="icon-L icon-dark" />,
        'figma': <Figma className="icon-L icon-dark" />,
        'video': <Video className="icon-L icon-dark" />
    }

    return (
        <Container>
            <Row justify="center">
                <Col xl={7} xxl={6}>
                    <div className="d-flex flex-column gap-3 paragraph">
                        <span className="lead bold">Projet</span>
                        <div className="alinea">
                            {project.intro.map((el, index) => (
                                <p
                                    key={index}
                                    className="mb-2"
                                    dangerouslySetInnerHTML={{ __html: el }}
                                ></p>
                            ))}
                        </div>
                    </div>
                </Col>
                <Col xl={3}>
                    <div className="info-col d-flex">
                        <div className="sub-info-col d-flex flex-1">
                            <div className="d-flex flex-column gap-3 flex-1">
                                <span className="lead bold">Contexte</span>
                                <div className="alinea">
                                    {project.context.map((el, index) => (
                                        <p key={index} className="mb-2">
                                            {el}
                                        </p>
                                    ))}
                                </div>
                            </div>

                            <div className="d-flex flex-column gap-3 flex-1">
                                <span className="lead bold">Rôle</span>
                                <div className="alinea">
                                    {project.role.map((el, index) => (
                                        <p key={index} className="mb-2">
                                            {el}
                                        </p>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="sub-info-col d-flex flex-1">
                            <div className="d-flex flex-column gap-3 flex-1">
                                <span className="lead bold">Date</span>
                                <div className="alinea">
                                    <p className="mb-2">{project.date}</p>
                                </div>
                            </div>

                            <div className="d-flex flex-column gap-3 flex-1">
                                <span className="lead bold">{project.links.length > 1 ? "Liens" : "Lien"}</span>
                                <div className="alinea">
                                    {project.links.map((link, index) => (
                                        <p key={index} className="mb-2">
                                            <a href={link.link} target="_blank" rel="noopener noreferrer" aria-label={link.ariaLabel} className="d-flex flex-row align-items-center gap-3 w-max-fit mb-2">
                                                {icons[link.icon]}
                                                <span>{link.label}</span>
                                            </a>
                                        </p>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container >
    )
}

export default PresentationProject