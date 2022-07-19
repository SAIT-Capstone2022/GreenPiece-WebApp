import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import GPbarlogo from '../images/logo.jpg';

export default class Navbar extends Component {
    render() {

        const sessionKill = () => {
        localStorage.clear();
        }

        return (
            <nav className="navbar navbar-expand-lg navbar-dark shadow-lg bg-gradient p-0">
                <div className="container-fluid align-text-middle">
                    <img src={GPbarlogo} width="125px" alt="Logo" />
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText"
                        aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarText">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item py-2">
                                <Link to="/dashboard" className="nav-link" aria-current="page" href="dashboard.html">Dashboard</Link>
                            </li>
                            <li className="nav-item py-2">
                                <Link to="/profile" className="nav-link" href="profile.html">Profile</Link>
                            </li>
                            <li className="nav-item py-2">
                                <Link to="/water" className="nav-link" href="water.html">Water</Link>
                            </li>
                            {/* <li className="nav-item">
                                <Link to="/settings" className="nav-link" href="settings.html">Settings</Link>
                            </li> */}
                        </ul>
                        <div className="navbar-text">
                            <Link to="/" className="nav-link" href="index.html" onClick={sessionKill} >Logout</Link>
                        </div>
                    </div>
                </div>
            </nav>
        );
    }
}

