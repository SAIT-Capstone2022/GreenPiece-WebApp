import React, { Component } from 'react';

export default class Navbar extends Component {

  render() {
    return (
      <div className="container p-4 m-2 mx-auto mt-3 bg-light rounded shadow-lg">
        <h2>Name's Dashboard</h2>
        <div class="my-3">
          <div id="graph-container">
            {/* <iframe style="background: #F1F5F4;border: none;border-radius: 2px;box-shadow: 0 2px 10px 0 rgba(70, 76, 79, .2);" src="https://charts.mongodb.com/charts-greenhouse-project-zfldl/embed/dashboards?id=62bb709e-5246-46c9-801d-18966de071e1&theme=light&autoRefresh=true&maxDataAge=3600&showTitleAndDesc=false&scalingWidth=fixed&scalingHeight=fixed"></iframe> */}
          </div>
        </div>
      </div>

    );
  }
}
