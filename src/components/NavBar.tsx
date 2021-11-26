import React from "react";
import {Navbar, Container, Nav, NavDropdown, Button} from "react-bootstrap";
import logo from "../assets/images/logo.jpg"
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <Navbar expand="lg" className="nav-bar">
            <Navbar.Brand>
                <img src={logo} className="navbar-image ms-lg-5 me-lg-4 mx-md-3 mx-2" alt="profile picture"/>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="nav-links ms-auto me-lg-5 me-md-4">
                    <Nav.Link as={Link} to="/about-me">About me</Nav.Link>
                    <Nav.Link>Contact</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default NavBar;