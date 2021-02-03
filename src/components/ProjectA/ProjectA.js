import React from 'react'
import { Col, Container, Row, Card, Image } from 'react-bootstrap';
import './ProjectA.css'
import '../../images/ProjectA.png'

const ScreenCap = require('../../images/ProjectA.png');

function ProjectA() {
    return (
        <div>
            <Container>
                <div className="BgBlockTop">
                </div>
                <div className="PortImgTopL">
                    <Image src={ScreenCap.default}/>
                </div>
                    
                <div className="SmBlockTop">
                    <div className="PortTextTopL">
                    <h5>Quarantine Game</h5>
                    A virtual drinking card game, revolving around the theme of 2020 social distancing.
                    <li>HTML/CSS, Javascript, Socket.io, MySQL, sequelize and Bootstrap</li>
                    <li>GitHub:</li>
                    <li>Deployed:</li>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default ProjectA
