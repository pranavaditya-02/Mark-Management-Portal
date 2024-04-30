import React, { useState, useEffect } from 'react';
import './Marks.css'; // Import CSS file for styling

export default function Marks() {
  const [userMarks, setUserMarks] = useState([]);
  const [error, setError] = useState(null); // State for fetch error

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('http://localhost:8000/user-mark'); // Replace with your server endpoint
        if (!response.ok) {
          throw new Error('Failed to fetch user marks');
        }
        const data = await response.json();
        setUserMarks(data);
      } catch (error) {
        console.error('Error fetching user marks:', error);
        setError('Error fetching user marks'); // Set fetch error
      }
    }

    fetchData(); // Call the fetchData function when the component mounts
  }, []); // Empty dependency array ensures useEffect runs only once on mount

  return (
    <div className="user-marks">
      <h1>Student Marks</h1>
      {error ? (
        <p className='error'>{error}</p> // Display fetch error message
      ) : (
        <table>
          <thead>
            <tr>
              <th>Course Code</th>
              <th>Course Name</th>
              <th>Semester</th>
              <th>Marks Obtained</th>
            </tr>
          </thead>
          <tbody>
            {userMarks.map((marks, index) => (
              <tr key={index}>
                <td>{marks['CourseCode']}</td>
                <td>{marks['CourseName']}</td>
                <td>{marks['Semester']}</td>
                <td>{marks['MarksObtained']}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
