import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import React from 'react';
import X from '../images/X.svg';
import git from '../images/git.png';
import linkedin from '../images/linkedin.png';
import { BrowserRouter, Routes, Route, Switch, Link } from "react-router-dom";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

function BasicNavbar() {
  return (
  
    <Navbar expand="lg" bg="dark"  className="bg-body-tertiary fixed-top">
      <Container>
        <Navbar.Brand s="0" href="#home">
          <img
            alt=""
            src="/github.png"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{' '}
          CrowdFunding
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/About">About</Nav.Link>
            <NavDropdown title="Champaings" id="basic-nav-dropdown">
              <NavDropdown.Item href="/Active_campaign">Active campaign</NavDropdown.Item>
              <NavDropdown.Item href="/Create_campaign"> Create campaign</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Buy Tokens </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Contact us</NavDropdown.Item>
            </NavDropdown>
          </Nav>


        </Navbar.Collapse>
        <Navbar.Collapse className='icons' style={{ justifyContent: 'end' }}>
          <Nav style={{ gap: '0.5 rem ', alignItems: 'center' }}>
            <img src='git.png' alt='git' width='20' height='20' fill='white'></img>
            <img src='X.png' alt='X' width='20' height='20' fill='white'></img>
            <img src='linkedin.png' alt='Linkedin' width='20' height='20' fill='white'></img>

          </Nav>

        </Navbar.Collapse>
      </Container>
    </Navbar>

  );
}

export default BasicNavbar;