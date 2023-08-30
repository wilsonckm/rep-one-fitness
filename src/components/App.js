import Signup from "./Signup/Signup";
import { AuthProvider } from "../contexts/AuthContext";
import { Routes, Route } from "react-router-dom";
import Welcome from "../pages/Welcome/Welcome";
import Profile from "../pages/Profile/Profile";
import Login from "./Login/Login";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import ForgotPassword from "./ForgotPassword/ForgotPassword";
import UpdateProfile from "./UpdateProfile/UpdateProfile";
import Home from "../pages/Home/Home";
import Workouts from "../pages/Workouts/Workouts";
import NewWorkouts from "../pages/NewWorkouts.jsx/NewWorkouts";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import EditWorkout from "../pages/Edit/EditWorkout";

function App() {
  return (
    <>
      <AuthProvider>
        <Routes>
          <Route
            path="/update-profile"
            element={
              <PrivateRoute>
                <UpdateProfile />
              </PrivateRoute>
            }
          />
          <Route
            path="/welcome"
            element={
              <PrivateRoute>
                <Welcome />
              </PrivateRoute>
            }
          />
          <Route
            path="/profile"
            element={
              <PrivateRoute>
                <Profile />
              </PrivateRoute>
            }
          />
          <Route
            path="/workouts"
            element={
              <PrivateRoute>
                <Workouts />
              </PrivateRoute>
            }
          />
          <Route
            path="/workouts/new"
            element={
              <PrivateRoute>
                <NewWorkouts />
              </PrivateRoute>
            }
          />
          <Route
            path="/edit/:workoutId"
            element={
              <PrivateRoute>
                <EditWorkout />
              </PrivateRoute>
            }
          />

          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </AuthProvider>
    </>
  );
}

export default App;
