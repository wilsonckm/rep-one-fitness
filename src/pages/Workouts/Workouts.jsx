import React, { useEffect, useState } from "react";
import NavBarUser from "../../components/NavBar/NavBarUser";
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
