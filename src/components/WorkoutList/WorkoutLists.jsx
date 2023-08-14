import React, { useEffect, useState } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../../firebase";
import MovieItem from "../WorkoutCard/WorkoutCard";

function WorkoutsList() {
  const [movieList, setMovieList] = useState([]);
  const moviesCollectionRef = collection(db, "movies");

  useEffect(() => {
    const unsubscribe = onSnapshot(moviesCollectionRef, (querySnapshot) => {
      const movieData = [];
      querySnapshot.forEach((doc) => {
        movieData.push({
          id: doc.id,
          ...doc.data(),
        });
      });
      setMovieList(movieData);
    });

    return () => unsubscribe();
  }, []);

  return (
    <div>
      {movieList.map((movie) => (
        <MovieItem key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

export default WorkoutsList;
