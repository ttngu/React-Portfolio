import React from 'react'
import { Col, Container, Row, Card, Image } from 'react-bootstrap';
import './ProjectB.css'
import '../../images/ProjectB.gif'

const ScreenCap = require('../../images/ProjectB.gif');

function ProjectB() {
    return (
        <div>
            <Container>
                <div className="BgBlockTopB">
                </div>
                <div className="PortImgTopLB">
                    <Image src={ScreenCap.default}/>
                </div>
                    
                <div className="SmBlockTopB">
                    <div className="PortTextTopLB">
                    <h5>Home Cooked Comfort</h5>
                    Recipe search web application to help add some variety to your quarantine meals.
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

export default ProjectB
