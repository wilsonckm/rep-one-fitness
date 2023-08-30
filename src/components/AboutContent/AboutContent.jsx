import React from "react";
import { Container } from "react-bootstrap";
import "./AboutContent.css";

export default function AboutContent() {
  return (
    <>
      <div className="about">
        <Container>
          <h1>Bringing human connection to training.</h1>
          <p>
            We inspire and motivate people in lifelong health, one workout at a
            time.
          </p>
          <hr />
        </Container>

        <Container>
          <h1>Our Approach</h1>
          <p>
            At Exercise Co, our core beliefs guide everything we do. These
            beliefs shape our culture, drive our decisions, and inspire us to
            create meaningful impact. Here's what we believe in:
          </p>
          <div className="row justify-content-start">
            <div className="col-lg-4 col-md-6 mb-4">
              <p className="about-title">Innovation</p>
              <p>
                We believe in the power of innovation to solve real-world
                challenges. We strive to develop solutions that not only push
                technological boundaries but also make a tangible difference in
                people's lives. Our commitment to meaningful innovation is what
                sets us apart.
              </p>
            </div>
          </div>
          <div className="row justify-content-end">
            <div className="col-lg-4 col-md-6 mb-4">
              <p className="about-title">Collaboration</p>
              <p>
                Our community is built on the strength of individuals coming
                together to support and uplift one another. Together, we create
                an environment where everyone can thrive.
              </p>
            </div>
          </div>
          <div className="row justify-content-start">
            <div className="col-lg-4 col-md-6 mb-4">
              <p className="about-title">Empowerment</p>
              <p>
                We're dedicated to providing an environment where you can
                thrive, learn, and excel. Our goal is to empower individuals to
                reach their full potential and advance in their lives.
              </p>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}
