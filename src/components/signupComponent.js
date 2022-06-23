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
      phonenumber: ''
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
      .then(res => console.log(res.data));

    this.setState({
      email: '',
      password: '',
      username: '',
      phonenumber: ''
    })
  }

  render() {
    return (
      <div>
        <h3>User Sign Up!</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>email: </label>
            <input type="text" required className="form-control" value={this.state.email} onChange={this.onChangeEmail} />
          </div>

          <div className="form-group">
            <label>password: </label>
            <input type="text" required
              className="form-control"
              value={this.state.password}
              onChange={this.onChangePassword} />
          </div>

          <div className="form-group">
            <label>username: </label>
            <input type="text" required
              className="form-control"
              value={this.state.username}
              onChange={this.onChangeUsername} />
          </div>

          <div className="form-group">
            <label>phonenumber: </label>
            <input type="text" required
              className="form-control"
              value={this.state.phonenumber}
              onChange={this.onChangePhonenumber} />
          </div>

          <div className="form-group">
            <input type="submit" value="Submit" className="btn btn-primary" />
          </div>

        </form>
      </div>
    )
  }
}