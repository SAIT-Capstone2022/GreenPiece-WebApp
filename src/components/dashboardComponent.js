import React, { Component } from 'react';

const chart = <iframe width="1200" height="750" src="https://charts.mongodb.com/charts-greenhouse-project-zfldl/embed/dashboards?id=62bb709e-5246-46c9-801d-18966de071e1&theme=light&autoRefresh=true&maxDataAge=60&showTitleAndDesc=false&scalingWidth=fixed&scalingHeight=fixed"></iframe>;

export default class DashboardComponent extends Component {
  render() {
    const getUsername = () => {
      const data = localStorage.getItem("token");

      return data.email;
    }

    return (
      <div className="container p-4 m-2 mx-auto mt-3 bg-light rounded shadow-lg">
        <h2>Name's Dashboard</h2>
        <div className="my-3">
          <div id="chart-container" className="mx-auto">
            {chart}
          </div>
        </div>
      </div>
    );
  }
}

