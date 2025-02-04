import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "../styles/createEvent.css";
import Header from "../components/Header";

const CreateVenueEvent = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [formData, setFormData] = useState({
    eventName: "",
    eventDescription: "",
    eventDate: "",
    eventTime: "",
    price: "",
    discount: "",
  });

  // Handle Input Change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Submit Final Form
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Event Form Submitted Successfully!");
    console.log(formData);
  };

  return (
    <>
      {/*Header*/}
      <Header />
      <div className="event-container p-80">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12 col-md-12">
              <div className="main-title text-center checkout-title">
                <h3>Create a Venue Event</h3>
                <div className="create-block">
                  <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                    <TabList className="tab-list">
                      <Tab className="tab-item">Event Details</Tab>
                      <Tab className="tab-item">Services</Tab>
                      <Tab className="tab-item">Price</Tab>
                    </TabList>

                    {/* Tab 1: Event Details */}
                    <TabPanel>
                      <h3>Event Details</h3>
                      <input
                        type="text"
                        name="eventName"
                        placeholder="Enter Event Name"
                        value={formData.eventName}
                        onChange={handleChange}
                      />
                      <textarea
                        name="eventDescription"
                        placeholder="Enter Event Description"
                        value={formData.eventDescription}
                        onChange={handleChange}
                      />
                      <button className="btn-next" onClick={() => setTabIndex(1)}>Next</button>
                    </TabPanel>

                    {/* Tab 2: Event Time */}
                    <TabPanel>
                      <h3>Event Time</h3>
                      <input
                        type="date"
                        name="eventDate"
                        value={formData.eventDate}
                        onChange={handleChange}
                      />
                      <input
                        type="time"
                        name="eventTime"
                        value={formData.eventTime}
                        onChange={handleChange}
                      />
                      <button className="btn-prev" onClick={() => setTabIndex(0)}>Previous</button>
                      <button className="btn-next" onClick={() => setTabIndex(2)}>Next</button>
                    </TabPanel>

                    {/* Tab 3: Event Pricing */}
                    <TabPanel>
                      <h3>Event Pricing</h3>
                      <input
                        type="number"
                        name="price"
                        placeholder="Enter Price"
                        value={formData.price}
                        onChange={handleChange}
                      />
                      <input
                        type="number"
                        name="discount"
                        placeholder="Enter Discount"
                        value={formData.discount}
                        onChange={handleChange}
                      />
                      <button className="btn-prev" onClick={() => setTabIndex(1)}>Previous</button>
                      <button className="btn-submit" onClick={handleSubmit}>Submit</button>
                    </TabPanel>
                  </Tabs>
                </div>


              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  );
};

export default CreateVenueEvent;
