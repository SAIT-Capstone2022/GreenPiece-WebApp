import React from "react";
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import SignupComponent from "./components/signupComponent";
import Login from "./components/loginComponent";
import Navbar from "./components/navbarComponent";
import Dashboard from "./components/dashboardComponent";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
      <BrowserRouter>
        <Navbar />
        <Routes>
        <Route path="/Signup" element ={<SignupComponent />} />
        <Route path="/" element ={<Login />} />
        <Route path="/Dashboard" element ={<Dashboard />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
