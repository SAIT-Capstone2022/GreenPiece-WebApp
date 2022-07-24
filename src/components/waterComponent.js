import { useState } from "react";
import { Navigate } from 'react-router-dom';
import Calendar from 'react-calendar';
import './calendar.css';
import axios from "axios";
import React from "react";
import { Spinner, Alert } from 'react-bootstrap';

const Water = () => {
	const [msg, setMsg] = useState("");
	const [showMsg, setShowMsg] = useState(true);
	const [isLoading, setLoading] = useState(false);
	const [date, dateOnChange] = useState(new Date());
	const weekStart = 3;

	const user = localStorage.getItem("user");
	const userobject = JSON.parse(user);

	if (userobject == null) {
		return (
			<Navigate to="/login" replace={true} />
		);
	}

	const [data, setData] = useState({
		_id: userobject._id
	});

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const url = "http://localhost:5000/users/water-update";
			const { data: res } = await axios.post(url, data);
			setMsg(res.message);
			setShowMsg(true);
			setLoading(false);
			setData({
				water: ""
			});
		} catch (error) {
			setLoading(false);
			console.log(error);
		}
	}
	return (
		<div className="container p-4 mt-3 mb-5 mx-auto bg-light rounded shadow-lg" id="signup-component">
			<h3 className="mb-4">Watering History</h3>
			<form onSubmit={handleSubmit}>
				<div className="pb-4">
					<Calendar className="mx-auto rounded" onChange={dateOnChange} value={date} calendarType="US" />
				</div>

				<div className="form-group py-2">
					<h5 className="m-0">Have you watered your plants today?</h5>
				</div>

				{msg &&
					<Alert show={showMsg} variant="success" className="mt-2">
						{msg}
					</Alert>
				}

				<div className="form-group mt-2">
					<input type="submit" value="Watered" className="btn btn-success" />
					<span className="m-2 p-2">
						{isLoading ? <Spinner animation="border" size="sm" variant="secondary" /> : ""}
					</span>
				</div>
			</form>
		</div>
	);
};

export default Water;