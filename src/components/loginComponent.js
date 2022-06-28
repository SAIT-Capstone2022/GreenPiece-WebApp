import React, { Component } from 'react';
import axios from 'axios';

export default class Login extends Component {
    constructor(props) {
        super(props);
    
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    
        this.state = {
          email: '',
          password: '',
          users: []
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

      onSubmit(e) {
        e.preventDefault();
    
        axios.get('http://localhost:5000/users/get')
          .then(res => {console.log(res.data) 
            this.setState({
              email: '',
              password: '',
              username: '',
              phonenumber: '',
              message: "Account successfully created."
            })
          })
          .catch(err => {
            this.setState({
              email: this.state.email,
              password: this.state.password,
              username: this.state.username,
              phonenumber: this.state.phonenumber,
              message: "Email already in use, please try a different one."
            })
          })

          const user = {
            email: this.state.email,
            password: this.state.password,
          }
      
          console.log(user);
      }


    render() {
        return (
            <div class="container p-4 m-2 mx-auto mt-3 bg-light rounded shadow-lg">
                <header>
                    <h1>Welcome to Green Piece</h1>
                </header>
                <div class="mb-4">
                    <p>Not a registered? <a href="/Signup">Sign Up</a></p>
                </div>
                
                <form>
                    <div class="form-outline mb-4">
                        <input type="email" id="form2Example1" class="form-control" placeholder='Email Address' />
                    </div>

                    <div class="form-outline mb-4">
                        <input type="password" id="form2Example2" class="form-control" placeholder='Password' />
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