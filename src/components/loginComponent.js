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

// import {useNavigate} from 'react-router-dom';




// export default class Login extends Component {
//     constructor(props) {
//         super(props);

//         this.onChangeEmail = this.onChangeEmail.bind(this);
//         this.onChangePassword = this.onChangePassword.bind(this);
//         this.handleLogin = this.handleLogin.bind(this);

//         this.state = {
//             email: '',
//             password: '',
//             message: ''
//         }
//     }

//     onChangeEmail(e) {
//         this.setState({
//             email: e.target.value
//         })
//     }

//     onChangePassword(e) {
//         this.setState({
//             password: e.target.value
//         })
//     }

//     handleLogin = async (e) => {
//         e.preventDefault();
//         // const navigate = useNavigate();

//         const user = {
//             email: this.state.email,
//             password: this.state.password
//         }

//         console.log(user);

//         try {
//             const response = await axios.post("http://localhost:5000/auth", user);
//             window.location = "/Dashboard";
//             console.log(response);
//             // navigate("/Dashboard");
//         } catch (error) {

//         }
//     }


//     render() {
//         return (
//             <div class="container p-4 m-2 mx-auto mt-3 bg-light rounded shadow-lg" id="login-container">
//                 <header>
//                     <h1>Welcome to Green Piece</h1>
//                 </header>
//                 <div class="mb-4">
//                     <p>Not a registered? <a href="/Signup">Sign Up</a></p>
//                 </div>

//                 <form onSubmit={this.handleLogin}>
//                     <div class="form-outline mb-4">
//                         <input type="text" required placeholder="Email Address" className="form-control" value={this.state.email} onChange={this.onChangeEmail} />
//                     </div>

//                     <div class="form-outline mb-4">
//                         <input type="password" required placeholder="Password" className="form-control" value={this.state.password} onChange={this.onChangePassword} />
//                     </div>

//                     <div class="form-check">
//                         <input class="form-check-input" type="checkbox" value="" id="form2Example31" />
//                         <label class="form-check-label" for="form2Example31"> Remember me </label>
//                     </div>
//                     <div class="mb-4">
//                         <a href="/forgot-password">Forgot password?</a>
//                     </div>

//                     <input type="submit" value="Sign in" class="btn btn-primary btn-block mb-2" />
//                 </form>
//             </div>
//         )
//     }
// }