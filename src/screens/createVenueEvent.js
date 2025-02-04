import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const CreateVenueEvent= () => {
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
    <div className="container">
      <h2>Create a Venue Event</h2>
      <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList>
          <Tab>Event Details</Tab>
          <Tab>Time</Tab>
          <Tab>Price</Tab>
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
          <button onClick={() => setTabIndex(1)}>Next</button>
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
          <button onClick={() => setTabIndex(0)}>Previous</button>
          <button onClick={() => setTabIndex(2)}>Next</button>
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
          <button onClick={() => setTabIndex(1)}>Previous</button>
          <button onClick={handleSubmit}>Submit</button>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default CreateVenueEvent;
