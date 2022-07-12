import { useState } from "react";
import React, { Component } from 'react';
import axios from "axios";



//to do verification that we have a user in the first place

const ProfileUpdate = () => {

  const user = localStorage.getItem("user");

  const userobject = JSON.parse(user);

const [data, setData] = useState({ 
    _id: userobject._id,
		username: "",
		phonenumber: ""
 });

const handleChange = ({ currentTarget: input }) => {
  setData({ ...data, [input.name]: input.value });
};

const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const url = "http://localhost:5000/users/profile-update";
    console.log(data);
    const { data: res } = await axios.post(url, data);
  } catch (error) {
    if (
      error.response &&
      error.response.status >= 400 &&
      error.response.status <= 500
    ) {
    }
  }
};

    return (

      <div className="container p-4 m-2 mx-auto mt-3 bg-light rounded shadow-lg">
        <form onSubmit={handleSubmit}>
          <h1>Profile Information</h1>
          <div className="form-group py-2">
            <h5>E-mail</h5>
            <input
              type="email"
              placeholder="Email"
              name="email"
              readOnly
              value={userobject.email}
              className="form-control"
            />
          </div>

          <div className="form-group py-2">
            <h5>Password</h5>
            <input
              type="password"
              placeholder="password"
              name="password"
              readOnly
              value={"temp"}
              className="form-control"
            />
          </div>

          <div className="form-group py-2">
            <h5>Username</h5>
            <input
              type="username"
              placeholder="username"
              name="username"
              onChange={handleChange}
              defaultValue={userobject.username}
              required
              className="form-control"
            />
          </div>

          <div className="form-group py-2">
            <h5>PhoneNumber</h5>
            <input
              type="phonenumber"
              placeholder="phonenumber"
              name="phonenumber"
              onChange={handleChange}
              defaultValue={userobject.phonenumber}
              required
              className="form-control"
            />
          </div>

          <div className="form-group">
            <input type="submit" value="Submit" className="btn btn-primary" />
          </div>

        </form>
      </div>
    );
};

export default ProfileUpdate;