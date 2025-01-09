import React from "react";
import './CardProject.css';
import projects from './../../assets/projects.json';
import { Container, Row, Col } from 'react-grid-system';
import { Link } from 'react-router-dom';
import { ReactComponent as Forward } from './../../assets/icons/forward.svg'
import { getThumbnailPath } from './../../utils/getThumbnail';
import { getDeviceMockup } from "../../utils/getDeviceMockup";

function CardProject(props) {
    const project = projects[props.project]
    const device = project.device
    const projectName = project.name
    const thumbnailPath = getThumbnailPath(props.project);
    const mockupThumbnail = getDeviceMockup(device, thumbnailPath, "Capture d'écran du projet " + projectName)

    /**
     * @param {string} projectName 
     * @returns Project name without accents, in lower-case, with - instead of space characters
     */
    function generatePageLink(projectName) {
        return projectName.toLowerCase().replace(/\s+/g, '-').normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    };


    return (
        <Container className="mb-4">

            <Row justify="center">
                <Col xl={10}>
                    <Link to={`/${generatePageLink(projectName)}`}>
                        <div className="card" style={{ backgroundColor: `var(--${props.project})` }}>
                            {/* <Col lg={7} xxl={6} className="info-project">
                                    <div>
                                        <div className="tags">
                                            {project.tags.map((tag, index) => (
                                                <span key={index} className="small">#{tag}</span>
                                            ))}
                                        </div>
                                        <p className="display-M project-title mb-3">{project.name}</p>
                                        <p>{project.description}</p>
                                    </div>
                                    <div className="cta-project">
                                        <span className="bold lead">En savoir plus</span>
                                        <Forward className="icon-L icon-dark" />
                                    </div>
                                </Col> */}
                            {/* <Col lg={5} xxl={6}
                                    className={`thumbnail
                                    ${device === 'mobile' ? 'mobile' : ''}
                                    ${device === 'small-desktop' ? 'small' : ''}
                                    ${device === 'large-desktop' ? 'large' : ''}`
                                    }>
                                    {mockupThumbnail}
                                </Col> */}
                            <div className="d-flex flex-column justify-content-between info-project">
                                <div>
                                    <div className="d-flex flex-wrap c-gap-4">
                                        {project.tags.map((tag, index) => (
                                            <span key={index} className="small">#{tag}</span>
                                        ))}
                                    </div>
                                    <p className="display-M project-title mb-3">{project.name}</p>
                                    <p>{project.description}</p>
                                </div>
                                <div className="cta-project d-flex flex-row justify-content-end align-items-center gap-2">
                                    <span className="bold lead">En savoir plus</span>
                                    <Forward className="icon-L icon-dark" />
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