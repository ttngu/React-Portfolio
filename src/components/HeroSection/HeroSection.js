import React from 'react'
import { Button } from '../Button/Button';
import './HeroSection.css'

function HeroSection() {
    return (
        <div className='hero-container'>
            <video src='/videos/waves.mp4' autoPlay loop muted />
            <h1>Adventure Awaits</h1>   
            <p>What are you waiting for?</p>     
            <div className="heor-btns">
                <Button 
                className='btns' 
                buttonStyle='btn--outline'
                buttonSize='btn--large'
                >
                    GET STARTED
                </Button>
                
            </div>
        </div>
    )
}

export default HeroSection
