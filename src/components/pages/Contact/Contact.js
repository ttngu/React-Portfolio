import React from 'react'
import { Container, Row } from 'react-bootstrap'
import './Contact.css'


function Contact() {
    return (
        <Container>
            <Row xs={12}>
                <div className="LgColorBlock">
                </div>
                {/* <div className="SmColorBlock">
                </div> */}
                <div className="Image">
                </div>
                <div className="ContactTxt">
                    <h4>Get In Touch</h4><hr></hr>
                    <ul>Phone: 206.639.3200</ul>
                    <ul>Email: tammyn.137@gmail.com</ul>
                    <ul><a href={'https://github.com/ttngu'}>GitHub</a></ul>
                    <ul><a href={'https://www.linkedin.com/in/tamngu/'}>LinkedIn</a></ul>
                   

                </div>
            </Row>

        </Container>

            

    )
}

export default Contact
