import React from 'react';
import {Nav, Navbar, NavDropdown} from 'react-bootstrap';

const NavBar = () => {
    return(
        <Navbar sticky="top" bg="light" expand="lg">
            <Navbar.Brand href="/">
            <img
                src="/logo.png"
                width="50"
                height="40"
                className="d-inline-block align-top"
                alt="React Bootstrap logo"
            />
            <img
                src="/badreads.png"
                width="120"
                height="40"
                className="d-inline-block align-top"
                alt="React Bootstrap logo"
            />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#link">Link</Nav.Link>
                    <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
    </Navbar>
    );
    };

export default NavBar;