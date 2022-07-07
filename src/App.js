import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import SignupComponent from "./components/signupComponent";
import EmailVerify from "./components/emailVerify.js";
import Login from "./components/loginComponent";
import Navbar from "./components/navbarComponent";
import Dashboard from "./components/dashboardComponent";
import Bar from "./components/logoBar";
import "bootstrap/dist/css/bootstrap.min.css";
import ForgotPassword from "./components/forgotPassword";
import PasswordReset from "./components/passwordReset";
import Footer from "./components/footer";

function App() {
  const user = localStorage.getItem("token")
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Signup" element={[<Bar />, <SignupComponent />]} />
        <Route path="/login" element={[<Bar />, <Login />]} />
        <Route path="/users/:id/verify/:token" element={[<Bar />, <EmailVerify />]} />
        <Route path="/forgot-password" element={[<Bar />, <ForgotPassword />]} />
        <Route path="/password-reset/:id/:token" element={[<Bar />, <PasswordReset />]} />
        {user && <Route path="/Dashboard" element={[<Navbar />, <Dashboard />]} />}
        <Route path="/" exact element={<Navigate replace to = "/login"/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
