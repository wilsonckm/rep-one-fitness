import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./HowItWorks.css";

export default function HowItWorks() {
  return (
    <>
      <div className="hero-howitworks">
        <Container>
          <h1>How it works</h1>
        </Container>
        <Container>
          <div className="row justify-content-center">
            <div className="col-4">
              <p>One </p>
            </div>
            <div className="col-4">
              <p>two</p>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-4">
              <p>three</p>
            </div>
            <div className="col-4">
              <p>four</p>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}
