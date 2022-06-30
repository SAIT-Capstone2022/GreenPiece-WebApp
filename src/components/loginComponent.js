import axios from 'axios';
import React, { Component } from 'react';
// import {useNavigate} from 'react-router-dom';

export default class Login extends Component {
    constructor(props) {
        super(props);

        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.handleLogin = this.handleLogin.bind(this);

        this.state = {
            email: '',
            password: '',
            message: ''
        }
    }

    onChangeEmail(e) {
        this.setState({
            email: e.target.value
        })
    }

    onChangePassword(e) {
        this.setState({
            password: e.target.value
        })
    }

    handleLogin = async (e) => {
        e.preventDefault();
        // const navigate = useNavigate();

        const user = {
            email: this.state.email,
            password: this.state.password
        }

        console.log(user);

        try {
            const response = await axios.post("http://localhost:5000/auth", user);
            window.location = "/Dashboard";
            console.log(response);
            // navigate("/Dashboard");
        } catch (error) {

        }
    }

    render() {
        return (
            <div class="container p-4 m-2 mx-auto mt-3 bg-light rounded shadow-lg" id="login-container">
                <header>
                    <h1>Welcome to Green Piece</h1>
                </header>
                <div class="mb-4">
                    <p>Not a registered? <a href="/Signup">Sign Up</a></p>
                </div>

                <form onSubmit={this.handleLogin}>
                    <div class="form-outline mb-4">
                        <input type="text" required placeholder="Email Address" className="form-control" value={this.state.email} onChange={this.onChangeEmail} />
                    </div>

                    <div class="form-outline mb-4">
                        <input type="password" required placeholder="Password" className="form-control" value={this.state.password} onChange={this.onChangePassword} />
                    </div>

                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="form2Example31" />
                        <label class="form-check-label" for="form2Example31"> Remember me </label>
                    </div>
                    <div class="mb-4">
                        <a href="#!">Forgot password?</a>
                    </div>

                    <input type="submit" value="Sign in" class="btn btn-primary btn-block mb-4" />
                </form>
            </div>
        )
    }
}