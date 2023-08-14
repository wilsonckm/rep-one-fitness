import React, { useEffect, useState } from "react";
import NavBarUser from "../../components/NavBar/NavBarUser";
import { db } from "../../firebase";
import {
  setDoc,
  doc,
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  updateDoc,
  onSnapshot,
} from "firebase/firestore";
import WorkoutsList from "../../components/WorkoutList/WorkoutLists";

function Workouts() {
  return (
    <>
      <NavBarUser />
      <div>Workouts</div>
      <WorkoutsList />
    </>
  );
}

export default Workouts;

// export default function Workouts() {
//   const [movieList, setMovieList] = useState([]);

//   //Read Data
//   // Select what collection you want to get data from
//   const moviesCollectionRef = collection(db, "movies");

//   useEffect(() => {
//     const unsubscribe = onSnapshot(moviesCollectionRef, (querySnapshot) => {
//       const movieData = [];
//       querySnapshot.forEach((doc) => {
//         movieData.push({
//           id: doc.id,
//           ...doc.data(),
//         });
//       });
//       setMovieList(movieData);
//     });

//     return () => unsubscribe();
//   }, []);

//   //Delete Movie
//   const deleteMovie = async (id) => {
//     try {
//       setError("");
//       await deleteDoc(doc(db, "movies", id));
//       console.log("Deleted movie");
//     } catch (err) {
//       setError("Error with deleting movie");
//     }
//   };

//   //Update
//   //Update states

//   const [updatedTitle, setUpdatedTitle] = useState("");
//   const updateMovieTitle = async (id) => {
//     setError("");
//     try {
//       const movieDoc = doc(db, "movies", id);
//       await updateDoc(movieDoc, { title: updatedTitle });
//     } catch {
//       setError("Error with updating title.");
//     }
//   };

//   return (
//     <>
//       <NavBarUser />
//       <div>Workouts</div>
//       <div>
//         {movieList.map((movie) => (
//           <div key={movie.id}>
//             <h1>{movie.title}</h1>
//             <p>Date {movie.releaseDate}</p>
//             <button onClick={() => deleteMovie(movie.id)}>Delete Movie</button>
//             <input
//               placeholder="new title"
//               onChange={(e) => setUpdatedTitle(e.target.value)}
//             />
//             <button onClick={() => updateMovieTitle(movie.id)}>
//               Update Movie
//             </button>
//           </div>
//         ))}
//       </div>
//     </>
//   );
// }
