import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Portfolio.css'

function Portfolio() {
    return (
        <div className="Container">
            <Row>
                <Col xs={12} className="PortTitleCol">
                    <div className="PortTitle">
                    PORTFOLIO
                    </div>
                    <div className="HrLine">
                    </div>
                </Col>
            </Row>

            {/* Top Row */}
            <Row >
                {/* Top Left Port Section */}
                <Col xs={6}>
                    <Container>
                        <div className="BgBlockTop">
                        </div>
                        <div className="PortImgTopL">
                        </div>
                        <div className="SmBlockTop">
                            <div className="PortTextTopL">
                            "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.""
                            </div>
                        </div>
                    </Container>
                    
                </Col>

                {/* Top Right Port Section */}
                <Col xs={6}>
                    <Container>
                        <div className="PortImgTopR">
                        </div>
                        <div className="PortTextTopR">
                        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.""
                        </div>
                    </Container>
                </Col>
            </Row>


            {/* Second Row of Portfolio items */}
            <Row>
                {/* Bottom Left Port Section */}
                <Col xs={6}>
                    <Container>
                        <div className="PortImgBottomR">
                        </div>
                        <div className="PortTextBottomR">
                        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.""
                        </div>
                    </Container>
                </Col>
                {/* Bottom Left Port Section */}
                <Col xs={6}>
                    <div className="BgBlockBottomL">
                    </div>
                    <div className="PortImgBottomL">
                    </div>
                    <div className="SmBlockBottomL">
                        <div className="PortTextBottomL">
                        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.""
                        </div>
                    </div>
                </Col>

            </Row>
        </div>
    )
}

export default Portfolio
