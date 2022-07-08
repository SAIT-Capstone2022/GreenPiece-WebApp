import React, { Component } from 'react';
import * as ReactBootstrap from 'react-bootstrap';

const chart = <iframe title="Dashboard Graph" width="800" height="500" src="https://charts.mongodb.com/charts-greenhouse-project-zfldl/embed/dashboards?id=62bb709e-5246-46c9-801d-18966de071e1&theme=light&autoRefresh=true&maxDataAge=60&showTitleAndDesc=false&scalingWidth=fixed&scalingHeight=fixed"></iframe>;
const weatherImg = "../images/sunny.jpg";

export default class DashboardComponent extends Component {
  render() {
    return (
      <div className="container p-4 m-2 mx-auto mt-3 bg-light rounded shadow-lg">
        <h2>Name's Dashboard</h2>
        <div className="my-3">
          <ReactBootstrap.Row className='my-4 p-3'>
            <div id="chart-container" className="mx-auto col-8">
              {chart}
            </div>
            <div className='col-4 rounded shadow-lg'>
              <ReactBootstrap.Card.Body className='p-3'>
                <ReactBootstrap.Card.Title>Weather Header</ReactBootstrap.Card.Title>
                <hr />
                <img className='fluid' src={weatherImg} alt='Weather Img.'></img>
              </ReactBootstrap.Card.Body>
            </div>
          </ReactBootstrap.Row>

          <ReactBootstrap.Alert variant='danger'>
            <h5>Test Alert</h5>
            <hr />
            <p>Alert: Temp may be too high.</p>
          </ReactBootstrap.Alert>
        </div>
      </div>
    );
  }
}

