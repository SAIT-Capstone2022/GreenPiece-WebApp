import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { Card, Row, Alert } from 'react-bootstrap';
import axios from "axios";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

const chart = <iframe title="Dashboard Graph" width="800" height="500" src="https://charts.mongodb.com/charts-greenhouse-project-zfldl/embed/dashboards?id=62bb709e-5246-46c9-801d-18966de071e1&theme=light&autoRefresh=true&maxDataAge=60&showTitleAndDesc=false&scalingWidth=fixed&scalingHeight=fixed"></iframe>;

const DashboardComponent = () => {
  
  const thisUser = localStorage.getItem("user");
  const userObject = JSON.parse(thisUser);

  if (userObject == null) {
    return (
      <Navigate to="/login" replace={true} />
    );
  }

  const username = userObject.username;

  const [sentData] = useState({
    email: userObject.email,
  });

  const [timeArray, setTimeArray] = useState([
    "1am", "2am", "3am"
  ]);

  const [temperatureArray, setTemperatureArray] = useState(
   [1, 2, 3]
  );

  const [humidityArray, setHumidityArray] = useState(
  [1, 2, 3]
  );

  const [moistureArray, setMoistureArray] = useState(
  [1, 2, 3]
  );

  const [temperatureGraphData, setTemperatureGraphData] = useState({
    labels: timeArray,
    datasets: [
        {
          label: "Temperature for the last 7 hours",
          data: temperatureArray
        }],
      });

      const [humidityGraphData, setHumidityGraphData] = useState({
        labels: timeArray,
        datasets: [
            {
              label: "Percentage humidity for the last 7 hours",
              data: humidityArray,
            }]
          });

          const [moistureGraphData, setMoistureGraphData] = useState({
            labels: timeArray,
            datasets: [
                {
                  label: "Percentage soil moisture for the last 7 hours",
                  data: moistureArray,
                }]
              });

  const getChartData = async (e) => {
    e.preventDefault();
    const url = "http://localhost:5000/data/getSensorData";
    const { data: res } = await axios.post(url, sentData);
    const arrayStringHolder = JSON.stringify(res.UsersData);
    const arrayHolder = JSON.parse(arrayStringHolder);
    setTimeArray(Object.values(arrayHolder).map(Time => Time.time));
    setTemperatureArray(Object.values(arrayHolder).map(Temperature => Temperature.temperature));
    setHumidityArray(Object.values(arrayHolder).map(Humidity => Humidity.humidity));
    setMoistureArray(Object.values(arrayHolder).map(Moisture => Moisture.moistureLevel));
    setTemperatureGraphData({
      labels: timeArray,
      datasets: [
          {
            label: "Temperature for the last 7 hours",
            data: temperatureArray,
          }],
        });
    setHumidityGraphData({
      labels: timeArray,
      datasets: [
          {
            label: "Percentage humidity for the last 7 hours",
            data: humidityArray,
          }]
        });
        setMoistureGraphData({
          labels: timeArray,
          datasets: [
              {
                label: "Percentage soil moisture for the last 7 hours",
                data: moistureArray,
              }]
            });
    };

  return (
    <div className="container p-4 m-3 mx-auto bg-light rounded shadow-lg">
      <h2> {username}'s Dashboard</h2>

      <div>Times: {JSON.stringify(timeArray)}
           Temperatures: {JSON.stringify(temperatureArray)}
           Humidity Levels: {JSON.stringify(humidityArray)}
           Moisture Levels: {JSON.stringify(moistureArray)} </div>

      <div className="my-3">
        <Alert variant='danger'>
          <h5>Test Alert</h5>
          <hr />
          <p>Alert: Temp may be too high.</p>
        </Alert>
        
        <Row className='my-3 p-3'>
          <div id="chart-container" className="mx-auto col-lg-8">
            {chart}
          </div>
          <div className='col-lg-4 rounded shadow-lg'>
            <Card.Body className='p-3'>
              <Card.Title>Weather Header</Card.Title>
              <hr />
              <Card.Img src={require('../images/sunny.jpg')} alt="Weather Image." />
            </Card.Body>
          </div>
        </Row>
      </div>

    <div>
      <button onClick={getChartData} type="submit">Click Me!</button>
    </div>

    <div>
    <Line data={temperatureGraphData}/>
    </div>

    <div>
    <Line data={humidityGraphData}/>
    </div>

    <div>
    <Line data={moistureGraphData}/>
    </div>

    </div>
  );
};

export default DashboardComponent;

