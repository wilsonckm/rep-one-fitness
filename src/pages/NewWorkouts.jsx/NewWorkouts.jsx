import React from "react";
import NavBarUser from "../../components/NavBar/NavBarUser";
import NewWorkoutForm from "../../components/NewWorkoutForm/NewWorkoutForm";

export default function NewWorkouts() {
  return (
    <>
      <NavBarUser />
      <div>NewWorkouts</div>
      <NewWorkoutForm />
    </>
  );
}
