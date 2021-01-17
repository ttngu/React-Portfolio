import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Portfolio.css'

function Portfolio() {
    return (
        <div className="Container">
            <Row>
                <div className="PortTitle">
                    PORTFOLIO
                </div>
                <div className="HrLine">
                </div>
            </Row>
            <Row xs={2}>
                <Col>
                    {/* Top Left Port Section */}
                    <div className="BgBlockTop">
                    </div>
                    <div className="PortImgTopL">
                    </div>
                    <div className="SmBlockTop">
                        <div className="PortTextTopL">
                        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.""
                        </div>
                    </div>
                </Col>

                {/* Top Right Port Section */}
                <Col>
                <div className="PortImgTopR">
                </div>
                <div className="PortTextTopR">
                "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.""
                </div>
                </Col>
            </Row>
        </div>
    )
}

export default Portfolio
