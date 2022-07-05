import { useState } from "react";
import axios from "axios";
import React from "react";

const ForgotPassword = () => {
    const [email, setEmail] = useState("");
    const [msg, setMsg] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const url = "http://localhost:5000/password-reset";
            const {data} = await axios.post(url, {email});
            setMsg(data.message);
            setError("")
        } catch (error) {
            if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
				setError(error.response.data.message);
                setMsg("")
			}
        }
    }

    return (
    <div class="container p-4 m-2 mx-auto mt-3 bg-light rounded shadow-lg">
       <h3>Forgot Password</h3>

        <form onSubmit={handleSubmit}>
            <div className="form-group py-3">
                <h5>E-mail</h5>
                <input
                    type="email"
                    placeholder="Email"
                    name="email"
                    onChange={(e)=> setEmail(e.target.value)}
                    value={email}
                    required
                    className="form-control"
                />
            </div>
            <div className="form-group py-3">
				{error && <div >{error}</div>}
				{msg && <div >{msg}</div>}

				<input type="submit" value="Submit" className="btn btn-primary" />
			</div>
        </form>
    </div>
    )
}

export default ForgotPassword;