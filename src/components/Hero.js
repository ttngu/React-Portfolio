import React from 'react';
import styled from 'styled-components';
import {motion} from 'framer-motion';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
import fadeLeft from "styled-components";
import HeroBlock1 from '../images/HeroBlock1.png'

const Section = styled.section`
    display: flex;
    justify-content: center:
    align-items: center;
    background: #fffff;
    borderColor: #131313;
    borderWidth: 2;
`;

const Image = styled(motion.img)`
    postion: absolute;
    max-width: 250px
    max-height: 250px;
`;

const styles = {
    Jumbotron: {
        background: "./images/bread",
        height: "40rem",
        color: "white",
        textAlign: "center",
        textShadow: "2px 2px black",
        
    }
}
function Hero() {
    return (
        <Section>
            <Container>

            <Jumbotron fluid style={styles.jumbotron}>
                <Container>
                    <motion.h1
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        transition={{duration: 1}}
                    >
                        Welcome friends!
                    </motion.h1>

                    <Image src={HeroBlock1} alt='pinkColorBlock'
                    whileTap={{scale: 0.9}}
                    drag={true}
                    dragConstraints={{left: 0, right: 400, top: -500, bottom:0}} 
                    initial={{opacity: 0, y: 100}}
                    animate={{opacity: 1, y: 0, transition: {duration: 1} }}
                    />

                </Container>
            </Jumbotron>

    
                
            </Container>
        </Section>
    )
}

export default Hero
