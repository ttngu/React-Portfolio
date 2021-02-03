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
                    <p>
                        I am a Full Stack Web Developer with a passion to be at the intersection of creativity and technology.
                        <br/><br/>
                        When COVID-19 hit Seattle, my lifestyle was forced to change. I began an ice cream business, making and selling small batches of oat milk based ice cream. The decision to use oat milk was due to my own personal dietary restrictions and food allergies. My love for ice cream runs through my veins, but I noticed there was a lack of alternative options that did not taste like cardboard. I chose to create flavors that were unique to my Asian American upbringing that were also not widely available on the market. Although this was a successful business, I grew more interested in web design through creating my first online store-front. This led me to realize that I have a natural desire to create web applications with a fluid data flow and calming, intuitive UI.
                        <br/><br/>
                        I decided to pursue a formal education in Full Stack Web Development at UCLA through remote learning. This intensive certificate program was completed in 12 short weeks, clocking over 100 classroom hours, and 925+ Git commits. The course was rigorous, yet taught me that I am capable of learning, adapting and collaborating in various environments.
                        <br/><br/>
                        As a passionate, self-starter, I am excited to begin my career as a Full Stack Web Developer within a fast paced, collaborative company.




                    </p>
                    


                    </div>
                </Col>
            </Row>
                    
                

            
        </div>
    )
}

export default About
