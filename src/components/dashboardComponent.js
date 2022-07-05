import React, { Component } from 'react';

export default class DashboardComponent extends Component {
  render() {
    return (
      <div className="container p-4 m-2 mx-auto mt-3 bg-light rounded shadow-lg">
        <h2>Name's Dashboard</h2>
        <div className="my-3">
          <div id="chart-container">
          </div>
        </div>
      </div>
    );
  }
}

