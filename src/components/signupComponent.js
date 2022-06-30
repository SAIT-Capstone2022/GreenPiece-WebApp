import React, { Component } from 'react';
import axios from 'axios';

export default class CreateVisitor extends Component {
  constructor(props) {
    super(props);

    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangePhonenumber = this.onChangePhonenumber.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      email: '',
      password: '',
      username: '',
      phonenumber: '',
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

  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    })
  }

  onChangePhonenumber(e) {
    this.setState({
      phonenumber: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const user = {
      email: this.state.email,
      password: this.state.password,
      username: this.state.username,
      phonenumber: this.state.phonenumber
    }

    console.log(user);

    axios.post('http://localhost:5000/users/add', user)
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
  }

  render() {
    return (
      <div class="container p-4 m-2 mx-auto mt-3 bg-light rounded shadow-lg" id="signup-component">
        <h3>User Sign Up</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group py-3">
            <h5>E-mail</h5>
            <input type="text" required placeholder="Example@example.com" className="form-control" value={this.state.email} onChange={this.onChangeEmail} pattern="[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$"/>
          </div>

          <div className="form-group py-3">
          <h5>Password</h5>
            <input type="text" required placeholder="Password" className="form-control" value={this.state.password} onChange={this.onChangePassword} pattern="^(?=.[a-z])(?=.[A-Z])(?=.[0-9])(?=.[!@#$%^&*_=+-])$"/>
          <p>
            Requires at least<br></br>
            1 Uppercase, 1 Lowercase, 1 Number, 1 Symbol (!@#$%^&*_=+-) 
          </p>
          </div>

          <div className="form-group py-3">
          <h5>Username</h5>
            <input type="text" required placeholder="Username" className="form-control" value={this.state.username} onChange={this.onChangeUsername} pattern="[A-Za-z0-9_-]{6,20}\S" />
          </div>

          <div className="form-group py-3">
          <h5>Phone Number</h5>
            <input type="text" required placeholder="(xxx)-xxx-xxxx" className="form-control" value={this.state.phonenumber} onChange={this.onChangePhonenumber} pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"/>
          </div>

          <div className="form-group py-3">
            <input type="submit" value="Submit" className="btn btn-primary" />
            <span className="mx-3 text-success" id="message">{this.state.message}</span>
          </div>

        </form>
      </div>
    )
  }
}