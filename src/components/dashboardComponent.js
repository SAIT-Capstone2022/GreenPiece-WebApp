import React, { Component } from 'react';
import ChartsEmbedSDK from "@mongodb-js/charts-embed-dom";

const sdk = new ChartsEmbedSDK({
  baseUrl: "https://charts.mongodb.com/charts-greenhouse-project-zfldl"
});

const chart = sdk.createChart({
  chartId: "62bb709e-5246-46c9-801d-18966de071e1",
  height: "700px"
});

export default class DashboardComponent extends Component {
  async chart() {
    try {
      return await chart.render();
    } catch (err) {
      return console.log(err);
    }
  }

  render() {
    return (
      <div className="container p-4 m-2 mx-auto mt-3 bg-light rounded shadow-lg">
        <h2>Name's Dashboard</h2>
        <div className="my-3">
          <div id="chart-container">
            {/* {this.chart} */}
          </div>
        </div>
      </div>
    );
  }
}

// chart.render(document.getElementById('chart-container')).catch(() => window.alert('Chart failed to initialize.'));