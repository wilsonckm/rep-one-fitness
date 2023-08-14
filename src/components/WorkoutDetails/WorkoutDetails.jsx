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

export default function WorkoutDetails() {
  return (
    <>
      <div>New workout details</div>
      <div>
        {movieList.map((movie) => (
          <div key={movie.id}>
            <h1>{movie.title}</h1>
            <p>Date {movie.releaseDate}</p>
            <button onClick={() => deleteMovie(movie.id)}>Delete Movie</button>
            <input
              placeholder="new title"
              onChange={(e) => setUpdatedTitle(e.target.value)}
            />
            <button onClick={() => updateMovieTitle(movie.id)}>
              Update Movie
            </button>
          </div>
        ))}
      </div>
    </>
  );
}
