import { useState } from "react";
import axios from "axios";
import React from "react";
import { Spinner, Alert } from 'react-bootstrap';



const Water = () => {

	const [msg, setMsg] = useState("");
	const [showMsg, setShowMsg] = useState(true);
	const [isLoading, setLoading] = useState(false);

	const user = localStorage.getItem("user");
	const userobject = JSON.parse(user);

	const [data, setData] = useState({
		water: userobject.username
	  });

	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMsg("");
		setLoading(true);
        try {
            console.log("aaa");
            const url = "http://localhost:5000/water/water";
            console.log("err");
			const { data: res } = await axios.post(url, data);
            setMsg(res.message);
			setShowMsg(true);
			setLoading(false);
			setData({
				water: ""
			});
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div class="container p-4 m-2 mx-auto mt-3 bg-light rounded shadow-lg" id="signup-component">
            <h3 className="mb-4">Water</h3>
            <form onSubmit={handleSubmit}>
                <div className="form-group py-2">
					<h5>Water</h5>
					<input
						type="hidden"
						name="water"
						onChange={handleChange}
						value={userobject.username}
						required
						className="form-control"
					/>
                </div>

				{msg &&
					<Alert show={showMsg} variant="success" className="mt-2">
						{msg}
					</Alert>
				}

				<div className="form-group py-2 mt-2">
					<input type="submit" value="Water" className="btn btn-primary" />
					<span className="m-2 p-2">
						{isLoading ? <Spinner animation="border" size="sm" variant="secondary" /> : ""}
					</span>
				</div>
            </form>
        </div>
    );
};

export default Water;