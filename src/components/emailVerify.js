import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Fragment } from "react/cjs/react.production.min";
import React from "react";
import * as ReactBootstrap from 'react-bootstrap';

const EmailVerify = () => {
	const [validUrl, setValidUrl] = useState(true);
	const param = useParams();

	useEffect(() => {
		const verifyEmailUrl = async () => {
			try {
				const url = `http://localhost:5000/users/${param.id}/verify/${param.token}`;
				const { data } = await axios.get(url);
				console.log(data);
				setValidUrl(true);
			} catch (error) {
				console.log(error);
				setValidUrl(false);
			}
		};
		verifyEmailUrl();
	}, [param]);

	return (
		<Fragment>
			{validUrl ? (
				<div class="container p-4 m-2 mx-auto mt-3 bg-light rounded shadow-lg">
					<h1>Email verified successfully</h1>
					<ReactBootstrap.Alert variant="success" className="mt-2">
						Your Email has been successfully verified, pleace proceed to the <ReactBootstrap.Alert.Link href="/">Login Page</ReactBootstrap.Alert.Link>.
					</ReactBootstrap.Alert>
				</div>
			) : (
				<div class="container p-4 m-2 mx-auto mt-3 bg-light rounded shadow-lg">
					<h1>404 Not Found.</h1>
				</div>
			)}
		</Fragment>
	);
};

export default EmailVerify;