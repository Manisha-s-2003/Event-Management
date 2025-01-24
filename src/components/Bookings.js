import React from "react";
import { Link } from "react-router-dom";
import '../styles/Dashboard.css';
import Sidebar from "../navigation/Sidebar";


const Bookings = () => {
    return(
    <div className="dashboard-container">
              {/* Side Navigation Bar */}
        <Sidebar/>
    </div>
    )
}

export default Bookings;