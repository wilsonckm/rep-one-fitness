import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { collection, doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase";
import { Form, Button } from "react-bootstrap";

function EditWorkout() {
  const { workoutId } = useParams();
  const workoutsCollectionRef = collection(db, "workouts");
  const workoutDocRef = doc(workoutsCollectionRef, workoutId);
  const [workoutData, setWorkoutData] = useState({
    title: "",
    date: "",
    exercises: [],
  });
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchWorkoutData() {
      try {
        const docSnapshot = await getDoc(workoutDocRef);
        if (docSnapshot.exists()) {
          setWorkoutData(docSnapshot.data());
        } else {
          console.log("Document not found");
        }
      } catch (error) {
        console.error("Error fetching document:", error);
      }
    }

    fetchWorkoutData();
  }, []);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateDoc(workoutDocRef, workoutData);
      navigate("/workouts");
    } catch (error) {
      console.error("Error updating document:", error);
    }
  };

  const handleInputChange = (field, value) => {
    setWorkoutData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  const handleExerciseInputChange = (exerciseIndex, field, value) => {
    const updatedExercises = [...workoutData.exercises];
    updatedExercises[exerciseIndex][field] = value;

    // Update the workoutData state with the modified exercises
    setWorkoutData({ ...workoutData, exercises: updatedExercises });
  };

  return (
    <div>
      <h2>Edit Workout</h2>
      <Form onSubmit={handleFormSubmit}>
        <Form.Group>
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            value={workoutData.title}
            onChange={(e) => handleInputChange("title", e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Date</Form.Label>
          <Form.Control
            type="date"
            value={workoutData.date}
            onChange={(e) => handleInputChange("date", e.target.value)}
            required
          />
        </Form.Group>
        {workoutData.exercises.map((exercise, exerciseIndex) => (
          <div key={exerciseIndex}>
            <Form.Group>
              <Form.Label>Exercise</Form.Label>
              <Form.Control
                type="text"
                value={exercise.exerciseName}
                onChange={(e) =>
                  handleExerciseInputChange(
                    exerciseIndex,
                    "exerciseName",
                    e.target.value
                  )
                }
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Sets</Form.Label>
              <Form.Control
                type="number"
                value={exercise.sets}
                onChange={(e) =>
                  handleExerciseInputChange(
                    exerciseIndex,
                    "sets",
                    Number(e.target.value)
                  )
                }
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Reps</Form.Label>
              <Form.Control
                type="number"
                value={exercise.reps}
                onChange={(e) =>
                  handleExerciseInputChange(
                    exerciseIndex,
                    "reps",
                    Number(e.target.value)
                  )
                }
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Weight</Form.Label>
              <Form.Control
                type="number"
                value={exercise.weight}
                onChange={(e) =>
                  handleExerciseInputChange(
                    exerciseIndex,
                    "weight",
                    Number(e.target.value)
                  )
                }
                required
              />
            </Form.Group>
          </div>
        ))}
        <Button type="submit">Save Changes</Button>
      </Form>
    </div>
  );
}

export default EditWorkout;
