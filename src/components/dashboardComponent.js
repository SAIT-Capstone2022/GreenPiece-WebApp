import React, { Component } from 'react';
import { Card, Row, Alert } from 'react-bootstrap';

const chart = <iframe title="Dashboard Graph" width="800" height="500" src="https://charts.mongodb.com/charts-greenhouse-project-zfldl/embed/dashboards?id=62bb709e-5246-46c9-801d-18966de071e1&theme=light&autoRefresh=true&maxDataAge=60&showTitleAndDesc=false&scalingWidth=fixed&scalingHeight=fixed"></iframe>;

const userObject = JSON.parse(localStorage.getItem("user"));
//const user = userObject.username;

const token = localStorage.getItem("token");

console.log(token);

export default class DashboardComponent extends Component {
  render() {
    return (

      <div className="container p-4 m-3 mx-auto bg-light rounded shadow-lg">
        <h2> {}'s Dashboard</h2>
        <div className="my-3">
          <Row className='my-3 p-3'>
            <div id="chart-container" className="mx-auto col-8">
              {chart}
            </div>
            <div className='col-4 rounded shadow-lg'>
              <Card.Body className='p-3'>
                <Card.Title>Weather Header</Card.Title>
                <hr />
                <Card.Img src={require('../images/sunny.jpg')} alt="Weather Image." />
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
  }
}

