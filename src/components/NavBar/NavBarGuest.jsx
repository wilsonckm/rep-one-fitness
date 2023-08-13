import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import "./NavBarUser.css";

export default function NavBarGuest() {
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand>
            <Link className="nav-link" to="/">
              Exercise co
            </Link>
          </Navbar.Brand>
          <Nav className="ml-auto">
            <Nav.Link>
              <Link to="/" className="nav-link">
                Home
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/about" className="nav-link">
                About
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/contact" className="nav-link">
                Contact
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/signup" className="nav-link">
                Sign Up
              </Link>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
