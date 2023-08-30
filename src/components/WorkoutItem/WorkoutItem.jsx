import React from "react";

function WorkoutItem({ workout }) {
  return (
    <div>
      <h3>{workout.title}</h3>
      <p>Date: {workout.date}</p>
      <h4>Exercises:</h4>
      {workout.exercises.map((exercise, index) => (
        <div key={index}>
          <p>Exercise: {exercise.exerciseName}</p>
          <p>Sets: {exercise.sets}</p>
          <p>Reps: {exercise.reps}</p>
          <p>Weight: {exercise.weight} lbs</p>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default WorkoutItem;
