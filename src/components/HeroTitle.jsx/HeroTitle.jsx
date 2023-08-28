import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./HeroTitle.css";

export default function HeroTitle() {
  return (
    <>
      <div className="hero-title">
        <Container>
          <div>
            <h1>Training made social.</h1>
          </div>

          <div className="d-flex justify-content-between">
            <span>
              <p>Keep track of workouts, see what others are doing.</p>
            </span>
            <Button variant="primary">Learn More</Button>
          </div>
        </Container>
      </div>
    </>
  );
}
