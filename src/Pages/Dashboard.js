import React from "react";
import SideNavbar from "../Components/SideNavbar";
import "../styles/Dashboard.css";

const Dashboard = () => {
  return (
    <div class="row">
      <SideNavbar />
      {/* ini buat dashboard */}
      <div class="col-10 pt-5">
        <h1>Welcome in Dashboard</h1>
      </div>
    </div>
  );
};

export default Dashboard;
