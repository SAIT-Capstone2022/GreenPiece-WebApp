import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { Card, Row, Alert } from 'react-bootstrap';
import axios from "axios";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { LiveDataFeed } from './live-feed/LiveDataFeed';
import { LineGraphs } from './avg-line-graph/LineGraphs';

const chart = <iframe title="Dashboard Graph" width="800" height="500" src="https://charts.mongodb.com/charts-greenhouse-project-zfldl/embed/dashboards?id=62bb709e-5246-46c9-801d-18966de071e1&theme=light&autoRefresh=true&maxDataAge=60&showTitleAndDesc=false&scalingWidth=fixed&scalingHeight=fixed"></iframe>;

const DashboardComponent = () => {

  const thisUser = localStorage.getItem("user");
  const userObject = JSON.parse(thisUser);

  const [city, setCity] = useState(
    userObject.city
  );

  const fahrenheitToCelsius = fahrenheit => (fahrenheit - 32) * 5/9;
  const apiKey = 'eec71e5fec24c1771c39631c716db4aa';
  const [weatherData, setWeatherData] = useState([{}]);
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&APPID=${apiKey}`
  const getWeather = () => {
    fetch(url).then(
      response => response.json()
    ).then(
      data => {
        setWeatherData(data)
        setCity(city)
      }
    )
  };

  useEffect(() => {getWeather()}, []);

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
      
      <div>
        <LiveDataFeed retrieveData={ async () => {
          const url = "http://localhost:5000/data/getSensorData";
          const { data: res } = await axios.post(url, sentData);
          return res.UsersData[res.UsersData.length - 1];
        } } />
      </div>

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
              <Card.Title>Weather Forecast</Card.Title>
              <hr />

              <div className='container'>
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
      </div>

    <LineGraphs/>

    </div>
  );
};

export default DashboardComponent;

