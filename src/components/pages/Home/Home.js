import React from 'react'
import { Col, Row } from 'react-bootstrap';
import './Home.css';
import {motion} from 'framer-motion';




function Home() {
  return (
    <div className="Container" style={{textAlign:"center",}}>
      <Row>
        <Col xs={12} className="HomeCol">
          <div className="ColorBlock">
            <motion.h1
              initial={{opacity: 0}}
              animate={{opacity: 1}}
              transition={{duration: 1}}
            >
              Hello there.
            </motion.h1>

          </div>
        </Col>
      </Row>

    </div>
    
  )
}

export default Home
