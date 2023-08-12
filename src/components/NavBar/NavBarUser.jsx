import { Link } from "react-router-dom";

export default function NavBarUser({ user }) {
  return (
    <nav>
      <span> Exercise Co</span>
      <Link to="/workouts">All Workouts</Link>
      &nbsp; | &nbsp;
      <Link to="/workouts/new">New Workout</Link>
      &nbsp;&nbsp;
      <Link to="/search">Search Exercises</Link>
      &nbsp;&nbsp;
      {/* <Link to="/workouts/new">New Workout</Link> */}
      &nbsp;&nbsp;
      <span>Welcome, {user}</span>
      {/* <Link to="/profile/">Profile</Link> */}
      &nbsp;&nbsp; &nbsp;&nbsp;
    </nav>
  );
}
