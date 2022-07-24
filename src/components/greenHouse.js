import { useState } from "react";
import { Navigate } from 'react-router-dom';
import axios from "axios";
import React from "react";

const GreenhouseUpdate = () => {
  
    const user = localStorage.getItem("user");
    const userobject = JSON.parse(user);

    const [message, setMessage] = useState();

    const [data, setData] = useState({
		_id: userobject._id,
        prefMaxTemp: userobject.prefMaxTemp,
        prefMaxHumidity: userobject.prefMaxHumidity,
        prefMaxMoisture: userobject.prefMaxMoisture,
        prefMinTemp: userobject.prefMinTemp,
        prefMinHumidity: userobject.prefMinHumidity,
        prefMinMoisture: userobject.prefMinMoisture,
	});

    const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};
  
    if (userobject == null) {
      return (
        <Navigate to="/login" replace={true} />
      );
    }
  
    const handleSubmit = async (e) => {
      e.preventDefault();
        const url = "http://localhost:5000/users/GreenhouseAlertValues";
        const { data: res } = await axios.post(url, data);
        localStorage.removeItem("user");
        localStorage.setItem("user", JSON.stringify(res.user));
        setMessage(res.message);
        console.log("max temp:", res.user.prefMaxTemp, "max humidity:", res.user.prefMaxHumidity, "max moisture:", res.user.prefMaxMoisture, "min temp:", res.user.prefMinTemp, "min humidity:", res.user.prefMinHumidity, "min moisture:", res.user.prefMinMoisture);
    };
  
    return (
  
      <div className="container p-4 m-2 mb-5 mx-auto mt-3 bg-light rounded shadow-lg" style={{ maxWidth: "600px" }}>
        <form onSubmit={handleSubmit}>
          <h1>Greenhouse Information</h1>

          <div className="form-group py-2">
            <h5>Preferred Max Temperature</h5>
            <input
              type="number"
              name="prefMaxTemp"
              onChange={handleChange}
              value={userobject.prefMaxTemp}
              required
              className="form-control"
            />
          </div>

          <div className="form-group py-2">
            <h5>Preferred Min Temperature</h5>
            <input
              type="number"
              name="prefMinTemp"
              onChange={handleChange}
              value={userobject.prefMinTemp}
              required
              className="form-control"
            />
          </div>
  
          <div className="form-group py-2">
            <h5>Preferred Max Humidity</h5>
            <input
              type="number"
              name="prefMaxHumidity"
              onChange={handleChange}
              defaultValue={userobject.prefMaxHumidity}
              required
              className="form-control"
            />
          </div>

          <div className="form-group py-2">
            <h5>Preferred Min Humidity</h5>
            <input
              type="number"
              name="prefMinHumidity"
              onChange={handleChange}
              defaultValue={userobject.prefMinHumidity}
              required
              className="form-control"
            />
          </div>
  
          <div className="form-group py-2">
            <h5>Preferred Max Moisture</h5>
            <input
              type="number"
              name="prefMaxMoisture"
              onChange={handleChange}
              defaultValue={userobject.prefMaxMoisture}
              required
              className="form-control"
            />
          </div>

          <div className="form-group py-2">
            <h5>Preferred Min Moisture</h5>
            <input
              type="number"
              name="prefMinMoisture"
              onChange={handleChange}
              defaultValue={userobject.prefMinMoisture}
              required
              className="form-control"
            />
          </div>

          <div className="form-group pt-2">
            <input type="submit" value="Save" className="btn btn-primary" />
          </div>

          <span>
            {message}
          </span>
  
        </form>
      </div>
    );
  };
  
  export default GreenhouseUpdate;