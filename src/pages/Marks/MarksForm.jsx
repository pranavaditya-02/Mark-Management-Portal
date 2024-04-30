import React, { useState } from 'react';
import './MarksForm.css'; // Import CSS file for styling

export default function MarksForm() {
  const [formData, setFormData] = useState({
    CourseCode: '',
    CourseName: '',
    Semester: '',
    MarksObtained: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8000/user-mark', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        console.log('Data saved successfully');
      } else {
        console.error('Failed to save data');
      }
    } catch (error) {
      console.error('Error saving data:', error);
    }
    setFormData({
      CourseCode: '',
      CourseName: '',
      Semester: '',
      MarksObtained: '',
    });
  };

  return (
    <form className="marks-form" onSubmit={handleSubmit}>
      <h2>Add New Marks</h2>
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
      </div>
      <div className="form-group">
        <label htmlFor="courseName">Course Name:</label>
        <input
          type="text"
          id="CourseName"
          name="CourseName"
          placeholder="Course Name"
          value={formData.CourseName}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="semester">Semester:</label>
        <input
          type="text"
          id="Semester"
          name="Semester"
          placeholder="Semester"
          value={formData.Semester}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="marksObtained">Marks Obtained:</label>
        <input
          type="number"
          id="MarksObtained"
          name="MarksObtained"
          placeholder="Marks Obtained"
          value={formData.MarksObtained}
          onChange={handleChange}
          required
        />
      </div>
      <button className='button1' type="submit">Submit</button>
    </form>
  );
}
