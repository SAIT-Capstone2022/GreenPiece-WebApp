import { useState } from "react";
import axios from "axios";
import React from "react";

const Login = () => {
	const [data, setData] = useState({ email: "", password: "" });
	const [error, setError] = useState("");

	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const url = "http://localhost:5000/auth";
			const { data: res } = await axios.post(url, data);
			localStorage.setItem("token", res.data);
			window.location = "/Dashboard";
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
				
                <h3>Login</h3>

				<div class="mb-4">
                     <p>Not registered yet? <a href="/Signup">Sign Up</a></p>
                 </div>
			<form onSubmit={handleSubmit}>
				<div className="form-group py-3">
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

				<div className="form-group py-3">
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

				<div class="mb-4">
                         <a href="/forgot-password">Forgot password?</a>
                </div>

                <div className="form-group py-3">
					{error && <div >{error}</div>}
					
					<input type="submit" value="Submit" className="btn btn-primary" />
				</div>

            </form>
        </div>

    );
};
    export default Login;
