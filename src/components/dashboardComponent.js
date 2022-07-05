import React from "react";

const Dashboard = () => {
	const handleLogout = () => {
		localStorage.removeItem("token");
		window.location.reload();
	};

	return (

      <div className="container p-4 m-2 mx-auto mt-3 bg-light rounded shadow-lg">
        <h2>Name's Dashboard</h2>
        <div class="my-3">
          <div id="graph-container">
            <button  onClick={handleLogout}>
					  Logout
				    </button>
            {/* <input type="submit" value="Log Out" className="btn btn-primary" /> */}
          </div>
        </div>
      </div>
	);
};

export default Dashboard;
