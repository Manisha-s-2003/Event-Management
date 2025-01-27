// import React  from "react";
// import { Link } from 'react-router-dom';
// import '../styles/Dashboard.css';
// import logo from '../assets/logo3.jpg';
// import Sidebar from "../navigation/Sidebar";

// const Event = () => {
//     return(
//         <div className="dashboard-container">
//       {/* Side Navigation Bar */}
//       <Sidebar/>


//       </div>
//     )
// }

// export default Event;
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Dashboard.css';
import Sidebar from '../navigation/Sidebar';
import marriageImg from '../assets/marriage.jpg';
import receptionImg from '../assets/reception.jpg';
import birthdayImg from '../assets/birthday.jpg';
import businessPartyImg from '../assets/business_party.jpg';
import anniversaryImg from '../assets/anniversary.jpg';
import corporateEventImg from '../assets/corporate_event.jpg';
import socialGatheringsImg from '../assets/social_gatherings.jpg';
import festivalOccasionImg from '../assets/festival_occasion.jpg';



const EventManagementDashboard = () => {

  const marriageEvent = () => {
    // Handle marriage event selection logic
  };

  const receptionEvent = () => {
    // Handle reception event selection logic
  };

  const birthdayEvent = () => {
    // Handle birthday event selection logic
  };

  const businessParty = () => {
    // Handle business party event selection logic
  };

  const weddingAnniversary = () => {
    // Handle wedding anniversary event selection logic
  };

  const corporateEvent = () => {
    // Handle corporate event selection logic
  };

  const socialGatherings = () => {
    // Handle social gatherings event selection logic
  };

  const festivalOccasion = () => {
    // Handle festival occasion event selection logic
  };

  return (
    <div className="dashboard-container">
      {/* <nav>
        <img src="../assets/logo3.jpg" className="centered-image" alt="Logo" />
        <h5>EVENTS MADE EASY</h5>
        <a href="../auth/dashboard.html">Dashboard</a>
        <a href="../navigations/services.html">Events</a>
        <a href="#bookings">Bookings</a>
        <a href="#clients">Clients</a>
        <a href="#reports">Reports</a>
        <a href="#settings">Settings</a>
      </nav> */}
      <Sidebar/>

      <div className='main-content'>
        <nav className="navbar bg-light shadow-sm p-3">
                  <div className="d-flex justify-content-between w-100">
                    <h5 className="m-0">Choose Your Event Type</h5>
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

                {/*Events */}

                <section id="services" className="services">
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
            <div className="col">
              <div className="card h-100">
                <img
                  src={marriageImg}
                  className="card-img-top"
                  alt="Marriage"
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <div className="card-body">
                  <h5 className="card-title" style={{ fontWeight: "bold" }}>
                    Marriage
                  </h5>
                  <p className="card-text">
                    Plan and organize the perfect marriage event with customized service
                  </p>
                  <button className="btn btn-warning mt-auto" onClick={marriageEvent}>
                    Choose this event
                  </button>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card h-100">
                <img
                  src={receptionImg}
                  className="card-img-top"
                  alt="Reception Event"
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <div className="card-body">
                  <h5 className="card-title" style={{ fontWeight: "bold" }}>
                    Reception
                  </h5>
                  <p className="card-text">
                    Host a memorable reception with food, decoration, and more.
                  </p>
                  <button className="btn btn-warning mt-auto" onClick={receptionEvent}>
                    Choose this event
                  </button>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card h-100">
                <img
                  src={birthdayImg}
                  className="card-img-top"
                  alt="Birthday Party"
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <div className="card-body">
                  <h5 className="card-title" style={{ fontWeight: "bold" }}>
                    Birthday Party
                  </h5>
                  <p className="card-text">
                    Organize a fun and vibrant birthday party with decorations and entertainment.
                  </p>
                  <button className="btn btn-warning mt-auto" onClick={birthdayEvent}>
                    Choose this event
                  </button>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card h-100">
                <img
                  src={businessPartyImg}
                  className="card-img-top"
                  alt="Business Party"
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <div className="card-body">
                  <h5 className="card-title" style={{ fontWeight: "bold" }}>
                    Business Party
                  </h5>
                  <p className="card-text">
                    Plan a professional business event with catering, decor, and more.
                  </p>
                  <button className="btn btn-warning mt-auto" onClick={businessParty}>
                    Choose this event
                  </button>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card h-100">
                <img
                  src={anniversaryImg}
                  className="card-img-top"
                  alt="Wedding Anniversary"
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <div className="card-body">
                  <h5 className="card-title" style={{ fontWeight: "bold" }}>
                    Wedding Anniversary
                  </h5>
                  <p className="card-text">
                    Celebrate your wedding anniversary with elegant services tailored to your needs.
                  </p>
                  <button className="btn btn-warning mt-auto" onClick={weddingAnniversary}>
                    Choose this event
                  </button>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card h-100">
                <img
                  src={corporateEventImg}
                  className="card-img-top"
                  alt="Corporate Event"
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <div className="card-body">
                  <h5 className="card-title" style={{ fontWeight: "bold" }}>
                    Corporate Event
                  </h5>
                  <p className="card-text">
                    Organize a corporate event with tailored services for meetings and conferences.
                  </p>
                  <button className="btn btn-warning mt-auto" onClick={corporateEvent}>
                    Choose this event
                  </button>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card h-100">
                <img
                  src={ socialGatheringsImg }
                  className="card-img-top"
                  alt="Social Gathering"
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <div className="card-body">
                  <h5 className="card-title" style={{ fontWeight: "bold" }}>
                    Social Gathering
                  </h5>
                  <p className="card-text">
                    Host a social gathering with entertainment, food, and great ambiance.
                  </p>
                  <button className="btn btn-warning mt-auto" onClick={socialGatherings}>
                    Choose this event
                  </button>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card h-100">
                <img
                  src={ festivalOccasionImg}
                  className="card-img-top"
                  alt="Festival Celebration"
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <div className="card-body">
                  <h5 className="card-title" style={{ fontWeight: "bold" }}>
                    Festival Celebration
                  </h5>
                  <p className="card-text">
                    Celebrate any festival with appropriate decorations, food, and arrangements.
                  </p>
                  <button className="btn btn-warning mt-auto" onClick={festivalOccasion}>
                    Choose this event
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <footer>
          <p>&copy; 2025 Event Management. All rights reserved.</p>
        </footer>

      </div>

      

    
    </div>
  );
};

export default EventManagementDashboard;
