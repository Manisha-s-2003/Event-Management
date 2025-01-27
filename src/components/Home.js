// const Home = () => {
//     return <h1>Welcome to the Home Page</h1>;
//   };
  
//   export default Home;
  

// import React from 'react';
// import { Link } from 'react-router-dom';

// const Home = () => {
//   return (
//     <div>
//       <h1>Welcome to the Home Page</h1>
//       <Link to="/Register">Go to Register</Link>
//       <br />
//       <Link to="/login">Go to Login</Link>
//     </div>
//   );
// };

// export default Home;

import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Dashboard.css';
import logo from '../assets/logo3.jpg';
import Sidebar from '../navigation/Sidebar'; 

const Home = () => {
  return (
    <div className="dashboard-container">
      {/* Side Navigation Bar */}
      <Sidebar/>
      

      {/* Main Content */}
      <div className="main-content">
        <nav className="navbar bg-light shadow-sm p-3">
          <div className="d-flex justify-content-between w-100">
            <h5 className="m-0">Overview
            </h5>
            <div className="d-flex">
              <Link className="nav-link" to="/">
                Home
              </Link>
              <Link className="nav-link" to="#howtouse">
                How to use
              </Link>
              
              <Link className="nav-link" to="/login">
                Login
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

export default Home;

