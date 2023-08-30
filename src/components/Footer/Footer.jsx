import React from "react";
import { Button, Container } from "react-bootstrap";
import "./Footer.css";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <div className="footer-banner banner3">
        <Container>
          <h1>Here we go.</h1>
          <div className="d-lg-flex justify-content-between">
            <Link to="/signup">
              <Button variant="outline-dark">Sign Up</Button>
            </Link>
            <div className="d-lg-flex justify-content-evenly mt-3">
              <Link to="/about">
                <Button variant="outline-dark">Learn More</Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline-dark ms-3">Contact</Button>
              </Link>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}
