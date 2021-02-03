import React from 'react';
import { Col, Container, Row, Card } from 'react-bootstrap';
import ProjectA from '../../ProjectA/ProjectA';
import './Portfolio.css'

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

                {/* Top Right Port Section
                <Col xs={6}>
                    <Container>
                        <div className="PortImgTopR">
                        </div>
                        <div className="PortTextTopR">
                        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.""
                        </div>
                    </Container>
                </Col> */}
            </Row>


            {/* Second Row of Portfolio items */}
            <Row>
                {/* Bottom Left Port Section */}
                {/* <Col xs={6}>
                    <Container>
                        <div className="PortImgBottomR">
                        </div>
                        <div className="PortTextBottomR">
                        <h3>Quarantine Game</h3>
                        A virtual drinking card game, revolving around the theme of 2020 social distancing.
                        <ul>
                            <ul>HTML/CSS, Javascript, Socket.io, MySQL, sequelize and Bootstrap</ul>
                            <ul>GitHub:</ul>
                            <ul>Deployed:</ul>
                        </ul>
                        </div>
                    </Container>
                </Col> */}
                {/* Bottom Left Port Section */}
                {/* <Col xs={6}>
                    <div className="BgBlockBottomL">
                    </div>
                    <div className="PortImgBottomL">
                    </div>
                    <div className="SmBlockBottomL">
                        <div className="PortTextBottomL">
                        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.""
                        </div>
                    </div>
                </Col> */}

            </Row>
        </div>
    )
}

export default Portfolio
