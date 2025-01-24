import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo3.jpg'; // Adjust the path based on your project structure

const Sidebar = () => {
  return (
    <aside className="sidebar bg-light shadow-sm">
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
        <h5 className="m-0 text-warning">EVENTS MADE EASY</h5>
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
          <Link className="nav-link" to="/booking">
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
    </aside>
  );
};

export default Sidebar;
