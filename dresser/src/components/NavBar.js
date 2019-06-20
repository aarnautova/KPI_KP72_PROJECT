import React, {Component} from "react";
//import {LinkContainer} from "react-router-bootstrap";
import {Navbar, Nav, NavDropdown, Image, Container, Col, Row} from "react-bootstrap"
import Dress from "../styles/dress.png"
import Home from "../icons/home.png"
import Instagram from "../icons/instagram.png"
import Facebook from "../icons/facebook.png"
import Google from "../icons/google-plus.png"
import Location from "../icons/address.png"
import Wedding from "../icons/wedding.png"
import Prom from "../icons/prom.png"
import About from "../icons/about.png"
import Dresses from "../icons/dress.png"
import "../styles/NavBarLogo.css"

class NavBar extends Component {
    render() {
        return (
            <Navbar bg="light" expand="lg">
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Container>
                        <Row className="nav_row">
                            <Col>
                                <Row className="nav_left">
                                    <Nav.Link href="#home">
                                        <Image className="nav_icons" src={Home}/>
                                    </Nav.Link>
                                    <div className="vdivide"/>
                                    <Nav.Link href="#home">
                                        <Image className="nav_icons" src={Dresses}/>
                                    </Nav.Link>
                                    <div className="vdivide"/>
                                    <Nav.Link href="#home">
                                        <Image className="nav_icons" src={About}/>
                                    </Nav.Link>
                                </Row>
                            </Col>
                            <Col>
                                <Row className="nav_right">
                                    <Nav.Link href="#home">
                                        <Image className="nav_icons" src={Instagram}/>
                                    </Nav.Link>
                                    <Nav.Link href="#home">
                                        <Image className="nav_icons" src={Facebook}/>
                                    </Nav.Link>
                                    <Nav.Link href="#home">
                                        <Image className="nav_icons" src={Google}/>
                                    </Nav.Link>
                                    <div className="vdivide"/>
                                    <Nav.Link href="#home">
                                        <Image className="nav_icons" src={Location}/>
                                    </Nav.Link>
                                </Row>
                            </Col>
                        </Row>
                    </Container>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default NavBar;