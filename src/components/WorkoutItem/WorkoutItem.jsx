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
        </div>
      ))}
    </div>
  );
}

export default WorkoutItem;

// import React, { useState } from "react";
// import { deleteDoc, updateDoc, doc } from "firebase/firestore";
// import { db } from "../../firebase";

// function WorkoutItem({ movie }) {
//   const [updatedTitle, setUpdatedTitle] = useState("");

//   const deleteMovie = async (id) => {
//     try {
//       await deleteDoc(doc(db, "movies", movie.id));
//       console.log("Deleted movie");
//     } catch (err) {
//       console.error("Error deleting movie:", err);
//     }
//   };

//   const updateMovieTitle = async (id) => {
//     try {
//       const movieDoc = doc(db, "movies", movie.id);
//       await updateDoc(movieDoc, { title: updatedTitle });
//       setUpdatedTitle("");
//     } catch (err) {
//       console.error("Error updating title:", err);
//     }
//   };

//   return (
//     <div>
//       <h1>{movie.title}</h1>
//       <p>Date {movie.releaseDate}</p>
//       <button onClick={() => deleteMovie(movie.id)}>Delete Movie</button>
//       <input
//         placeholder="new title"
//         value={updatedTitle}
//         onChange={(e) => setUpdatedTitle(e.target.value)}
//       />
//       <button
//         onClick={() => updateMovieTitle(movie.id)}
//         disabled={!updatedTitle.trim()}
//       >
//         Update Movie
//       </button>
//     </div>
//   );
// }

// export default WorkoutItem;
