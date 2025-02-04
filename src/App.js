import React, { useContext } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import SignupScreen from "./auth/SignupScreen";
import SigninScreen from "./auth/SigninScreen";
import { AuthContext } from "./context/AuthContext";
import DashboardScreen from "./screens/dashboardScreen";
import CreateEvent from "./screens/createEvent";
import CreateVenueEvent from "./screens/createVenueEvent";

const App = () => {
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/signup" element={<SignupScreen />} />
        <Route path="/signin" element={<SigninScreen />} />

        {/* Protected Route */}
        <Route
          path="/dashboard"
          element={user ? <DashboardScreen /> : <Navigate to="/signin" />}
        />

        {/* Redirect to Signin page if trying to access protected routes without being logged in */}
        <Route path="/" element={<Navigate to="/signup" />} />
        <Route path="/createevent" element={<CreateEvent />} />
        <Route path="/create-venue-event" element={<CreateVenueEvent />} />
      </Routes>
    </Router>
  );
}

export default App;


