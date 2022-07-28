import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { Card, Row, Alert } from 'react-bootstrap';
import axios from "axios";
import { Chart as ChartJS } from "chart.js/auto";
import { LiveDataFeed } from './live-feed/LiveDataFeed';
import { LineGraphs } from './avg-line-graph/LineGraphs';

const DashboardComponent = () => {

  const thisUser = localStorage.getItem("user");
  const userObject = JSON.parse(thisUser);

  const [city, setCity] = useState(
    userObject.city
  );

  const fahrenheitToCelsius = fahrenheit => (fahrenheit - 32) * 5 / 9;
  const apiKey = 'eec71e5fec24c1771c39631c716db4aa';
  const [weatherData, setWeatherData] = useState([{}]);
  const [weatherIcon, setWeatherIcon] = useState("");
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&APPID=${apiKey}`;
  
  const getWeather = () => {
    fetch(url).then(
      response => response.json()
    ).then(
      data => {
        setWeatherData(data);
        setCity(city);
        setWeatherIcon(`http://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`);
      }
    )
  };

  useEffect(() => { getWeather() }, []);
  
  const handleEvent = (event) => {
    if (event.key == ("Enter")) {
      getWeather()
    }
  };

  if (userObject === null) {
    return (
      <Navigate to="/login" replace={true} />
    );
  }

  const username = userObject.username;

  const [sentData] = useState({
    email: userObject.email,
  });

  return (
    <div className="container p-4 m-3 mx-auto bg-light rounded shadow-lg">
      <h2> {username}'s Dashboard</h2>
      <Alert variant='danger'>
        <h5>Test Alert</h5>
        <hr />
        <p>Alert: Temp may be too high.</p>
      </Alert>

      <Row className='my-3 mx-0'>
        <div className='col-lg-3 rounded shadow-lg mb-4 bg-gradient' style={{background: "#bfcfbe"}}>
          <Card.Body className='p-3'>
            <Card.Title>Weather Forecast</Card.Title>
            <hr />

            <div className='container p-0'>
              {typeof weatherData.main === 'undefined' ? (
                <div>
                  <p>Enter in a city to get the current weather.</p>
                </div>
              ) : (
                <div className='weather-data m-0'>
                  <img src={weatherIcon}></img>
                  <p className='weather'>{weatherData.weather[0].main}</p>
                  <p className='temp'>{(Math.round(fahrenheitToCelsius(weatherData.main.temp)))}°C</p>
                  <p className='city'>{weatherData.name}</p>
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

        <div className="mx-auto col-lg-9">
          <LiveDataFeed className="mx-0" retrieveData={async () => {
            const url = "http://localhost:5000/data/getSensorData";
            const { data: res } = await axios.post(url, sentData);
            return res.UsersData[res.UsersData.length - 1];
          }} />
        </div>

      </Row>

      <LineGraphs />

    </div>
  );
};

export default DashboardComponent;

