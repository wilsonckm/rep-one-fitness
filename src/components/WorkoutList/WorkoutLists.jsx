import React, { useEffect, useState } from "react";
import {
  collection,
  onSnapshot,
  deleteDoc,
  doc,
  query,
  where,
} from "firebase/firestore";
import { db } from "../../firebase";
import WorkoutItem from "../WorkoutItem/WorkoutItem";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

function WorkoutsList() {
  const [workoutList, setWorkoutList] = useState([]);
  const { currentUser } = useAuth();
  const workoutsCollectionRef = collection(db, "workouts");

  useEffect(() => {
    if (currentUser) {
      const userUid = currentUser.uid;
      const q = query(workoutsCollectionRef, where("userId", "==", userUid));

      const unsubscribe = onSnapshot(q, (querySnapshot) => {
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
    }
  }, [currentUser]);
  //   useEffect(() => {
  //     const unsubscribe = onSnapshot(workoutsCollectionRef, (querySnapshot) => {
  //       const workoutData = [];
  //       querySnapshot.forEach((doc) => {
  //         workoutData.push({
  //           id: doc.id,
  //           ...doc.data(),
  //         });
  //       });
  //       setWorkoutList(workoutData);
  //     });

  //     return () => unsubscribe();
  //   }, []);

  const handleDeleteWorkout = async (workoutId) => {
    try {
      await deleteDoc(doc(db, "workouts", workoutId));
      console.log("Delete testing");
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
