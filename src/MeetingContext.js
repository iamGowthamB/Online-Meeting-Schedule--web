// import React, { createContext, useState } from 'react';

// // Create the context
// export const MeetingContext = createContext();

// export const MeetingProvider = ({ children }) => {
//   const [meetings, setMeetings] = useState([]);

//   // Function to GET meetings (e.g., from an API)
//   const getMeetings = async () => {
//     try {
//       // API call to fetch meetings
//       const response = await fetch('/api/meetings');
//       const data = await response.json();
//       setMeetings(data);
//     } catch (error) {
//       console.error('Error fetching meetings:', error);
//     }
//   };

//   // Function to ADD (POST) a new meeting
//   const addMeeting = async (newMeeting) => {
//     try {
//       const response = await fetch('/api/meetings', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(newMeeting),
//       });
//       const addedMeeting = await response.json();
//       setMeetings([...meetings, addedMeeting]);
//     } catch (error) {
//       console.error('Error adding meeting:', error);
//     }
//   };

//   // Function to DELETE a meeting
//   const deleteMeeting = async (id) => {
//     try {
//       await fetch(/api/meetings/${id}, { method: 'DELETE' });
//       setMeetings(meetings.filter((meeting) => meeting.id !== id));
//     } catch (error) {
//       console.error('Error deleting meeting:', error);
//     }
//   };

//   // Function to UPDATE (PUT) a meeting
//   const updateMeeting = async (id, updatedMeeting) => {
//     try {
//       const response = await fetch(/api/meetings/${id}, {
//         method: 'PUT',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(updatedMeeting),
//       });
//       const newMeeting = await response.json();
//       setMeetings(meetings.map((meeting) => (meeting.id === id ? newMeeting : meeting)));
//     } catch (error) {
//       console.error('Error updating meeting:', error);
//     }
//   };

//   return (
//     <MeetingContext.Provider
//       value={{
//         meetings,
//         getMeetings,
//         addMeeting,
//         deleteMeeting,
//         updateMeeting,
//       }}
//     >
//       {children}
//     </MeetingContext.Provider>
//   );
// };
// import React, { createContext, useState, useEffect } from "react";

// // Create the context
// export const MeetingContext = createContext();

// // Create the provider component
// export const MeetingProvider = ({ children }) => {
//   const [meetings, setMeetings] = useState([]);

//   // Fetch meetings from the server when the component mounts
//   useEffect(() => {
//     const fetchMeetings = async () => {
//       try {
//         const response = await fetch("http://localhost:3000/meetings");
//         const data = await response.json();
//         setMeetings(data);
//       } catch (error) {
//         console.error("Error fetching meetings:", error);
//       }
//     };

//     fetchMeetings();
//   }, []);

//   const editMeeting = async (updatedMeeting) => {
//     try {
//       const response = await fetch(http://localhost:3000/meetings/${updatedMeeting.id}, {
//         method: "PUT",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(updatedMeeting),
//       });

//       const editedMeeting = await response.json();
//       setMeetings((prevMeetings) =>
//         prevMeetings.map((meeting) =>
//           meeting.id === editedMeeting.id ? editedMeeting : meeting
//         )
//       );
//     } catch (error) {
//       console.error("Error editing meeting:", error);
//     }
//   };

//   // Function to add a new meeting
//   const addMeeting = async (meeting) => {
//     try {
//       const response = await fetch("http://localhost:3000/meetings", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(meeting),
//       });

//       const addedMeeting = await response.json();
//       setMeetings((prevMeetings) => [...prevMeetings, addedMeeting]);
//     } catch (error) {
//       console.error("Error adding meeting:", error);
//     }
//   };

//   // Function to delete a meeting by id
//   const deleteMeeting = async (id) => {
//     try {
//       await fetch(http://localhost:3000/meetings/${id}, {
//         method: "DELETE",
//       });

//       // Remove the deleted meeting from the state
//       setMeetings((prevMeetings) =>
//         prevMeetings.filter((meeting) => meeting.id !== id)
//       );
//     } catch (error) {
//       console.error("Error deleting meeting:", error);
//     }
//   };

//   // Provide the state and functions to children components
//   return (
//     <MeetingContext.Provider value={{ meetings, addMeeting, deleteMeeting }}>
//       {children}
//     </MeetingContext.Provider>
//   );
// };
import React, { createContext, useState } from "react";

// Create Meeting Context
export const MeetingContext = createContext();

export const MeetingProvider = ({ children }) => {
  const [meetings, setMeetings] = useState([]);

  // Add a new meeting
  const addMeeting = (meeting) => {
    setMeetings([...meetings, { ...meeting, id: Date.now() }]); // Create a new meeting with a unique id
  };

  // Delete a meeting
  const deleteMeeting = (id) => {
    setMeetings(meetings.filter((meeting) => meeting.id !== id)); // Remove meeting with the matching id
  };

  // Edit an existing meeting
  const editMeeting = (updatedMeeting) => {
    setMeetings(
      meetings.map((meeting) =>
        meeting.id === updatedMeeting.id ? updatedMeeting : meeting
      )
    );
  };

  return (
    <MeetingContext.Provider
      value={{
        meetings,
        addMeeting,
        deleteMeeting,
        editMeeting,
      }}
    >
      {children}
    </MeetingContext.Provider>
  );
};