import React from "react";
import { Container, Carousel } from "react-bootstrap";
import "./Reviews.css";

export default function Reviews() {
  return (
    <div className="user-reviews">
      <Container>
        <h2 className="text-center mb-4">Don't take our word for it.</h2>
        <h3>Real people. Real results.</h3>
        <Carousel className="text-center">
          <Carousel.Item>
            <p>"Amazing app! It helped me stay on track with my workouts."</p>
            <p>- John Doe</p>
          </Carousel.Item>
          <Carousel.Item>
            <p>"The best fitness app I've ever used. Highly recommended!"</p>
            <p>- Jane Smith</p>
          </Carousel.Item>
        </Carousel>
      </Container>
    </div>
  );
}
