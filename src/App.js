import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import SignupComponent from "./components/signupComponent";
import EmailVerify from "./components/emailVerify.js";
import Login from "./components/loginComponent";
import Navbar from "./components/navbarComponent";
import Dashboard from "./components/dashboardComponent";
import "bootstrap/dist/css/bootstrap.min.css";
import ForgotPassword from "./components/forgotPassword";
import PasswordReset from "./components/passwordReset";

function App() {
  const user = localStorage.getItem("token")
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/Signup" element={<SignupComponent />} />
        <Route path="/login" element={<Login />} />
        <Route path="/users/:id/verify/:token" element={<EmailVerify />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/password-reset/:id/:token" element={<PasswordReset />} />
        {user &&<Route path="/Dashboard" element={<Dashboard />} />}
        <Route path="/" exact element={<Navigate replace to = "/login"/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
