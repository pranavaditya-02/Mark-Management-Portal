import React, { useState, useEffect } from 'react';
import './Data.css'; // Import CSS file for styling

export default function Page1() {
  const [userData, setUserData] = useState([]);
  const [error, setError] = useState(null); // State for fetch error

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('http://localhost:8000/user-data'); // Replace with your server endpoint
        if (response.ok) {
          const data = await response.json();
          setUserData(data); // Update state with fetched data
        } else {
          console.error('Failed to fetch user data');
          setError('Failed to fetch user data'); // Set fetch error
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
        setError('Error fetching user data'); // Set fetch error
      }
    }

    fetchData(); // Call the fetchData function when the component mounts
  }, []); // Empty dependency array ensures useEffect runs only once on mount

  return (
    <div className="user-data">
      <h1>User Data Table</h1>
      {error ? (
        <p className='error'>{error}</p> // Display fetch error message
      ) : (
        <table>
          <thead>
            <tr>
              <th>Username</th>
              <th>Password</th>
            </tr>
          </thead>
          <tbody>
            {userData.map((user, index) => (
              <tr key={index}>
                <td>{user.username}</td>
                <td>{user.password}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}