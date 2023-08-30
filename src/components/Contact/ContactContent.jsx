import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./ContactContent.css";
import { Link } from "react-router-dom";

export default function ContactContent() {
  return (
    <>
      <div className="contact-content">
        <Container>
          <div>
            <h1>Don't be a stranger.</h1>
          </div>

          <div className="d-lg-flex justify-content-between">
            <span>
              <p>Any questions or comments. Feel free to contact our team.</p>
            </span>
            <a href="https://www.linkedin.com/in/wilsonckmchan/">
              <Button variant="outline-dark">Contact Us</Button>
            </a>
          </div>
        </Container>
      </div>
    </>
  );
}
