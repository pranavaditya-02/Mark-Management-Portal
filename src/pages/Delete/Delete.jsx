// Delete.jsx
import React, { useState } from 'react';
import './Delete.css'; // Import CSS file for styling

export default function Delete() {
 const [formData, setFormData] = useState({
    CourseCode: ''
    ,MarksObtained: '',
 });

 const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
 };

 const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8000/delete-mark', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        console.log('Row deleted successfully');
      } else {
        console.error('Failed to delete row');
      }
    } catch (error) {
      console.error('Error deleting row:', error);
    }
    setFormData({
      CourseCode: '',
      MarksObtained: '',
    });
 };

 return (
    <form className="delete-form" onSubmit={handleSubmit}>
      <h2>Delete Row</h2>
      <div className="form-group">
        <label htmlFor="courseCode">Course Code:</label>
        <input
          type="text"
          id="CourseCode"
          name="CourseCode"
          placeholder="Course Code"
          value={formData.CourseCode}
          onChange={handleChange}
          required
        />
        <label htmlFor="courseCode">Marks Obtained:</label>
        <input
          type="text"
          id="MarksObtained"
          name="MarksObtained"
          placeholder="Marks Obtained"
          value={formData.MarksObtained} // Corrected typo here
          onChange={handleChange}
          required
        />
      </div>
      <button className='button1' type="submit">Delete</button>
    </form>
 );
}
