import React, { useState } from 'react';
import './MainPage.css';

const MainPage = () => {
  const [meetings, setMeetings] = useState([]);
  const [newMeeting, setNewMeeting] = useState({
    title: '',
    date: '',
    time: '',
    participants: ''
  });

  const addMeeting = () => {
    setMeetings([...meetings, newMeeting]);
    setNewMeeting({ title: '', date: '', time: '', participants: '' });
  };

  const handleInputChange = (e) => {
    setNewMeeting({ ...newMeeting, [e.target.name]: e.target.value });
  };

  const removeMeeting = (index) => {
    const updatedMeetings = meetings.filter((_, i) => i !== index);
    setMeetings(updatedMeetings);
  };

  return (
    <div className="container">
      <h1>Online Meeting Scheduler</h1>
      
      <div className="input-group">
        <input
          type="text"
          name="title"
          placeholder="Meeting Title"
          value={newMeeting.title}
          onChange={handleInputChange}
        />
        <input
          type="date"
          name="date"
          value={newMeeting.date}
          onChange={handleInputChange}
        />
        <input
          type="time"
          name="time"
          value={newMeeting.time}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="participants"
          placeholder="Participants"
          value={newMeeting.participants}
          onChange={handleInputChange}
        />
        <button onClick={addMeeting}>
          Add Meeting
        </button>
      </div>

      <div className="meetings-container">
        <h2>Scheduled Meetings</h2>
        {meetings.length === 0 ? (
          <p>No meetings scheduled.</p>
        ) : (
          <ul>
            {meetings.map((meeting, index) => (
              <li key={index} className="meeting">
                <strong>{meeting.title}</strong> <br />
                Date: {meeting.date} <br />
                Time: {meeting.time} <br />
                Participants: {meeting.participants} <br />
                <button onClick={() => removeMeeting(index)}>
                  Remove
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default MainPage;
