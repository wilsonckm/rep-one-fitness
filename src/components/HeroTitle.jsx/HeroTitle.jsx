import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./HeroTitle.css";
import { Link } from "react-router-dom";

export default function HeroTitle() {
  return (
    <>
      <div className="hero-title">
        <Container>
          <div>
            <h1>Training made social.</h1>
          </div>

          <div className="d-lg-flex justify-content-between">
            <span>
              <p>Keep track of workouts, see what others are doing.</p>
            </span>
            <Link to="/about">
              <Button variant="outline-dark">Learn More</Button>
            </Link>
          </div>
        </Container>
      </div>
    </>
  );
}
