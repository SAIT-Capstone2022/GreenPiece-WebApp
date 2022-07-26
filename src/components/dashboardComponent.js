import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { Card, Row, Alert } from 'react-bootstrap';
import axios from "axios";

const chart = <iframe title="Dashboard Graph" width="800" height="500" src="https://charts.mongodb.com/charts-greenhouse-project-zfldl/embed/dashboards?id=62bb709e-5246-46c9-801d-18966de071e1&theme=light&autoRefresh=true&maxDataAge=60&showTitleAndDesc=false&scalingWidth=fixed&scalingHeight=fixed"></iframe>;

const DashboardComponent = () => {

  const thisUser = localStorage.getItem("user");
  const userObject = JSON.parse(thisUser);

  const fahrenheitToCelsius = fahrenheit => (fahrenheit - 32) * 5/9;
  const apiKey = 'eec71e5fec24c1771c39631c716db4aa';
  const [weatherData, setWeatherData] = useState([{}]);
  const [city, setCity] = useState("");
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&APPID=${apiKey}`
  const getWeather = (event) => {
    if (event.key == ("Enter")) {
      fetch(url).then(
        response => response.json()
      ).then(
        data => {
          setWeatherData(data)
          setCity("")
        }
      )
    }
  }

  if (userObject == null) {
    return (
      <Navigate to="/login" replace={true} />
    );
  }

  const username = userObject.username;

  //const [data, setData] = useState({email: userObject.email});

  //setData({ ...data, ["email"]: userObject.email });

  /*const getChartData = async (e) => {
    e.preventDefault();
    const url = "http://localhost:5000/data/getSensorData";
    const { data: res } = await axios.post(url, data);
    console.log(res);
    const [temperatureData, settemperatureData] = useState({ labels: "imgay" });
    };*/

  console.log(userObject.email);

  return (
    <div /*onLoad={getChartData}*/ className="container p-4 m-3 mx-auto bg-light rounded shadow-lg">
      <h2> {username}'s Dashboard</h2>

      <div className="my-3">
        <Row className='my-3 p-3'>
          <div id="chart-container" className="mx-auto col-lg-8">
            {chart}
          </div>
          <div className='col-lg-4 rounded shadow-lg'>
            <Card.Body className='p-3'>
              <Card.Title>Weather Header</Card.Title>
              <hr />

              <div className='container'>
                <input className='input'
                  placeholder='Enter City...'
                  onChange={e => setCity(e.target.value)}
                  value={city}
                  onKeyPress={getWeather}></input>
                {typeof weatherData.main === 'undefined' ? (
                  <div>
                    <p>Enter in a city to get the weather of.</p>
                  </div>
                ) : (
                  <div className='weather-data'>
                    <p className='city'>{weatherData.name}</p>
                    <p className='temp'>{(Math.round(fahrenheitToCelsius(weatherData.main.temp)))}°C</p>
                    <p className='weather'>{weatherData.weather[0].main}</p>
                  </div>
                )}

                {weatherData.cod === "404" ? (
                  <p>City not found</p>
                ) : (
                  <>
                  </>
                )}
              </div>
              
            </Card.Body>
          </div>
        </Row>

        <Alert variant='danger'>
          <h5>Test Alert</h5>
          <hr />
          <p>Alert: Temp may be too high.</p>
        </Alert>
      </div>
    </div>
  );
};

export default DashboardComponent;

