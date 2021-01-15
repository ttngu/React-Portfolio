import React from 'react'
import { Button } from '../Button/Button';
import './HeroSection.css'

function HeroSection() {
    return (
        <div className='hero-container'>
            <video src='/videos/waves.mp4' autoPlay loop muted />
            <h1>Tammy Nguyen</h1>   
            <p>Full Stack Web Designer</p>     
            <div className="heor-btns">
                <Button 
                className='btns' 
                buttonStyle='btn--outline'
                buttonSize='btn--large'
                >
                    EXPLORE
                </Button>
                
            </div>
        </div>
    )
}

export default HeroSection
