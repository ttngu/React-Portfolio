import React from 'react'
import {Navbar, Nav} from 'react-bootstrap';
import './NavTabs.css';
import '../../images/Logo.png'
import NavLink from 'react-bootstrap/NavLink'
import { Link } from "react-router-dom";
import '../NavTabs/NavTabs.css'

const Logo = require('../../images/Logo.png')

const NavTabs = () => {
    return (
        <Navbar bg="none" expand="lg" >

            <Link className="navbar-brand" to="/">
                <img src ={Logo.default} alt="logo" style={{"height":"2rem", "margin":"0.5rem"}}/>
            </Link>

            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" >
                <Nav className="mr-auto">

                {/* <Link className="navbar" to="/home">
                    HOME
                </Link> */}
                <Link className="navbar" to="/about">
                    ABOUT
                </Link>
                <Link className="navbar" to="/portfolio">
                    PORTFOLIO
                </Link>
                <Link className="navbar" to="/contact">
                    CONTACT
                </Link>


                </Nav>
            </Navbar.Collapse>
        </Navbar>



        
    )
}

export default NavTabs
