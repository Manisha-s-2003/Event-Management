// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'font-awesome/css/font-awesome.min.css';
// import '../styles/analytics.css';
// import '../styles/responsive.css';

// const Header = () => {
//     return (
//         <header className="header">
//             <div className="header-inner">
//                 <nav className="navbar navbar-expand-lg bg-barren barren-head navbar fixed-top justify-content-sm-start pt-0 pb-0 ps-lg-0 pe-2">
//                     <div className="container-fluid ps-0">
//                         <button type="button" id="toggleMenu" className="toggle_menu">
//                             <i className="fa-solid fa-bars-staggered"></i>
//                         </button>
//                         <button id="collapse_menu" className="collapse_menu me-4">
//                             <i className="fa-solid fa-bars collapse_menu--icon"></i>
//                             <span className="collapse_menu--label"></span>
//                         </button>
//                         <button className="navbar-toggler order-3 ms-2 pe-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
//                             <span className="navbar-toggler-icon">
//                                 <i className="fa-solid fa-bars"></i>
//                             </span>
//                         </button>
//                         <a className="navbar-brand order-1 order-lg-0 ml-lg-0 ml-2 me-auto" href="index.html">
//                             <div className="res-main-logo">
//                                 <img src="images/logo-icon.svg" alt="" />
//                             </div>
//                             <div className="main-logo" id="logo">
//                                 <img src="images/logo.svg" alt="" />
//                                 <img className="logo-inverse" src="images/dark-logo.svg" alt="" />
//                             </div>
//                         </a>
//                         <div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
//                             <div className="offcanvas-header">
//                                 <div className="offcanvas-logo" id="offcanvasNavbarLabel">
//                                     <img src="images/logo-icon.svg" alt="" />
//                                 </div>
//                                 <button type="button" className="close-btn" data-bs-dismiss="offcanvas" aria-label="Close">
//                                     <i className="fa-solid fa-xmark"></i>
//                                 </button>
//                             </div>
//                             <div className="offcanvas-body">
//                                 <div className="offcanvas-top-area">
//                                     <div className="create-bg">
//                                         <a href="create.html" className="offcanvas-create-btn">
//                                             <i className="fa-solid fa-calendar-days"></i>
//                                             <span>Create Event</span>
//                                         </a>
//                                     </div>
//                                 </div>
//                                 <ul className="navbar-nav justify-content-end flex-grow-1 pe_5">
//                                     <li className="nav-item">
//                                         <a className="nav-link" href="organiser_profile_view.html">
//                                             <i className="fa-solid fa-right-left me-2"></i>My Home
//                                         </a>
//                                     </li>
//                                     <li className="nav-item">
//                                         <a className="nav-link" href="explore_events.html">
//                                             <i className="fa-solid fa-compass me-2"></i>Explore Events
//                                         </a>
//                                     </li>
//                                 </ul>
//                             </div>
//                             <div className="offcanvas-footer">
//                                 <div className="offcanvas-social">
//                                     <h5>Follow Us</h5>
//                                     <ul className="social-links">
//                                         <li><a href="#" className="social-link"><i className="fab fa-facebook-square"></i></a></li>
//                                         <li><a href="#" className="social-link"><i className="fab fa-instagram"></i></a></li>
//                                         <li><a href="#" className="social-link"><i className="fab fa-twitter"></i></a></li>
//                                         <li><a href="#" className="social-link"><i className="fab fa-linkedin-in"></i></a></li>
//                                         <li><a href="#" className="social-link"><i className="fab fa-youtube"></i></a></li>
//                                     </ul>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="right-header order-2">
//                             <ul className="align-self-stretch">
//                                 <li>
//                                     <a href="create.html" className="create-btn btn-hover">
//                                         <i className="fa-solid fa-calendar-days"></i>
//                                         <span>Create Event</span>
//                                     </a>
//                                 </li>
//                                 <li className="dropdown account-dropdown order-3">
//                                     <a href="#" className="account-link" role="button" id="accountClick" data-bs-auto-close="outside" data-bs-toggle="dropdown" aria-expanded="false">
//                                         <img src="images/profile-imgs/img-13.jpg" alt="" />
//                                         <i className="fas fa-caret-down arrow-icon"></i>
//                                     </a>
//                                     <ul className="dropdown-menu dropdown-menu-account dropdown-menu-end" aria-labelledby="accountClick">
//                                         <li>
//                                             <div className="dropdown-account-header">
//                                                 <div className="account-holder-avatar">
//                                                     <img src="images/profile-imgs/img-13.jpg" alt="" />
//                                                 </div>
//                                                 <h5>John Doe</h5>
//                                                 <p>johndoe@example.com</p>
//                                             </div>
//                                         </li>
//                                         <li className="profile-link">
//                                             <a href="organiser_profile_view.html" className="link-item">My Profile</a>
//                                             <a href="sign_in.html" className="link-item">Sign Out</a>
//                                         </li>
//                                     </ul>
//                                 </li>
//                                 <li>
//                                     <div className="night_mode_switch__btn">
//                                         <div id="night-mode" className="fas fa-moon fa-sun"></div>
//                                     </div>
//                                 </li>
//                             </ul>
//                         </div>
//                     </div>
//                 </nav>
//                 <div className="overlay"></div>
//             </div>
//         </header>
//     );
// };

// export default Header;



import React, { useState } from "react";
import { Navbar, Nav, Offcanvas, Dropdown, Button } from "react-bootstrap";
// import { FaBars, FaMoon, FaSun, FaCalendarDays, FaCaretDown, FaFacebookSquare, FaInstagram, FaTwitter, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/header.css";

const Header = () => {
  const [showOffcanvas, setShowOffcanvas] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const toggleOffcanvas = () => setShowOffcanvas(!showOffcanvas);
  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <header className="header">
      <Navbar expand="lg" className="navbar fixed-top bg-barren barren-head">
        <div className="container-fluid">
          <Button variant="link" className="toggle_menu" onClick={toggleOffcanvas}>
            {/* <FaBars /> */}
          </Button>
          <Navbar.Brand href="index.html" className="navbar-brand">
            <div className="res-main-logo">
              <img src="images/logo-icon.svg" alt="Logo" />
            </div>
            <div className="main-logo">
              <img src="images/logo.svg" alt="Main Logo" />
              <img className="logo-inverse" src="images/dark-logo.svg" alt="Dark Logo" />
            </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="offcanvasNavbar" />
          <Navbar.Collapse>
            <Nav className="ms-auto">
              <Nav.Link href="create.html" className="create-btn btn-hover">
                {/* <FaCalendarDays /> Create Event */}
              </Nav.Link>
              <Dropdown align="end">
                <Dropdown.Toggle variant="link" id="account-dropdown" className="account-link">
                  <img src="images/profile-imgs/img-13.jpg" alt="Profile" className="profile-img" />
                  {/* <FaCaretDown /> */}
                </Dropdown.Toggle>
                <Dropdown.Menu className="dropdown-menu-account">
                  <Dropdown.ItemText className="dropdown-account-header">
                    <img src="images/profile-imgs/img-13.jpg" alt="" className="account-holder-avatar" />
                    <h5>John Doe</h5>
                    <p>johndoe@example.com</p>
                  </Dropdown.ItemText>
                  <Dropdown.Item href="organiser_profile_view.html">My Profile</Dropdown.Item>
                  <Dropdown.Item href="sign_in.html">Sign Out</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              {/* <Button variant="link" className="night_mode_switch__btn" onClick={toggleDarkMode}>
                {darkMode ? <FaSun /> : <FaMoon />}
              </Button> */}
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
      <Offcanvas show={showOffcanvas} onHide={toggleOffcanvas} placement="start" className="offcanvas">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            <img src="images/logo-icon.svg" alt="Logo" />
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="offcanvas-top-area">
            <Button href="create.html" className="offcanvas-create-btn">
              {/* <FaCalendarDays /> Create Event */}
            </Button>
          </div>
          <Nav className="navbar-nav">
            <Nav.Link href="organiser_profile_view.html">
              My Home
            </Nav.Link>
            <Nav.Link href="explore_events.html">
              Explore Events
            </Nav.Link>
          </Nav>
          <div className="offcanvas-footer">
            <h5>Follow Us</h5>
            {/* <div className="social-links">
              <a href="#"><FaFacebookSquare /></a>
              <a href="#"><FaInstagram /></a>
              <a href="#"><FaTwitter /></a>
              <a href="#"><FaLinkedinIn /></a>
              <a href="#"><FaYoutube /></a>
            </div> */}
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </header>
  );
};

export default Header;
