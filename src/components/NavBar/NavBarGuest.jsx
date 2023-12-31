import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import "./NavBarUser.css";

export default function NavBarGuest() {
  return (
    <>
      <Navbar expand="lg" fixed="top" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand>
            <Link className="nav-link" to="/">
              Exercise Co
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav" align="end">
            <Nav className="ms-auto">
              <Link to="/" className="nav-link">
                Home
              </Link>

              <Link to="/about" className="nav-link">
                About
              </Link>

              <Link to="/contact" className="nav-link">
                Contact
              </Link>

              <Link to="/signup" className="nav-link">
                Sign Up
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
