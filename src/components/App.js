import { Container } from "react-bootstrap";
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
import NavBarUser from "./NavBar/NavBarUser";

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

          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
        </Routes>
      </AuthProvider>
    </>
  );
}

export default App;
