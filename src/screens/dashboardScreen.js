import React from "react";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Header from "../components/Header";
import SideBar from "../components/SideBar";
import "../styles/dashboard.css";

const DashboardScreen = () => {
    return (
        <div>
            <Header/>
            {/* Side Bar */}
            <SideBar/>
            {/*Main Content*/}
            <div className="content-wrapper">
                <div className="container-fluid">
                    <h1>Welcome to Dashboard</h1>
                </div>
            </div>
        </div>
    )
}

export default DashboardScreen;