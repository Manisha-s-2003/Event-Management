import React  from "react";
import { Link } from 'react-router-dom';
import '../styles/Dashboard.css';
import logo from '../assets/logo3.jpg';
import Sidebar from "../navigation/Sidebar";

const Event = () => {
    return(
        <div className="dashboard-container">
      {/* Side Navigation Bar */}
      <Sidebar/>
      </div>
    )
}

export default Event;