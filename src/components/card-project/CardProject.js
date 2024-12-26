import React from "react";
import './CardProject.css';
import projects from './../../assets/projects.json';
import { Container, Row, Col } from 'react-grid-system';
import { Link } from 'react-router-dom';
import { ReactComponent as Forward } from './../../assets/icons/forward.svg'

function CardProject(props) {
    const project = projects[props.project]
    const device = project.device

    const imagesContext = require.context(
        './../../assets/screens/',
        true,
        /\.svg$/
    );

    const getProjectImages = (projectName) => {
        const projectPath = `./${projectName}/thumbnail/`;
        return {
            1280: imagesContext(`${projectPath}1280px.svg`),
            1024: imagesContext(`${projectPath}1024px.svg`),
            768: imagesContext(`${projectPath}768px.svg`),
            480: imagesContext(`${projectPath}480px.svg`),
            320: imagesContext(`${projectPath}320px.svg`),
        };
    };

    const images = getProjectImages(props.project);

    /**
     * @param {string} projectName 
     * @returns Project name without accents, in lower-case, with - instead of space characters
     */
    function generatePageLink(projectName) {
        return projectName.toLowerCase().replace(/\s+/g, '-').normalize("NFD").replace(/[\u0300-\u036f]/g, "") 
    };


    return (
        <Link to={`/${generatePageLink(project.name)}`}>
            <Container className="mb-4">
                <Row justify="center">
                    <Col xl={10}>
                        <div className="card" style={{ backgroundColor: `var(--${props.project})` }}>
                            <Row>
                                <Col lg={7} xxl={6} className="info-project">
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
                                </Col>
                                <Col lg={5} xxl={6}
                                    className={`thumbnail
                                    ${device === 'mobile' ? 'mobile' : ''}
                                    ${device === 'small-desktop' ? 'small' : ''}
                                    ${device === 'large-desktop' ? 'large' : ''}`
                                    }>
                                    <img
                                        src={images[1280]}
                                        srcSet={`
                                    ${images[1280]} 449.66w,
                                    ${images[1024]} 305w,
                                    ${images[768]} 270.83w,
                                    ${images[480]} 408w,
                                    ${images[320]} 258w
                                `}
                                        sizes="
                                    (max-width: 479px) 258px,
                                    (max-width: 767px) 408px,
                                    (max-width: 1023px) 270.83px,
                                    (max-width: 1279px) 305px,
                                    449.66px"
                                        alt={`Capture d'écran du projet ${project.name}`}
                                    />
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Link>
    )
}

export default CardProject;