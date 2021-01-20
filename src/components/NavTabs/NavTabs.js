import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './NavTabs.css';
import '../../images/Logo.png'

const Logo = require('../../images/Logo.png')

function NavTabs() {
    return (
        <div>
            <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home"><img src ={Logo.default} alt="logo" style={{"height":"3rem", "margin":"0.5rem"}}/></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                <Nav.Link to='/home'>Home</Nav.Link>
                <Nav.Link to='/about'>About</Nav.Link>
                <Nav.Link to='/portfolio'>Portfolio</Nav.Link>
                <Nav.Link to='/contact'>Contact</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Navbar>
            
        </div>
    )
}

export default NavTabs
