import React, { useEffect, useState } from "react";
import { collection, onSnapshot, deleteDoc, doc } from "firebase/firestore";
import { db } from "../../firebase";
import WorkoutItem from "../WorkoutItem/WorkoutItem"; // Update the path to the WorkoutItem component
import { Button } from "react-bootstrap"; // Import Button component from react-bootstrap

function WorkoutsList() {
  const [workoutList, setWorkoutList] = useState([]); // Update state variable name
  const workoutsCollectionRef = collection(db, "workouts"); // Update the collection reference

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
      await deleteDoc(doc(db, "workouts", workoutId));
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
          <Button variant="primary" className="ml-2">
            Edit Workout
          </Button>
        </div>
      ))}
    </div>
  );
}

export default WorkoutsList;
