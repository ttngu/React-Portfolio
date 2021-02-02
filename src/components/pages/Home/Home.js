import React from 'react'
import { Col, Row } from 'react-bootstrap';
import './Home.css';
import {motion} from 'framer-motion';




function Home() {
  const fadeLeft= {
    hidden: {opacity:0, x: -100},
    visible: {opacity: 1, x: 0}
}
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

            <motion.p
              variants={fadeLeft}
              initial='hidden'
              animate='visible'
              transition={{duration: 1}}
            >
              Welcome to my portfolio!
            </motion.p>

          
          </div>
        </Col>
      </Row>

    </div>
    
  )
}

export default Home
