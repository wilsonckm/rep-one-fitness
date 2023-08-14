import React, { useEffect, useState } from "react";
import NavBarUser from "../../components/NavBar/NavBarUser";
import { db } from "../../firebase";
import { Form, Button, Card, Alert, Container } from "react-bootstrap";
import { useNavigate } from "react-router";
import {
  setDoc,
  doc,
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  onSnapshot,
} from "firebase/firestore";

export default function NewWorkoutForm() {
  const moviesCollectionRef = collection(db, "movies");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  //Create Data
  //New Movie states:
  const [newMovieTitle, setNewMovieTitle] = useState("");
  const [newReleaseDate, setNewReleaseDate] = useState(0);
  const [isNewMovieOscar, setIsNewMovieOscar] = useState(false);

  const onSubmitMovie = async (e) => {
    e.preventDefault();
    try {
      setError("");
      await addDoc(moviesCollectionRef, {
        title: newMovieTitle,
        releaseDate: newReleaseDate,
        receivedAnOscar: isNewMovieOscar,
      });
      //   setNewMovieTitle("");
      //   setNewReleaseDate(0);
      //   setIsNewMovieOscar(false);
      navigate("/workouts");
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <>
      <h1>Add Workouts</h1>
      <Container
        className="d-flex align-items-center justify-content-center"
        style={{ minHeight: "100vh" }}
      >
        <div className="w-100" style={{ maxWidth: "400px" }}>
          <Card>
            <Card.Body>
              <h2 className="text-center mb-4">Add Movie</h2>
              {error && <Alert variant="danger">{error}</Alert>}
              <Form onSubmit={onSubmitMovie}>
                <Form.Group>
                  <Form.Label>Movie Title</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter movie title..."
                    value={newMovieTitle}
                    onChange={(e) => setNewMovieTitle(e.target.value)}
                    required
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Release Date</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Enter release date..."
                    value={newReleaseDate}
                    onChange={(e) => setNewReleaseDate(Number(e.target.value))}
                    required
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Check
                    type="checkbox"
                    checked={isNewMovieOscar}
                    onChange={(e) => setIsNewMovieOscar(e.target.checked)}
                    label="Received an Oscar"
                  />
                </Form.Group>
                <Button className="w-100" type="submit">
                  Add Movie
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </div>
      </Container>
    </>
  );
}
