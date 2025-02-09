import React from "react";
import './HeaderProject.css';
import { Container, Row, Col } from 'react-grid-system';

function HeaderProject(props) {
    const project = props.project
    const bgColor = 'bg-' + project.linkName;

    return (
        <div className={`${bgColor} header`}>
            <Container>
                <Row>
                    <Col sm={12} className="header-content d-flex flex-column">
                        <a href="/#projects" className="d-inline-flex flex-row align-items-center back-link">
                            <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>arrow_back</span>
                            &nbsp;Retour aux projets
                        </a>
                        <span className="display-L">{project.displayName}</span>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default HeaderProject