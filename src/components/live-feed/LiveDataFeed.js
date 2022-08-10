import React, { useCallback, useEffect, useState } from "react"

export const NO_DATA = 9999;
export const LiveDataFeed = ({
    retrieveData, // promise/async function that calls server for new data
    updateFrequency = 3000,
    onDataUpdated,
}) => {

    const [data, setData] = useState({
        humidity: NO_DATA,
        temperature: NO_DATA,
        moistureLevel: NO_DATA,
});
    const [lastUpdated, setLastUpdated] = useState(null);

    const {
        humidity,
        temperature,
        moistureLevel,
    } = data;
    
    const updateData = useCallback(async () => {
        if (!retrieveData) return;
        const newData = await retrieveData();
        if (typeof newData != "undefined") {
        setData(newData)
        if (onDataUpdated) {
            onDataUpdated(newData);
        }
        }
        setLastUpdated(new Date().toLocaleString())
    }, [retrieveData]);

    // refresh data from the server every 2.5 seconds
    useEffect(() => {

        const interval = setInterval(() => {
            updateData();
        }, updateFrequency);
        return () => clearInterval(interval);


    }, [updateData, updateFrequency]);



    if (temperature === NO_DATA) {
        return null;
    };

    return <div>
        <h2>Last updated: {lastUpdated}</h2>
        <h3>Temperature: {temperature}°C</h3>
        <h3>Humidity: {humidity}%</h3>
        <h3>Soil Moisture: {moistureLevel}%</h3>
    </div>
}