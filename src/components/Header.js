import React, { useState } from "react";
import { Navbar, Nav, Offcanvas, Dropdown, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/header.css";
import logo from '../assets/logo3.jpg';


const Header = () => {
  const [showOffcanvas, setShowOffcanvas] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const toggleOffcanvas = () => setShowOffcanvas(!showOffcanvas);
  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <header className="header">
      <Navbar expand="lg" className="navbar fixed-top bg-barren barren-head">
        <div className="container-fluid">
          <img src={logo} alt="Event Buddy" className="logo" />
          <h2 className="title">Event Buddy</h2>
          <Navbar.Toggle aria-controls="offcanvasNavbar" />
          <Navbar.Collapse>
            <Nav className="ms-auto">
              <Nav className="navbar-nav">

                <Nav.Link href="#">
                  <h3 className="create-btn-text">Explore Events</h3>
                </Nav.Link>
                <Nav.Link href="/createevent" className="create-btn">
                  <h3 className="create-btn-text">Create Event </h3>
                </Nav.Link>

              </Nav>


              <Dropdown align="end">
                <Dropdown.Toggle variant="link" id="account-dropdown" className="account-link">
                  <h5> Profile</h5>
                </Dropdown.Toggle>
                <Dropdown.Menu className="dropdown-menu-account">
                  <Dropdown.ItemText className="dropdown-account-header">
                    <h5>Profile</h5>
                    <h5>John Doe</h5>
                    <p>johndoe@example.com</p>
                  </Dropdown.ItemText>
                  <Dropdown.Item href="#">My Profile</Dropdown.Item>
                  <Dropdown.Item href="#">Sign Out</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
      <Offcanvas show={showOffcanvas} onHide={toggleOffcanvas} placement="start" className="offcanvas">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            <img src={logo} alt="Logo" />
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="offcanvas-top-area">
            <Button href="create.html" className="offcanvas-create-btn">
              Create Event
            </Button>
          </div>
          <Nav className="navbar-nav">

            <Nav.Link href="#">
              Explore Events
            </Nav.Link>
          </Nav>

        </Offcanvas.Body>
      </Offcanvas>
    </header>
  );
};

export default Header;
