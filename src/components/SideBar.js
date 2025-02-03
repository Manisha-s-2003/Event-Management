import React from 'react';
import { Link } from 'react-router-dom'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/sidebar.css'; 
import '../styles/responsive.css';
const SideNav = () => {
  return (
    <nav className="vertical_nav">
      <div className="left_section menu_left" id="js-menu">
        <div className="left_section">
          <ul>
            <li className="menu--item">
              <Link to="/dashboard" className="menu--link active" title="Dashboard">
                <span className="menu--label">Dashboard</span>
              </Link>
            </li>
            <li className="menu--item">
              <Link to="/#" className="menu--link" title="Events">
                <span className="menu--label">Events</span>
              </Link>
            </li>
            
            <li className="menu--item">
              <Link to="/#" className="menu--link" title="Contact List">
                <span className="menu--label">Contact List</span>
              </Link>
            </li>
            
            <li className="menu--item">
              <Link to="/#" className="menu--link" title="About">
                <span className="menu--label">About</span>
              </Link>
            </li>
            <li className="menu--item">
              <Link to="/#" className="menu--link " title="My Team">
                <span className="menu--label">My Team</span>
              </Link>
            </li>
            <li className="menu--item">
              <Link to="/#" className="menu--link " title="Settings">
                <span className="menu--label">Settings</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default SideNav;
