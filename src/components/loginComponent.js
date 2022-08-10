import { useState } from "react";
import axios from "axios";
import React from "react";
import GroupImage from "../images/groupPhoto.jpg";
import GreenhouseImage from "../images/greenhouseImg.jpg";
import GreenSoftwareImage from "../images/GreenSoftware.jpeg";
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
			const url = `${process.env.REACT_APP_BASE_URL}/auth`;
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
				<div className="col-lg-5 pt-5 my-3">
					<h2>Welcome to Green Piece!</h2>
					<p className="pe-5" style={{ fontSize: '19px' }}>
						This is the home page for Green Piece and the sign in page for our Greenhouse
						Monitoring System. We help our clients access organic level fresh vegetables
						and improve their physical health and spirit.
						Go ahead and sign in if you are already set up to gain
						access to your own personalized greenhouse and user pages.
						If you are just getting started and please sign up. If you
						are new here, please feel free to read up on us, our
						product, this application, and
						our vision below!
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

			<div class="transparentbackground" >

			<Row className="justify-content-center mt-5 py-5 bg-light">
				<div className="col-lg-5 ps-5 pt-3">
					<h5>The Green Piece Product</h5>
					<p>
					With our “Green Piece” you can be afforded peace of mind on whether you must attend to your plants. 
					You can garden, yet still have the time to live your busy life away from the garden. For those of us who may have felt they were too forgetful to get into gardening, 
					this product will provide helpful alerts and reminders to make sure that your plants are receiving the exact amount of care that they need. 
					If you are interested in learning more about our product, please contact us through email at greenpiececontact22@gmail.com
					</p>
				</div>
				<div className="col-lg-3 justify-content-center my-auto">
					<img className="shadow-lg" src={GreenSoftwareImage} size width="100%" height="277px" alt="" />
				</div>
			</Row>

				<Row className="justify-content-center py-5 bg-light">
					<div className="col-lg-3 justify-content-center my-auto">
						<img className="shadow-lg" src={GreenhouseImage} width="100%" height="auto" alt="" />
					</div>
					<div className="col-lg-5 pe-5 pt-3">
						<h5>Gardening and Greenhouses for Sustainability</h5>
						<p>
							There are multiple health and environmental benefits to growing and consuming your own food. If you are not growing plants for consumption,
							the process of gardening alone is positive for your physical and mental health.  There is something intrinsically positive about the
							gardening process, and now more than ever people in urban environments are getting involved. Greenhouse gardening is an efficient way to
							grow food on a relatively small piece of property without compromising soil quality. Greenhouses help keep surrounding areas undisturbed,
							preserving the ecosystems and wildlife that live there. Compared to conventional farming, growing in greenhouses is a more sustainable
							method of food production. But if designed without sustainability in mind, greenhouses can be quite energy and water intensive. From their
							construction to operation, sustainable greenhouses are designed to preserve resources and have a low environmental impact...
							<a href="https://www.gardeningknowhow.com/special/greenhouses/greenhouse-gardening.htm" target="_blank" rel="noopener noreferrer"> Learn More</a>
						</p>
					</div>
				</Row>

				<Row className="justify-content-center py-5 bg-light">
					<div className="col-lg-5 ps-5 pt-3">
						<h5>About Our Team</h5>
						<p>
						A group of ragtag software development students out of Calgary, Alberta came together in our final semester to create Green Piece.
						 The members of our team aligned with our values on sustainability, innovative products, and making green everywhere we go! 
						 The team consists of Victor, Jae, Jin-Young, Rei, David, and Kevin. Each of us have a unique technical background, 
						 and together we were able to create a product that integrates accurate readings, and an easy-to-use application.
						</p>
					</div>
					<div className="col-lg-3 justify-content-center my-auto">
						<img className="shadow-lg" src={GroupImage} width="100%" height="auto" alt="" />
					</div>
				</Row>
			</div>
		</div>
	);
};
export default Login;


