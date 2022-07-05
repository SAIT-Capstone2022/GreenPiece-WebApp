import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark shadow-lg bg-gradient">
                <div className="container-fluid align-text-middle">
                    <text className="navbar-brand">Green Piece</text>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText"
                        aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to="/dashboard" className="nav-link" aria-current="page" href="dashboard.html">Dashboard</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/controllers" className="nav-link" href="controllers.html">Controllers</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/settings" className="nav-link" href="settings.html">Settings</Link>
                            </li>
                        </ul>
                        <span className="navbar-text">
                            <Link to="/" className="nav-link" href="index.html">Logout</Link>
                        </span>
                    </div>
                </div>
            </nav>
        );
    }
}

