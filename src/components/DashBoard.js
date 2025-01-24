import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Dashboard.css';
import logo from '../assets/logo3.jpg';
import Sidebar from '../navigation/Sidebar'; 

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      {/* Side Navigation Bar */}
      <Sidebar/>
      {/* <aside className="sidebar bg-light shadow-sm">
        <div className="text-center py-4">
          <img
            src={logo}
            alt="Logo"
            className="centered-image"
            style={{
              width: '80px',
              height: '80px',
              marginBottom: '15px',
              borderRadius: '100px',
            }}
          />
          <h5 className="m-0 text-warning" >EVENTS MADE EASY</h5>
        </div>
        <ul className="nav flex-column">
          <li className="nav-item">
            <Link className="nav-link" to="/dashboard">
              Dashboard
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/event">
              Events
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="#bookings">
              Bookings
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="#clients">
              Clients
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="#reports">
              Reports
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="#settings">
              Settings
            </Link>
          </li>
        </ul>
      </aside> */}

      {/* Main Content */}
      <div className="main-content">
        <nav className="navbar bg-light shadow-sm p-3">
          <div className="d-flex justify-content-between w-100">
            <h5 className="m-0">Overview
            </h5>
            <div className="d-flex">
              <Link className="nav-link" to="/profile">
                Profile
              </Link>
              <Link className="nav-link" to="/logout">
                Logout
              </Link>
            </div>
          </div>
        </nav>

        <main className="container mt-4">
          

          <section className="dashboard d-flex flex-wrap justify-content-center">
            <div className="card shadow-sm m-3 p-3" style={{ width: '18rem' }}>
              <h3>Total Events</h3>
              <p>445</p>
            </div>
            <div className="card shadow-sm m-3 p-3" style={{ width: '18rem' }}>
              <h3>Bookings</h3>
              <p>25</p>
            </div>
            <div className="card shadow-sm m-3 p-3" style={{ width: '18rem' }}>
              <h3>Clients</h3>
              <p>30</p>
            </div>
            <div className="card shadow-sm m-3 p-3" style={{ width: '18rem' }}>
              <h3>Revenue</h3>
              <p>$10,000</p>
            </div>

            <div className="card shadow-sm m-3 p-3" style={{ width: '18rem' }}>
              <h3>Revenue</h3>
              <p>$10,000</p>
            </div>
            <div className="card shadow-sm m-3 p-3" style={{ width: '18rem' }}>
              <h3>Revenue</h3>
              <p>$10,000</p>
            </div>
            <div className="card shadow-sm m-3 p-3" style={{ width: '18rem' }}>
              <h3>Total Events</h3>
              <p>445</p>
            </div>
            <div className="card shadow-sm m-3 p-3" style={{ width: '18rem' }}>
              <h3>Bookings</h3>
              <p>25</p>
            </div>
            <div className="card shadow-sm m-3 p-3" style={{ width: '18rem' }}>
              <h3>Clients</h3>
              <p>30</p>
            </div>
            <div className="card shadow-sm m-3 p-3" style={{ width: '18rem' }}>
              <h3>Revenue</h3>
              <p>$10,000</p>
            </div>

            <div className="card shadow-sm m-3 p-3" style={{ width: '18rem' }}>
              <h3>Revenue</h3>
              <p>$10,000</p>
            </div>
            <div className="card shadow-sm m-3 p-3" style={{ width: '18rem' }}>
              <h3>Revenue</h3>
              <p>$10,000</p>
            </div>
          </section>

          <section id="calendar" className="event-calendar mt-4">
            <h3 className="text-center mb-3">Upcoming Events</h3>
            <p className="text-center">Calendar UI to display here</p>
          </section>

          <footer className="text-center mt-5">
            <p>&copy; 2025 Event Management. All rights reserved.</p>
          </footer>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
