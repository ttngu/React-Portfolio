import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './NavTabs.css';
import '../../images/Logo.png'
import NavLink from 'react-bootstrap/NavLink'

const Logo = require('../../images/Logo.png')

const NavTabs = () => {
    return (

            <Navbar bg="none" expand="lg" style={{"border":"black solid 1px"}} >
                <Navbar.Brand t0='/home'><img src ={Logo.default} alt="logo" style={{"height":"2rem", "margin":"0.5rem"}}/></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" >
                    <Nav className="mr-auto">
                    <NavLink to='/home'>Home</NavLink>
                    <Nav.Link to='/about'>About</Nav.Link>
                    <Nav.Link to='/portfolio'>Portfolio</Nav.Link>
                    <Nav.Link to='/contact'>Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>


        
    )
}

export default NavTabs
