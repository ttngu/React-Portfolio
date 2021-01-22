import React from 'react'
import {Navbar, Nav} from 'react-bootstrap';
import './NavTabs.css';
import '../../images/Logo.png'
import NavLink from 'react-bootstrap/NavLink'
import { Link } from "react-router-dom";

const Logo = require('../../images/Logo.png')

const NavTabs = () => {
    return (
        <Navbar bg="none" expand="lg" style={{"border":"black solid 1px"}} >

            <Link className="navbar-brand" to="/about">
                <img src ={Logo.default} alt="logo" style={{"height":"2rem", "margin":"0.5rem"}}/>
            </Link>

            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" >
                <Nav className="mr-auto">

                <Link className="navbar" to="/home">
                    Home
                </Link>
                <Link className="navbar" to="/about">
                    About
                </Link>
                <Link className="navbar" to="/portfolio">
                    Portfolio
                </Link>
                <Link className="navbar" to="/contact">
                    Contact
                </Link>


                </Nav>
            </Navbar.Collapse>
        </Navbar>



        
    )
}

export default NavTabs
