import { useState } from "react";
import axios from "axios";
import React from "react";
import { Row, Spinner, Alert } from 'react-bootstrap';

const Login = () => {
	const [data, setData] = useState({ email: "", password: "" });
	const [error, setError] = useState("");
	const [showErr, setShowErr] = useState(true);
	const [isLoading, setLoading] = useState(false);

	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setShowErr(false);
		setLoading(true);
		try {
			const url = "http://localhost:5000/auth";
			const { data: res } = await axios.post(url, data);
			localStorage.setItem("token", res.data);
			localStorage.setItem("user", JSON.stringify(res.user));
			window.location = "/Dashboard";
		} catch (error) {
			if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
				setLoading(false);
				setError(error.response.data.message);
				setShowErr(true);
			}
		}
	};
	
	return (
		
		<div class="container p-4 m-2 mx-auto mt-3 bg-light rounded shadow-lg" id="signup-component">
			<h3 className="mb-4">Green Piece Login</h3>

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
		
				<Row className="mt-2">
					<div class="col-6">
						<p>Not registered yet? <a href="/Signup">Sign Up</a></p>
					</div>
					<div class="col-6 text-end">
						<a href="/forgot-password">Forgot password?</a>
					</div>
				</Row>

				<div className="form-group py-2">
					{error &&
						<Alert show={showErr} variant="danger">
							{error}
						</Alert>
					}

					<div className="form-group">
						<input type="submit" value="Submit" className="btn btn-primary" />
						<span className="m-2 p-2">
							{isLoading ? <Spinner animation="border" size="sm" variant="secondary" /> : ""}
						</span>
					</div>
				</div>

			</form>
		</div>
	
	);
};
export default Login;


