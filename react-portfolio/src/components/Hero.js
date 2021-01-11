import React from 'react';
import styled from 'styled-components';
import {motion} from 'framer-motion';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import fadeLeft from "styled-components";

function Hero() {
    return (
        <div>
            <Container>
                <motion.h1
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{duration: 1}}
                >
                    Welcome to space
                </motion.h1>

                <motion.p
                variants={{fadeLeft}}
                initial='hidden'
                animate='visible'
                transition={{duration: 1}}
                >
                    Journey to the unknown
                </motion.p>
            </Container>
        </div>
    )
}

export default Hero
