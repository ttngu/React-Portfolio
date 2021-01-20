import React from 'react'
import "./About.css"
import '../../../images/icecream.jpg'

const Icecream = require('../../../images/icecream.jpg')

function About() {
    return (
        <div className="Conatiner">
            <div className="AboutPhoto">
            <img src ={Icecream.default} alt="Tammy Nguyen"/>
            </div>
            <div className="AboutTitle">
                MEET TAMMY
            </div>
            <div className="AboutHR">
            </div>
            <div className="Text">
            "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
            </div>

            
        </div>
    )
}

export default About
