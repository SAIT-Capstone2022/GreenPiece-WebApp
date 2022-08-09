import { useState } from "react";
import { Navigate } from 'react-router-dom';
import axios from "axios";
import React from "react";
import { Spinner, Alert } from 'react-bootstrap';

const GreenhouseUpdate = () => {
  const [isLoading, setLoading] = useState(false);

  const user = localStorage.getItem("user");
  const userobject = JSON.parse(user);

  if (userobject == null) {
    return (
      <Navigate to="/login" replace={true} />
    );
  }

  const [msg, setMsg] = useState();
  const [showMsg, setShowMsg] = useState(false);

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = `${process.env.REACT_APP_BASE_URL}/users/GreenhouseAlertValues`;
    const { data: res } = await axios.post(url, data);
    localStorage.removeItem("user");
    localStorage.setItem("user", JSON.stringify(res.user));
    setMsg(res.message);
    setShowMsg(true);
    console.log("max temp:", res.user.prefMaxTemp, "max humidity:", res.user.prefMaxHumidity, "max moisture:", res.user.prefMaxMoisture, "min temp:", res.user.prefMinTemp, "min humidity:", res.user.prefMinHumidity, "min moisture:", res.user.prefMinMoisture);
  };

  return (

    <div className="container p-4 m-2 mb-5 mx-auto mt-3 bg-light rounded shadow-lg" style={{ maxWidth: "600px" }}>
      <form onSubmit={handleSubmit}>
        <h1 class="text-center ">Greenhouse Information</h1>

        <div className="form-group py-2">
          <h5>Preferred Max Temperature (current: {userobject.prefMaxTemp})</h5>
          <h5 class="text-center text-success">{data.prefMaxTemp}</h5>
          <div className="col-lg-5">
            <input
              type="range"
              name="prefMaxTemp"
              min={20}
              max={50}
              onChange={handleChange}
              defaultValue={userobject.prefMaxTemp}
              required
              className="form-control"
            />
          </div>
          <div className="col-lg-5">
            <input
              type="range"
              name="prefMaxTemp"
              min={20}
              max={50}
              onChange={handleChange}
              defaultValue={userobject.prefMaxTemp}
              required
              className="form-control"
            />
          </div>
          <h5 class="text-center">20°C - 50°C</h5>
        </div>

        <div className="form-group py-2">
          <h5>Preferred Min Temperature (current: {userobject.prefMinTemp})</h5>
          <h5 class="text-center text-success">{data.prefMinTemp}</h5>
          <input
            type="range"
            name="prefMinTemp"
            min={10}
            max={20}
            onChange={handleChange}
            defaultValue={userobject.prefMinTemp}
            required
            className="form-control"
          />
          <h5 class="text-center">10°C - 20°C</h5>
        </div>

        <div className="form-group py-2">
          <h5>Preferred Max Humidity (current: {userobject.prefMaxHumidity})</h5>
          <h5 class="text-center text-success">{data.prefMaxHumidity}</h5>
          <input
            type="range"
            name="prefMaxHumidity"
            min={50}
            max={100}
            onChange={handleChange}
            defaultValue={userobject.prefMaxHumidity}
            required
            className="form-control"
          />
          <h5 class="text-center">50% - 100%</h5>
        </div>

        <div className="form-group py-2">
          <h5>Preferred Min Humidity (current: {userobject.prefMinHumidity})</h5>
          <h5 class="text-center text-success">{data.prefMinHumidity}</h5>
          <input
            type="range"
            name="prefMinHumidity"
            min={0}
            max={50}
            onChange={handleChange}
            defaultValue={userobject.prefMinHumidity}
            required
            className="form-control"
          />
          <h5 class="text-center">0% - 50%</h5>
        </div>

        <div className="form-group py-2">
          <h5>Preferred Max Moisture (current: {userobject.prefMaxMoisture})</h5>
          <h5 class="text-center text-success">{data.prefMaxMoisture}</h5>
          <input
            type="range"
            name="prefMaxMoisture"
            min={50}
            max={100}
            onChange={handleChange}
            defaultValue={userobject.prefMaxMoisture}
            required
            className="form-control"
          />
          <h5 class="text-center">50% - 100%</h5>
        </div>

        <div className="form-group py-2">
          <h5>Preferred Min Moisture (current: {userobject.prefMinMoisture})</h5>
          <h5 class="text-center text-success">{data.prefMinMoisture}</h5>
          <input
            type="range"
            name="prefMinMoisture"
            min={0}
            max={50}
            onChange={handleChange}
            defaultValue={userobject.prefMinMoisture}
            required
            className="form-control"
          />
          <h5 class="text-center">0% - 50%</h5>
        </div>


        {msg &&
          <Alert show={showMsg} variant="success" className="mt-2">
            {msg}
          </Alert>
        }


        <div className="form-group pt-2">
          <input type="submit" value="Save" className="btn btn-primary" />
          {isLoading ? <Spinner animation="border" size="sm" variant="secondary" /> : ""}
        </div>
      </form>
    </div>
  );
};

export default GreenhouseUpdate;