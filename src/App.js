import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignupComponent from "./components/signupComponent";
import Login from "./components/loginComponent";
import Navbar from "./components/navbarComponent";
import Dashboard from "./components/dashboardComponent";
import Bar from "./components/loginBar";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Signup" element={[<Bar />, <SignupComponent />]} />
        <Route path="/" element={[<Bar />, <Login />]} />
        <Route path="/Dashboard" element={[<Navbar />, <Dashboard />]} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
