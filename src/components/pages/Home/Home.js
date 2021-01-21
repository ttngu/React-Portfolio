import React from 'react'
import { Col, Row } from 'react-bootstrap';
import './Home.css';



function Home() {
  return (
    <div className="Container" style={{textAlign:"center",}}>
      <Row>
        <Col xs={12} className="HomeCol">
          <div className="ColorBlock">
            Hello there.

          </div>
        </Col>
      </Row>

    </div>
    
  )
}

export default Home
