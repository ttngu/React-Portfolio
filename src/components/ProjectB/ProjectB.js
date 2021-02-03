import React from 'react'
import { Col, Container, Row, Card, Image } from 'react-bootstrap';
import './ProjectB.css'
import '../../images/ProjectB.gif'

const ScreenCap = require('../../images/ProjectB.gif');

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
                    <hr></hr>
                    <ul>HTML/CSS, JavaScript, jQuery, AJAX, third party API's and server side API's</ul>
                    <ul>GitHub: <a href={'https://github.com/TChristensenDrumz/Home-Cooked-Comfort'} className="RepoLink">Link Here</a></ul>
                    <ul>Deployed: <a href={'https://tchristensendrumz.github.io/Home-Cooked-Comfort/'} className="DeployedLink">Link Here</a></ul>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default ProjectA
