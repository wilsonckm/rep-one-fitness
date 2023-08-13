import React, { useEffect, useState } from "react";
import NavBarUser from "../../components/NavBar/NavBarUser";
import { db } from "../../firebase";
import { collection, doc, getDoc } from "firebase/firestore";

export default function Workouts() {
  const [movieList, setMovieList] = useState([]);

  //Select what collection you want to get data from
  const moviesCollectionRef = collection(db, "movies");

  useEffect(() => {
    const getMovieList = async () => {
      try {
        const data = await getDoc(moviesCollectionRef);
      } catch (err) {
        console.error(err);
      }
      //Read the Data
      //set the movie List
    };
  }, []);

  return (
    <>
      <NavBarUser />
      <div>Workouts</div>;
    </>
  );
}
