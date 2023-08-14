import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import "./NavBarUser.css";

export default function NavBarUser() {
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand>
            <Link className="nav-link" to="/welcome">
              Exercise co
            </Link>
          </Navbar.Brand>
          <Nav className="ml-auto">
            <Link to="/welcome" className="nav-link">
              Home
            </Link>

            <Link to="/workouts" className="nav-link">
              All Workouts
            </Link>

            <Link to="/workouts/new" className="nav-link">
              New Workout
            </Link>

            <Link to="/profile" className="nav-link">
              Log Out
            </Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
