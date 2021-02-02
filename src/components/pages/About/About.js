import React from 'react'
import "./About.css"
import '../../../images/icecream.jpg'
import { Col, Row } from 'react-bootstrap'

const Icecream = require('../../../images/icecream.jpg')

function About() {
    return (
        <div className="Conatiner">
            <Row>
                <Col xs={12} className="PhotoCol">
                    <div className="AboutPhoto">
                        <img src ={Icecream.default} alt="Tammy Nguyen"/>
                    </div>
                </Col>
            </Row>

            <Row>
                <Col xs={12} className="TitleCol">
                    <div className="AboutTitle">
                        TAMMY NGUYEN
                    </div>
                    <div className="AboutHR">
                    </div>

                </Col>
            </Row>

            <Row>
                <Col xs={12} className="BioCol">
                    <div className="Text">
                    I am a Full Stack Web Developer with a passion for design and technology. After years in the sales, marketing and beauty industry, I have developed an admiration for combining technology and creativity. 
                    <br/><br/>
                    When COVID-19 hit Seattle, my lifestyle was forced to change and I was lost for a time. So, I began an ice cream business, The Cup or Cone. I made and sold small batch, homemade ice cream, with flavors inspired by my Asian American upbringing. Although this was a successful business at the time, I grew more interested in web design after creating my first online store-front. This led me to realize that I have a natural desire to create web applications with a fluid data flow and calming, intuitive UI.
                    <br/><br/>
                    After much thought and consideration, I decided to pursue a formal education in Full Stack Web Development at UCLA. This intensive certificate program was completed in 12 short weeks, clocking over 100 classroom hours, and 800+ Git commits. The course was rigorous, yet taught me that I am capable of learning anything I set my mind to.
                    <br/><br/>
                    I am excited to find my first professional job as a Full Stack Web Developer, with a company who has a fast paced, collaborative culture, I can thrive in as a passionate, self-starter.

                    </div>
                </Col>
            </Row>
                    
                

            
        </div>
    )
}

export default About
