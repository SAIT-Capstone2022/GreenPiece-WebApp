import React, { Component } from 'react';
import axios from 'axios';

export default class CreateUser extends Component {
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
      message: '',
      messageType: ''
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
      phonenumber: this.state.phonenumber,
      messageType: 'mx-3'
    }

    console.log(user);

    axios.post('http://localhost:5000/users/add', user)
      .then(res => {
        console.log(res.data)
        this.setState({
          email: '',
          password: '',
          username: '',
          phonenumber: '',
          message: "Account successfully created.",
          messageType: 'mx-3 text-success'
        })
      })
      .catch(err => {
        this.setState({
          email: this.state.email,
          password: this.state.password,
          username: this.state.username,
          phonenumber: this.state.phonenumber,
          message: "Email already in use, please try a different one.",
          messageType: 'mx-3 text-danger'
        })
      })
  }

  render() {
    return (
      <div class="container p-4 m-2 mx-auto mt-3 bg-light rounded shadow-lg" id="signup-component">
        <h3>User Sign Up</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group py-3">
            <input type="text" required placeholder="Email Address" className="form-control" value={this.state.email} onChange={this.onChangeEmail} />
          </div>

          <div className="form-group py-3">
            <input type="password" required placeholder="Password" className="form-control" value={this.state.password} onChange={this.onChangePassword} />
          </div>

          <div className="form-group py-3">
            <input type="text" required placeholder="Username" className="form-control" value={this.state.username} onChange={this.onChangeUsername} />
          </div>

          <div className="form-group py-3">
            <input type="text" required placeholder="Phone Number" className="form-control" value={this.state.phonenumber} onChange={this.onChangePhonenumber} />
          </div>

          <div className="form-group py-3">
            <input type="submit" value="Submit" className="btn btn-primary" />
            <span className={this.state.messageType} id="message">{this.state.message}</span>
          </div>

        </form>
      </div>
    )
  }
}