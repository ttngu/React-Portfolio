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

            <Link className="navbar-brand" to="/home">
                <img src ={Logo.default} alt="logo" style={{"height":"2rem", "margin":"0.5rem"}}/>
            </Link>

            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" >
                <Nav className="mr-auto">

                <Link
                    to="/"
                    className={window.location.pathname === "/home" || window.location.pathname === "/home" ? "nav-link active" : "nav-link"}>
                    Home
                </Link>
                <Link
                    to="/"
                    className={window.location.pathname === "/about" || window.location.pathname === "/about" ? "nav-link active" : "nav-link"}>
                    About
                </Link>
                <Link
                    to="/"
                    className={window.location.pathname === "/portfolio" || window.location.pathname === "/portfolio" ? "nav-link active" : "nav-link"}>
                    Portfolio
                </Link>
                <Link
                    to="/"
                    className={window.location.pathname === "/contact" || window.location.pathname === "/contact" ? "nav-link active" : "nav-link"}>
                    Contact
                </Link>


                </Nav>
            </Navbar.Collapse>
        </Navbar>



        
    )
}

export default NavTabs
