import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'
import './Contact.css'
import '../../../images/Sheets.jpg'

const Sheets = require('../../../images/Sheets.jpg');



function Contact() {
    return (
        <Container>
            <Row>
                <Col xs={12} className="ContactTitleCol">
                    <div className="ContactTitle">
                    CONTACT
                    </div>
                    <div className="ContactHrLine">
                    </div>
                </Col>
            </Row>
            <Row xs={12}>
                <div className="LgColorBlock">
                </div>
                {/* <div className="SmColorBlock">
                </div> */}
                <div className="Image">
                    <Image src={Sheets.default} />
                </div>
                <div className="ContactTxt">
                    <h4>Get In Touch</h4><hr></hr>
                    <ul><a href={'mailto:tammyn137@gmail.com'} className="Socials">Email</a></ul>
                    <ul><a href={'https://github.com/ttngu'} className="Socials">GitHub</a></ul>
                    <ul><a href={'https://www.linkedin.com/in/tamngu/'} className="Socials">LinkedIn</a></ul>
                </div>

            </Row>

        </Container>

            

    )
}

export default Contact
