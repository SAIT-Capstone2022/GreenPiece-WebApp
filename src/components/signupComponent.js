import { useState } from "react";
import axios from "axios";
import React from "react";

const Signup = () => {
	const [data, setData] = useState({
		email: "",
		password: "",
		username: "",
		phonenumber: ""
	});
	const [error, setError] = useState("");
	const [msg, setMsg] = useState("");

	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const url = "http://localhost:5000/users";
			const { data: res } = await axios.post(url, data);
			setError("");
			setMsg(res.message);
			setData({
				email: "",
				password: "",
				username: "",
				phonenumber: ""
			});
		} catch (error) {
			if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
				setError(error.response.data.message);
			}
		}
	};

	return (
		<div class="container p-4 m-2 mx-auto mt-3 bg-light rounded shadow-lg" id="signup-component">

			<h3>Sign Up</h3>

			<div class="mb-3">
				<p>Have an account? <a href="/">Log In</a></p>
			</div>
			<form onSubmit={handleSubmit}>
				<div className="form-group py-2">
					<h5>E-mail</h5>
					<input
						type="email"
						placeholder="Email"
						name="email"
						onChange={handleChange}
						value={data.email}
						required
						className="form-control"
					/>
				</div>

				<div className="form-group py-2">
					<h5>Password</h5>
					<input
						type="password"
						placeholder="Password"
						name="password"
						onChange={handleChange}
						value={data.password}
						required
						className="form-control"
					/>
				</div>

				<div className="form-group py-2">
					<h5>Username</h5>
					<input
						type="text"
						placeholder="User Name"
						name="username"
						onChange={handleChange}
						value={data.username}
						required
						className="form-control"
					/>
				</div>

				<div className="form-group py-2">
					<h5>Phone Number</h5>
					<input
						type="text"
						placeholder="Phone Number"
						name="phonenumber"
						onChange={handleChange}
						value={data.phonenumber}
						required
						className="form-control"
					/>
				</div>

				<div className="form-group py-2">
					{error && <div className="text-danger">{error}</div>}
					{msg && <div className="text-success">{msg}</div>}

					<input type="submit" value="Submit" className="mt-3 btn btn-primary" />
				</div>

			</form>
		</div>
	);
};

export default Signup;