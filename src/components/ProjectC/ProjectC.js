import React from 'react'
import { Col, Container, Row, Card, Image } from 'react-bootstrap';
import './ProjectC.css'
import '../../images/ProjectC.png'

const ScreenCap = require('../../images/ProjectC.png');

function ProjectC() {
    return (
        <div>
            <Container>
                <div className="BgBlockTopC">
                </div>
                <div className="PortImgTopLC">
                    <Image src={ScreenCap.default}/>
                </div>
                    
                <div className="SmBlockTopC">
                    <div className="PortTextTopLC">
                    <h5>PostIt</h5>
                    A holistic self-care platform for men to learn and explore techniques and products.
                    <hr></hr>
                    <ul>HTML/CSS, Javascript, MySql, React, Node.js, Express, AJAX, Bootstrap, AWS S3</ul>
                    <ul>GitHub: <a href={'https://github.com/candygarcia014/PostIt'} className="RepoLink">Link Here</a></ul>
                    <ul>Deployed: Currently in Development</ul>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default ProjectC
