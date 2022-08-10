import React, { useCallback, useEffect, useState } from "react"
import { Line } from "react-chartjs-2";
import axios from "axios";

export const LineGraphs = () => {

  const thisUser = localStorage.getItem("user");
  const userObject = JSON.parse(thisUser);

  const data = {
    email: userObject.email
  };

  const [loading, setLoading] = useState(true);

  const [responseData, setResponseData] = useState({});

  const height = useState(255);

  const width = useState(500);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const url = `${process.env.REACT_APP_BASE_URL}/data/getSensorData/graph`;
      const { data: res } = await axios.post(url, data);
      setResponseData(res.data);
      setLoading(false);
    }
    fetchData()
  }, []);

  if (loading) {
    return null;
  }

  const getLabels = () => {
    const currentDate = new Date();
    const datesArray = [];
    for (let i = 12; i > 0; i--) {
      currentDate.setUTCHours(-i);
      datesArray.push(currentDate.toLocaleTimeString(navigator.language, { hour: "2-digit" }));
    }
    return datesArray;
  }

  const filterData = responseData.filter((value) => value);

  /*const temperatureGraphData  = ({
      labels: timeArray,
      datasets: [
          {
            label: "Temperature for the last 7 hours",
            data: temperatureArray
          }],
        });
  
        const humidityGraphData = ({
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
                });*/



  return (
    <>

    <div className="col-md-4">
      <Line 
       options={{ maintainAspectRatio: false }}
      data={{
        labels: getLabels(),
        datasets: [
          {
            label: "Temperature in Celsius over the last 12 hours",
            data: filterData.map((value, index) => {
              return value.avgTemperature
            }),
            fill: true,
            borderColor: 'rgba(204, 102, 0, 0.8)',
            backgroundColor: 'rgba(255, 204, 153, 0.5)'
          }] 
      }}
      width={this.state.width} height={this.state.height}
       />
       </div>

       <div className="col-md-4">
      <Line 
        options={{ maintainAspectRatio: false }}
       data={{
        labels: getLabels(),
        datasets: [
          {
            label: "% Humidity over the last 12 hours",
            data: filterData.map((value, index) => {
              return value.avgHumidity
            }),
            fill: true,
            borderColor: 'rgba(0, 153, 0, 0.8)',
            backgroundColor: 'rgba(204, 255, 204, 0.5)'
          }]
      }}  width={this.state.width} height={this.state.height}
      />
      
      </div>

      <div className="col-md-4">
      <Line 
      options={{ maintainAspectRatio: false }}
      data={{
        labels: getLabels(),
        datasets: [
          {
            label: "% Soil Moisture over the last 12 hours",
            data: filterData.map((value, index) => {
              return value.avgSoilMoisture
            }),
            fill: true,
            borderColor: 'rgba(0, 204, 204, 0.8)',
            backgroundColor: 'rgba(0, 255, 255, 0.5)',

          }]
      }}  width={this.state.width} height={this.state.height}
      />
      </div>

    </>
  )
};
