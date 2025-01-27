import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Dashboard.css';
import Sidebar from '../navigation/Sidebar';
import EventCalender from '../components/EventCalender'; // Import the EventCalendar component

const Dashboard = () => {
  const [events, setEvents] = useState([]);

  // Fetch events from your backend API
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/events');
        const data = await response.json();
        setEvents(data);
      } catch (err) {
        console.error('Error fetching events:', err);
      }
    };
    fetchEvents();
  }, []);

  return (
    <div className="dashboard-container">
      {/* Side Navigation Bar */}
      <Sidebar />

      {/* Main Content */}
      <div className="main-content">
        <nav className="navbar bg-light shadow-sm p-3">
          <div className="d-flex justify-content-between w-100">
            <h5 className="m-0">Overview</h5>
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
          <section id="calendar" className="event-calendar mt-4">
            {/* Event Calendar Section */}
            <EventCalender events={events} />
          </section>

          <section className="dashboard d-flex flex-wrap justify-content-center mt-4">
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
