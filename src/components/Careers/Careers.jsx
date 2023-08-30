import React from "react";
import { Button, Container } from "react-bootstrap";
import "./Careers.css";

export default function Careers() {
  return (
    <>
      <div className="careers-banner">
        <Container>
          <h1 className="d-lg-flex justify-content-center mt-4">
            Join Our Team
          </h1>
          <p>
            Are you ready to embark on a journey of innovation, collaboration,
            and growth? At Exercise Co, we're seeking talented individuals who
            are passionate about making a positive impact. Join our dynamic team
            and contribute to projects that shape the future.
          </p>
          <a href="https://www.linkedin.com/in/wilsonckmchan/">
            <Button variant="outline-dark">Explore Open Positions</Button>
          </a>
        </Container>
      </div>
    </>
  );
}
