import { Container } from "react-bootstrap";
import Signup from "./Signup/Signup";
import { AuthProvider } from "../contexts/AuthContext";
import { Routes, Route } from "react-router-dom";
import Welcome from "../pages/Welcome/Welcome";
import Dashboard from "../pages/Dashboard/Dashboard";
import Login from "./Login/Login";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import ForgotPassword from "./ForgotPassword/ForgotPassword";
import UpdateProfile from "./UpdateProfile/UpdateProfile";

function App() {
  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="w-100" style={{ maxWidth: "400px" }}>
        <AuthProvider>
          <Routes>
            <Route
              path="/"
              element={
                <PrivateRoute>
                  <Dashboard />
                </PrivateRoute>
              }
            />
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
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
          </Routes>
        </AuthProvider>
      </div>
    </Container>
  );
}

export default App;
