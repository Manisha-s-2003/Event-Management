import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import { FaCalendarAlt } from 'react-icons/fa';
import 'react-calendar/dist/Calendar.css'; // Add styles for the calendar
import '../styles/EventCalender.css'

const EventCalender = ({ events }) => {
  const [date, setDate] = useState(new Date());
  const [searchTerm, setSearchTerm] = useState('');
  const [showCalendar, setShowCalendar] = useState(false);
  const [filteredEvents, setFilteredEvents] = useState(events);

  // Handle date click
  const handleDateClick = (selectedDate) => {
    setDate(selectedDate);
    filterEventsByDate(selectedDate);
    setShowCalendar(false); // Hide calendar after selection
  };

  const filterEventsByDate = (selectedDate) => {
    const filtered = events.filter(
      (event) => event.date.toDateString() === selectedDate.toDateString()
    );
    setFilteredEvents(filtered);
  };

  // Handle search term input
  const handleSearchChange = (e) => {
    const searchValue = e.target.value;
    setSearchTerm(searchValue);
  };

  // Filter events based on the selected date and search term
  useEffect(() => {
    const filteredByDate = events.filter((event) => {
      const eventDate = new Date(event.date); // Ensure date is comparable
      return eventDate.toDateString() === date.toDateString();
    });

    const filteredBySearch = filteredByDate.filter((event) =>
      event.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setFilteredEvents(filteredBySearch);
  }, [events, date, searchTerm]);

  return (
    <div className="calendar-container ">
      <h3 className="text-start">Upcoming Events</h3>
      <div className="d-flex align-items-center mb-4 ">
      {/* Search Bar */}
      <div className="d-flex align-items-center mb-4">
        <label
          className="form-label mb-0 mr-3"
          style={{
            width: 200,
            padding: 10,
            marginBottom: 20,
            marginTop:10,
          }}
        >
          Search for Events:
        </label>
        <input
          type="text"
          placeholder="Search Events"
          value={searchTerm}
          onChange={handleSearchChange}
          style={{
            width: 250,
            height:30,
            marginBottom: 15,
            marginTop:20,
            borderRadius: 5,
            marginLeft: 5,
            textAlign: 'center',
          }}
        />
      </div>

      {/* Calendar Icon and Date */}
      <div className="d-flex align-items-center mb-4">
        <label className="form-label mb-0 mr-3 " style={{
            width: 200,
            padding: 10,
            marginBottom: 30,
            marginTop:10,

          }}>
            
            Select Date:</label>
        
        {/* Date Display */}
        <input
          type="text"
          value={date.toDateString()}
          readOnly
          style={{
            width: 250,
            height:30,
            marginBottom: 20,
            marginTop:20,
            borderRadius: 5,
            marginLeft: 5,
            textAlign: 'center',
          }}
        />
        
        <div
          onClick={() => setShowCalendar(!showCalendar)}
          style={{ cursor: 'pointer', marginLeft: 10 }}
        >
          <FaCalendarAlt size={24} />
        </div>
      

      {/* Conditionally Render Calendar */}
      {showCalendar && (
        <div className="d-flex" style={{ position: 'absolute', zIndex: 999, marginLeft:200, marginTop:350}}>
          <Calendar onChange={handleDateClick} value={date} />
        </div>
      )}
      </div>
   </div>
      {/* Event List for Selected Date */}
      <div className="events-list mt-3">
        <h5>Events on {date.toDateString()}</h5>
        {filteredEvents.length > 0 ? (
          filteredEvents.map((event) => (
            <div key={event._id} className="event-item">
              <h6>{event.title}</h6>
              <p>{event.time}</p>
              <p>{event.location}</p>
            </div>
          ))
        ) : (
          <p>No events found.</p>
        )}
      </div>
    </div>
  );
};

export default EventCalender;
