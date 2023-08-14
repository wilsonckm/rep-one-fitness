import React, { useState } from "react";
import { db, auth } from "../../firebase";
import { Form, Button, Card, Alert, Container } from "react-bootstrap";
import { useNavigate } from "react-router";
import { collection, addDoc } from "firebase/firestore";
import { getAuth } from "firebase/auth";

export default function NewWorkoutForm() {
  const workoutsCollectionRef = collection(db, "workouts");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const auth = getAuth();
  const currentUser = auth.currentUser;
  const [newWorkoutTitle, setNewWorkoutTitle] = useState("");
  const [newWorkoutDate, setNewWorkoutDate] = useState("");
  const [exercises, setExercises] = useState([
    { exerciseName: "", sets: 1, reps: 1, weight: 0 },
  ]);

  const handleExerciseChange = (exerciseIndex, field, value) => {
    const updatedExercises = [...exercises];
    updatedExercises[exerciseIndex][field] = value;
    setExercises(updatedExercises);
  };

  const onSubmitWorkout = async (e) => {
    e.preventDefault();
    try {
      setError("");
      if (currentUser) {
        const userUid = currentUser.uid;
        await addDoc(workoutsCollectionRef, {
          userId: userUid,
          title: newWorkoutTitle,
          date: newWorkoutDate,
          exercises: exercises, // Use the array of exercises
        });
        navigate("/workouts");
      }
    } catch (err) {
      console.error(err);
    }
  };

  const addExercise = () => {
    setExercises([
      ...exercises,
      { exerciseName: "", sets: 1, reps: 1, weight: 0 },
    ]);
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
              <h2 className="text-center mb-4">Add Workout</h2>
              {error && <Alert variant="danger">{error}</Alert>}
              <Form onSubmit={onSubmitWorkout}>
                <Form.Group>
                  <Form.Label>Workout Title</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter workout title..."
                    value={newWorkoutTitle}
                    onChange={(e) => setNewWorkoutTitle(e.target.value)}
                    required
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Date</Form.Label>
                  <Form.Control
                    type="date"
                    value={newWorkoutDate}
                    onChange={(e) => setNewWorkoutDate(e.target.value)}
                    required
                  />
                </Form.Group>
                {exercises.map((exercise, exerciseIndex) => (
                  <div key={exerciseIndex}>
                    <Form.Group>
                      <Form.Label>Exercise Name</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter exercise name..."
                        value={exercise.exerciseName}
                        onChange={(e) =>
                          handleExerciseChange(
                            exerciseIndex,
                            "exerciseName",
                            e.target.value
                          )
                        }
                        required
                      />
                    </Form.Group>
                    <Form.Group>
                      <Form.Label>Number of Sets</Form.Label>
                      <Form.Control
                        type="number"
                        placeholder="Enter the number of sets (e.g., 3)"
                        value={exercise.sets}
                        onChange={(e) =>
                          handleExerciseChange(
                            exerciseIndex,
                            "sets",
                            Number(e.target.value)
                          )
                        }
                        required
                      />
                    </Form.Group>
                    {exercise.sets > 0 && (
                      <div>
                        <Form.Group>
                          <Form.Label>Reps</Form.Label>
                          <Form.Control
                            type="number"
                            placeholder="Enter reps (e.g., 8)"
                            value={exercise.reps}
                            onChange={(e) =>
                              handleExerciseChange(
                                exerciseIndex,
                                "reps",
                                Number(e.target.value)
                              )
                            }
                            required
                          />
                        </Form.Group>
                        <Form.Group>
                          <Form.Label>Weight (lbs)</Form.Label>
                          <Form.Control
                            type="number"
                            placeholder="Enter weight (e.g., 50)"
                            value={exercise.weight}
                            onChange={(e) =>
                              handleExerciseChange(
                                exerciseIndex,
                                "weight",
                                Number(e.target.value)
                              )
                            }
                            required
                          />
                        </Form.Group>
                      </div>
                    )}
                  </div>
                ))}
                <Button onClick={addExercise}>Add Exercise</Button>
                <Button className="w-100 mt-2" type="submit">
                  Add Workout
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </div>
      </Container>
    </>
  );
}
