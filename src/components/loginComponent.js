import { useState } from "react";
import axios from "axios";
import React from "react";
import GroupImage from "../images/groupPhoto.jpg";
import GreenhouseImage from "../images/greenhouseImg.jpg"
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
			localStorage.clear();
			localStorage.setItem("user", JSON.stringify(res.user));
			window.location = "/dashboard";
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
		<div className="container-fluid mt-5">
			<Row className="justify-content-center mb-3">
				<div className="col-lg-5 p-5 my-3">
					<h3>Welcome Green Piece</h3>
					<p className="pe-5" style={{ fontSize: '20px' }}>
						Here at Green Piece, we believe in giving 110%. By providing a Greenhouse Monitoring System,
						we help our clients access organic level fresh vegetable and improve their physical health and spirit.
						We thrive because of our technology and a great team behind our product.
					</p>
				</div>

				<div class="col-lg-3 p-4 m-2 bg-light rounded shadow-lg" id="signup-component">
					<h3 className="mb-4">Login</h3>
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
								<input type="submit" value="Submit" className="btn btn-success" />
								<span className="m-2 p-2">
									{isLoading ? <Spinner animation="border" size="sm" variant="secondary" /> : ""}
								</span>
							</div>
						</div>
					</form>
				</div>
			</Row>
			<Row className="justify-content-center mt-5 py-5 bg-light">
				<div className="col-lg-5 pe-5 pt-3">
					<h5>Greenhouse for Sustainability</h5>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
						aliqua. Purus ut faucibus pulvinar elementum integer enim. Integer quis auctor elit sed. Malesuada bibendum arcu
						vitae elementum curabitur. Commodo ullamcorper a lacus vestibulum sed arcu non odio euismod. Imperdiet nulla malesuada
						pellentesque elit eget. Dolor magna eget est lorem ipsum dolor sit amet consectetur. Odio euismod lacinia at quis risus
						sed. Dignissim sodales ut eu sem integer vitae justo. Fusce ut placerat orci nulla. <a href="https://www.gardeningknowhow.com/special/greenhouses/greenhouse-gardening.htm" target="_blank" rel="noopener noreferrer">Learn More</a>
					</p>
				</div>
				<div className="col-lg-3 justify-content-center my-auto">
					<img className="shadow-lg" src={GreenhouseImage} width="100%" height="auto" alt="" />
				</div>
			</Row>
			<Row className="justify-content-center py-5 bg-light">
				<div className="col-lg-3 justify-content-center my-auto">
					<img className="shadow-lg" src={GroupImage} width="100%" height="auto" alt="" />
				</div>
				<div className="col-lg-5 ps-5 pt-3">
					<h5>About the Team</h5>
					<p>
						A ragtag group of student developers with hopes of someday making it big, these rascals banded together to try and make
						something unique for their <i><a href="https://www.sait.ca/" target="_blank" rel="noopener noreferrer">SAIT</a></i> capstone project.
						Some members are more comfortable handling the front-end/back-end coding while some prefer to do the hardware coding.
						Although each member has their own shortcomings when it comes to coding, with the help of each other they were able to fill
						in those gaps and become unstopabble. It was not an easy journey for this team, suffering from low motivation throughout
						their semester as well as an unresponsive client, it was difficult to progress without the proper guidance. Somehow though,
						this group managed to create something cool in the end :3
					</p>
				</div>
			</Row>
		</div>
	);
};
export default Login;


