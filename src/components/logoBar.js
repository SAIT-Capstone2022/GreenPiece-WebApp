import React, { Component } from 'react';
import MyImage from './logo.jpg';


export default class logoBar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark shadow-lg bg-gradient">
                <div className="container-fluid align-text-middle">
                <img src={MyImage} alt="Logo" width="120px" height="100px" class="center"/>
                </div>
            </nav>
        );
    }
}

