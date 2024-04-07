import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/home/index";
import Login from "./components/login/login";
import ErrorPage from "./components/Error/error";
import "./index.css";
import PrivateRoute from "./auth/authentication";


const App = () => {
  return (
    <React.StrictMode>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/error" element={<ErrorPage />} />
          <Route
            path="/"
            element={<PrivateRoute element={<Home />} />}
          />
          <Route path="/*" element={<ErrorPage />} />
        </Routes>
      </Router>
    </React.StrictMode>
  );
};

export default App;