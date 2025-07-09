import React from "react";
import './CardProject.css';
import projects from './../../assets/data/summary.json';
import { Container, Row, Col } from 'react-grid-system';
import { Link } from 'react-router-dom';
import { ReactComponent as Forward } from './../../assets/icons/forward.svg'
import { getThumbnailPath } from './../../utils/getThumbnail';
import { getDeviceMockup } from "../../utils/getDeviceMockup";

function CardProject(props) {
    const project = projects[props.project]
    const device = project.device
    const thumbnailPath = getThumbnailPath(props.project);
    const mockupThumbnail = getDeviceMockup(device, thumbnailPath, "Capture d'écran du projet " + project.displayName)

    return (
        <Container className="mb-4">
            <Row justify="center">
                <Col xl={10}>
                    <Link to={project.linkName}>
                        <div className="card" style={{ backgroundColor: `var(--${props.project})` }}>
                            <div className="d-flex flex-column justify-content-between info-project">
                                <div>
                                    <div className="d-flex flex-wrap c-gap-4">
                                        {project.tags.map((tag, index) => (
                                            <span key={index} className="small">#{tag}</span>
                                        ))}
                                    </div>
                                    <p className="display-M project-title mb-3">{project.displayName}</p>
                                    <p>{project.description}</p>
                                </div>
                                <div className="d-flex flex-row justify-content-end">
                                    <div className="cta-project d-flex flex-row align-items-center gap-2">
                                        <span className="lead"><strong>En savoir plus</strong></span>
                                        <Forward className="icon-L icon-dark" />
                                    </div>
                                </div>
                            </div>
                            <div className={`thumbnail
                                    ${device === 'mobile' ? 'mobile' : ''}
                                    ${device === 'small-desktop' ? 'small' : ''}
                                    ${device === 'large-desktop' ? 'large' : ''}`
                            }>
                                {mockupThumbnail}
                            </div>
                        </div>
                    </Link>
                </Col>

            </Row>

        </Container >
    )
}

export default CardProject;