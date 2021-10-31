import React from "react";
import * as ReactBootStrap from "react-bootstrap";
import Navbar from 'react-bootstrap/Navbar'
import {Col, Container, Nav, Row} from "react-bootstrap";
import { Link } from "react-router-dom";

const NavBar: React.FC = () => {
    return(
        <Navbar  bg="dark" variant="dark" className={"navbar"}>
                <Navbar.Brand className="ms-lg-5 ms-md-5 ms-4" as={Link} to="/">My Library App</Navbar.Brand>
                <Nav className={"me-5 text-end"}>
                    <Nav.Link as={Link} to="/about-me">About Me</Nav.Link>
                </Nav>
        </Navbar>
    );
}

export default NavBar;