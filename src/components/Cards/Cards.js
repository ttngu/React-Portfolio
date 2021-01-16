import React from 'react'
import CardItem from './CardItem'
import '../Cards/Cards.css'
import '../../images/icecream.jpg'

function Cards() {
    return (
        <div className="cards">
            <h1>Meet Tammy!</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards_items">
                        
                        <CardItem 
                        
                        src='../../images/icecream.jpg'
                        text='Blah blah blah, brand statement and stuff will go here eventually when everything else is completed.'
                        label='Tammy Nguyen'
                        path='/images'
                        />
                    </ul>
                </div>
            </div>
            
        </div>
    )
}

export default Cards
