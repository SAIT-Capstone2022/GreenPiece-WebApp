import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {

    render() {
        return (
            <nav class="navbar navbar-expand-lg navbar-dark shadow-lg bg-gradient">
                <div class="container-fluid align-text-middle">
                    <text class="navbar-brand">Green Piece</text>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText"
                        aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarText">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <Link to="/dashboard" class="nav-link" aria-current="page" href="dashboard.html">Dashboard</Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/controllers" class="nav-link" href="controllers.html">Controllers</Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/settings" class="nav-link" href="settings.html">Settings</Link>
                            </li>
                        </ul>
                        <span class="navbar-text">
                            <Link to="/" class="nav-link" href="index.html">Logout</Link>
                        </span>
                    </div>
                </div>
            </nav>
        );
    }
}

