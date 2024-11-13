// import React, { useState } from 'react';
// import './MainPage.css';

// const MainPage = () => {
//   const [meetings, setMeetings] = useState([]);
//   const [newMeeting, setNewMeeting] = useState({
//     title: '',
//     date: '',
//     time: '',
//     participants: ''
//   });

//   const addMeeting = () => {
//     setMeetings([...meetings, newMeeting]);
//     setNewMeeting({ title: '', date: '', time: '', participants: '' });
//   };

//   const handleInputChange = (e) => {
//     setNewMeeting({ ...newMeeting, [e.target.name]: e.target.value });
//   };

//   const removeMeeting = (index) => {
//     const updatedMeetings = meetings.filter((_, i) => i !== index);
//     setMeetings(updatedMeetings);
//   };

//   return (
//     <div className="container">
//       <h1>Online Meeting Scheduler</h1>
      
//       <div className="input-group">
//         <input
//           type="text"
//           name="title"
//           placeholder="Meeting Title"
//           value={newMeeting.title}
//           onChange={handleInputChange}
//         />
//         <input
//           type="date"
//           name="date"
//           value={newMeeting.date}
//           onChange={handleInputChange}
//         />
//         <input
//           type="time"
//           name="time"
//           value={newMeeting.time}
//           onChange={handleInputChange}
//         />
//         <input
//           type="text"
//           name="participants"
//           placeholder="Participants"
//           value={newMeeting.participants}
//           onChange={handleInputChange}
//         />
//         <button onClick={addMeeting}>
//           Add Meeting
//         </button>
//       </div>

//       <div className="meetings-container">
//         <h2>Scheduled Meetings</h2>
//         {meetings.length === 0 ? (
//           <p>No meetings scheduled.</p>
//         ) : (
//           <ul>
//             {meetings.map((meeting, index) => (
//               <li key={index} className="meeting">
//                 <strong>{meeting.title}</strong> <br />
//                 Date: {meeting.date} <br />
//                 Time: {meeting.time} <br />
//                 Participants: {meeting.participants} <br />
//                 <button onClick={() => removeMeeting(index)}>
//                   Remove
//                 </button>
//               </li>
//             ))}
//           </ul>
//         )}
//       </div>
//     </div>
//   );
// };

// export default MainPage;
// import React, { useContext, useEffect, useState } from 'react';
// // import { MeetingContext } from '../MeetingContext';
// import { MeetingContext } from './MeetingContext';


// import './MainPage.css';

// const MainPage = () => {
//   const { meetings, getMeetings, addMeeting, deleteMeeting } = useContext(MeetingContext);
//   const [newMeeting, setNewMeeting] = useState({
//     title: '',
//     date: '',
//     time: '',
//     participants: ''
//   });

//   useEffect(() => {
//     getMeetings();  // Fetch meetings when the component mounts
//   }, []);

//   const handleInputChange = (e) => {
//     setNewMeeting({ ...newMeeting, [e.target.name]: e.target.value });
//   };

//   const handleAddMeeting = () => {
//     addMeeting(newMeeting);
//     setNewMeeting({ title: '', date: '', time: '', participants: '' });
//   };

//   const handleDeleteMeeting = (id) => {
//     deleteMeeting(id);
//   };

//   return (
//     <div className="container">
//       <h1>Online Meeting Scheduler</h1>
      
//       <div className="input-group">
//         <input
//           type="text"
//           name="title"
//           placeholder="Meeting Title"
//           value={newMeeting.title}
//           onChange={handleInputChange}
//         />
//         <input
//           type="date"
//           name="date"
//           value={newMeeting.date}
//           onChange={handleInputChange}
//         />
//         <input
//           type="time"
//           name="time"
//           value={newMeeting.time}
//           onChange={handleInputChange}
//         />
//         <input
//           type="text"
//           name="participants"
//           placeholder="Participants"
//           value={newMeeting.participants}
//           onChange={handleInputChange}
//         />
//         <button onClick={handleAddMeeting}>
//           Add Meeting
//         </button>
//       </div>

//       <div className="meetings-container">
//         <h2>Scheduled Meetings</h2>
//         {meetings.length === 0 ? (
//           <p>No meetings scheduled.</p>
//         ) : (
//           <ul>
//             {meetings.map((meeting, index) => (
//               <li key={index} className="meeting">
//                 <strong>{meeting.title}</strong> <br />
//                 Date: {meeting.date} <br />
//                 Time: {meeting.time} <br />
//                 Participants: {meeting.participants} <br />
//                 <button onClick={() => handleDeleteMeeting(meeting.id)}>
//                   Remove
//                 </button>
//               </li>
//             ))}
//           </ul>
//         )}
//       </div>
//     </div>
//   );
// };

// export default MainPage;

// import React, { useState, useContext } from "react";
// import { MeetingContext } from "./MeetingContext";

// const MainPage = () => {
//   const { meetings, addMeeting, deleteMeeting, editMeeting } = useContext(MeetingContext);
//   const [title, setTitle] = useState("");
//   const [date, setDate] = useState("");
//   const [participants, setParticipants] = useState("");
//   const [editMode, setEditMode] = useState(false);
//   const [editId, setEditId] = useState(null);

//   // Handler for adding a meeting
//   const handleAddMeeting = () => {
//     if (!editMode) {
//       const newMeeting = {
//         title,
//         date,
//         participants,
//       };
//       addMeeting(newMeeting);
//     } else {
//       // Handle edit operation
//       const updatedMeeting = {
//         id: editId,
//         title,
//         date,
//         participants,
//       };
//       editMeeting(updatedMeeting);
//       setEditMode(false);
//     }

//     // Clear inputs
//     setTitle("");
//     setDate("");
//     setParticipants("");
//   };

//   // Handler for editing a meeting
//   const handleEdit = (meeting) => {
//     setEditMode(true);
//     setEditId(meeting.id);
//     setTitle(meeting.title);
//     setDate(meeting.date);
//     setParticipants(meeting.participants);
//   };

//   return (
//     <div>
//       <h1>Manage Meetings</h1>
//       <div>
//         <input
//           type="text"
//           placeholder="Meeting Title"
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//         />
//         <input
//           type="date"
//           value={date}
//           onChange={(e) => setDate(e.target.value)}
//         />
//         <input
//           type="text"
//           placeholder="Participants"
//           value={participants}
//           onChange={(e) => setParticipants(e.target.value)}
//         />
//         <button onClick={handleAddMeeting}>
//           {editMode ? "Update Meeting" : "Add Meeting"}
//         </button>
//       </div>
      
//       <div>
//         <h2>Meeting List</h2>
//         <ul>
//           {meetings.map((meeting) => (
//             <li key={meeting.id}>
//               <strong>{meeting.title}</strong> - {meeting.date} - {meeting.participants}
//               <button onClick={() => handleEdit(meeting)}>Edit</button>
//               <button onClick={() => deleteMeeting(meeting.id)}>Delete</button>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default MainPage;
import React, { useState, useContext } from "react";
import { MeetingContext } from "./MeetingContext";
import './MainPage.css';

const handleMeet = () => {
  window.location.href="https://meet.google.com/mgk-emba-wmv"
}

const MainPage = () => {
  const { meetings, addMeeting, deleteMeeting, editMeeting } = useContext(MeetingContext);
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [participants, setParticipants] = useState("");
  const [editMode, setEditMode] = useState(false);
  const [editId, setEditId] = useState(null);
  const [time,setTime]=useState(null);


  // Handler for adding or updating a meeting
  const handleAddMeeting = () => {
    if (!editMode) {
      // Add new meeting
      const newMeeting = {
        title,
        date,
        participants,
        time,
      };
      addMeeting(newMeeting);
    } else {
      // Edit existing meeting
      const updatedMeeting = {
        id: editId, // Use the id of the meeting being edited
        title,
        date,
        participants,
        time,
      };
      editMeeting(updatedMeeting); // Call the editMeeting function
      setEditMode(false); // Reset the mode back to 'add'
    }

    // Clear inputs after adding/updating
    setTitle("");
    setDate("");
    setTime("");
    setParticipants("");
  };

  // Handler for editing a meeting
  const handleEdit = (meeting) => {
    setEditMode(true); // Set the edit mode to true
    setEditId(meeting.id); // Set the id of the meeting being edited
    setTitle(meeting.title); // Populate the input with the existing title
    setDate(meeting.date); // Populate the input with the existing date
    setParticipants(meeting.participants); // Populate the input with the existing participants
    setTime(meeting.time); // Populate the input with the existing participants
  };

  return (
    <div>
      <h1>Manage Meetings</h1>
      <div>
        <input
          type="text"
          placeholder="Meeting Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <input
          type="text"
          placeholder="Participants"
          value={participants}
          onChange={(e) => setParticipants(e.target.value)}
        />
        <input
          type="time"
          placeholder="Participants"
          value={time}
          onChange={(e) => setParticipants(e.target.value)}
        /><br></br>
        <button onClick={handleAddMeeting}>
          {editMode ? "Update Meeting" : "Add Meeting"}
        </button>
      </div>

      <div>
        <h2>Meeting List</h2>
        <ul>
          {meetings.map((meeting) => (
            <li key={meeting.id}>
              <strong>{meeting.title}</strong> - {meeting.date} - {meeting.participants}  
              <button onClick={() => handleEdit(meeting)}>Edit</button>
              <button onClick={() => deleteMeeting(meeting.id)}>Delete</button>
              <button onClick={handleMeet}>Meet</button>
             </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MainPage;