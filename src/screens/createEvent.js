import React from "react";
import { Link } from "react-router-dom";
import "../styles/createEvent.css";
import Header from "../components/Header";


const CreateEvent = () => {
  return (
    <>
      {/* Header*/}
      <Header />
      <div className="event-container p-80">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12 col-md-12">
              <div className="main-title text-center checkout-title">
                <h3>Create New Event</h3>
              </div>
            </div>
            <div className="col-xl-6 col-lg-8 col-md-12">
              <div className="create-block">
                <div className="row">
                  <div className="col-md-6">
                    <div className="main-card create-card mt-4">

                      <h4>Create an Online Event</h4>
                      <Link to="/create-online-event" className="create-btn btn-hover h_40 w-100">
                        Create Here
                      </Link>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="main-card create-card mt-4">

                      <h4>Create a Venue Event</h4>
                      <Link to="/create-venue-event" className="create-btn btn-hover h_40 w-100">
                        Create Here
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateEvent;
