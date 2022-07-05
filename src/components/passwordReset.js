import axios from "axios";
import { useState, useEffect, Fragment } from "react";
import {useParams} from 'react-router-dom';
import React from "react";


const PasswordReset = () => {
    const [validUrl, setValidUrl] = useState(false);
    const [password, setPassword] = useState("");
    const [msg, setMsg] = useState("");
    const [error, setError] = useState("");
    const param = useParams();
    const url = `http://localhost:5000/password-reset/${param.id}/${param.token}`

    useEffect(() => {
        const verifyUrl = async () => {
            try {
                await axios.get(url)
                setValidUrl(true)
            } catch (error) {
                setValidUrl(false)
                
            }
        }
        verifyUrl()
    }, [param, url]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const {data} = await axios.post(url, {password});
            setMsg(data.message);
            setError("");
            window.location = "/login"
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
        <Fragment>
            {validUrl ? (
                <div class="container p-4 m-2 mx-auto mt-3 bg-light rounded shadow-lg">
                <h3>New Password</h3>
         
                 <form onSubmit={handleSubmit}>
                     <div className="form-group py-3">
                         <h5>New Password</h5>
                         <input
                             type="password"
                             placeholder="Password"
                             name="password"
                             onChange={(e)=> setPassword(e.target.value)}
                             value={password}
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
            ): (
                <h1>404 Not Found</h1>
            )}


        </Fragment>
    )
}

export default PasswordReset;