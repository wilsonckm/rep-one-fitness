import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./HowItWorks.css";

export default function HowItWorks() {
  return (
    <>
      <div className="hero-howitworks">
        <Container>
          <h1 className="mb-4">How it works</h1>
        </Container>
        <Container>
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6 mb-4">
              <p className="steps-title">1. Sign up</p>
              <p>
                Create an account using your email and a secure password. This
                will give you access to the app's features.
              </p>
              <hr />
            </div>
            <div className="col-lg-4 col-md-6 mb-4">
              <p className="steps-title">2. Explore</p>
              <p>
                Once logged in, navigate through the app to explore its
                functionalities. You can view, add, edit, and delete items.
              </p>
              <hr />
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6 mb-4">
              <p className="steps-title">3. Manage Workouts</p>
              <p>
                Use the intuitive interface to manage your data. Add new
                entries, update existing ones, and delete when necessary.
              </p>
              <hr />
            </div>
            <div className="col-lg-4 col-md-6 mb-4">
              <p className="steps-title">4. Secure Access</p>
              <p>
                Your data is secure. We use advanced encryption and
                authentication techniques to ensure your information is
                protected.
              </p>
              <hr />
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}
