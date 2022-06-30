import React, { Component } from 'react';

export default class Login extends Component {
    render() {
        return (
            <div class="container p-4 m-2 mx-auto mt-3 bg-light rounded shadow-lg" id="login-container">
                <header>
                    <h1>Welcome to Green Piece</h1>
                </header>
                <div class="mb-4">
                    <p>Not a registered? <a href="/Signup">Sign Up</a></p>
                </div>
                
                <form>
                    <div class="form-outline mb-4">
                        <input type="email" id="form2Example1" class="form-control" placeholder='Email Address' required/>
                    </div>

                    <div class="form-outline mb-4">
                        <input type="password" id="form2Example2" class="form-control" placeholder='Password' required/>
                    </div>

                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="form2Example31" />
                        <label class="form-check-label" for="form2Example31"> Remember me </label>
                    </div>
                    <div class="mb-4">
                        <a href="#!">Forgot password?</a>
                    </div>
                    
                    <button type="button" class="btn btn-primary btn-block mb-4">Sign in</button>

                </form>
            </div>
        )
    }
}