import React, { Component } from 'react';
import { Line } from "react-chart-2";


const data = {
    labels: ["1am", "2am", "3am", "4am", "5am", "6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm", "8pm", "9pm", "10pm", "11pm", "12am"],
    datasets: [
        {
            label: "temperature",
            data: ["12", "11", "11", "11", "11", "11", "11", "11", "11", "11", "12", "13", "13", "14", "13", "14", "14", "12", "12", "12", "12", "12", "11"
            ],
            fill: false
        }
    ]
}