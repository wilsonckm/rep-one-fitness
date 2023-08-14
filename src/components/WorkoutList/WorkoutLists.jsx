import React, { useEffect, useState } from "react";
import { collection, onSnapshot, deleteDoc } from "firebase/firestore";
import { db } from "../../firebase";
import WorkoutItem from "../WorkoutItem/WorkoutItem";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function WorkoutsList() {
  const [workoutList, setWorkoutList] = useState([]);
  const workoutsCollectionRef = collection(db, "workouts");

  useEffect(() => {
    const unsubscribe = onSnapshot(workoutsCollectionRef, (querySnapshot) => {
      const workoutData = [];
      querySnapshot.forEach((doc) => {
        workoutData.push({
          id: doc.id,
          ...doc.data(),
        });
      });
      setWorkoutList(workoutData);
    });

    return () => unsubscribe();
  }, []);

  const handleDeleteWorkout = async (workoutId) => {
    try {
      await deleteDoc(workoutsCollectionRef.doc(workoutId));
    } catch (error) {
      console.error("Error deleting workout:", error);
    }
  };

  return (
    <div>
      {workoutList.map((workout) => (
        <div key={workout.id} className="mb-4">
          <WorkoutItem workout={workout} />
          <Button
            variant="danger"
            onClick={() => handleDeleteWorkout(workout.id)}
          >
            Delete Workout
          </Button>
          <Link to={`/edit/${workout.id}`} className="btn btn-primary">
            Edit Workout
          </Link>
        </div>
      ))}
    </div>
  );
}

export default WorkoutsList;
