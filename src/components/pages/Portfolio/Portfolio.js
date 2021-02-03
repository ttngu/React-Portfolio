import React from 'react';
import { Col, Container, Row, Card } from 'react-bootstrap';
import ProjectA from '../../ProjectA/ProjectA';
import ProjectB from '../../ProjectB/ProjectB';
import ProjectC from '../../ProjectC/ProjectC';
// import ProjectCard from '../../ProjectCard/ProjectCard';
import './Portfolio.css'
// import Projects from '../../../Projects.json'

function Portfolio() {
    return (
        <div className="Container">
            <Row>
                <Col xs={12} className="PortTitleCol">
                    <div className="PortTitle">
                    PORTFOLIO
                    </div>
                    <div className="PortHrLine">
                    </div>
                </Col>
            </Row>


            {/* Top Row */}
            <Row >
                <ProjectA/>
                {/* <ProjectCard/> */}


            </Row>


            {/* Second Row of Portfolio items */}
            <Row>
              <ProjectB/>


            </Row>

            {/* Third Row of Portfolio items */}
            <Row>
              <ProjectC/>


            </Row>
        </div>
    )
}

export default Portfolio
