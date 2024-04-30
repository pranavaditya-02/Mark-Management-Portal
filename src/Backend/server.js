const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: '',
  database: "login"
});

// Endpoint for user authentication
app.post('/users', (req, res) => {
  const { username, password } = req.body;
  const sql = "SELECT * FROM users WHERE USERNAME = ? AND PASSWORD = ?";
  db.query(sql, [username, password], (err, data) => {
    if (err) {
      console.error('Error executing query:', err);
      return res.status(500).json({ error: "Internal server error" });
    }
    
    if (data.length > 0) {
      return res.status(200).json({ success: true });
    } else {
      return res.status(401).json({ error: "Invalid username or password" });
    }
  });
});

// Endpoint for fetching user data
app.get('/user-data', (req, res) => {
  const sql = "SELECT username, password FROM users"; // Modify query as per your database schema
  db.query(sql, (err, data) => {
    if (err) {
      console.error('Error fetching user data:', err);
      return res.status(500).json({ error: "Internal server error" });
    }
    res.status(200).json(data); // Send user data as JSON response
  });
});
app.get('/user-mark', (req, res) => {
  const sql = "SELECT CourseCode,CourseName,Semester,MarksObtained  FROM marks"; // Modify query as per your database schema
  db.query(sql, (err, data) => {
    if (err) {
      console.error('Error fetching user data:', err);
      return res.status(500).json({ error: "Internal server error" });
    }
    res.status(200).json(data); // Send user data as JSON response
  });
});
app.post('/user-mark', (req, res) => {
  const { CourseCode, CourseName, Semester, MarksObtained } = req.body;
  const sql = "INSERT INTO marks (CourseCode, CourseName, Semester, MarksObtained) VALUES (?, ?, ?, ?)";
  db.query(sql, [CourseCode, CourseName, Semester, MarksObtained], (err, result) => {
    if (err) {
      console.error('Error inserting user marks:', err);
      return res.status(500).json({ error: "Internal server error" });
    }
    res.status(200).json({ success: true }); // Send success response
  });
});
app.get('/marks-data', (req, res) => {
  const sql = "SELECT SubjectName, MarksObtained FROM marks";
  db.query(sql, (err, data) => {
    if (err) {
      console.error('Error fetching marks data:', err);
      return res.status(500).json({ error: "Internal server error" });
    }
    res.status(200).json(data);
  });
});
app.post('/update-mark', (req, res) => {
  const { CourseCode, MarksObtained } = req.body;
  const sql = "UPDATE marks SET MarksObtained = ? WHERE CourseCode = ?";
  db.query(sql, [MarksObtained, CourseCode], (err, result) => {
    if (err) {
      console.error('Error updating marks:', err);
      return res.status(500).json({ error: "Internal server error" });
    }
    console.log('Marks updated successfully');
    return res.status(200).json({ success: true });
  });
});
app.delete('/delete-mark', (req, res) => {
  const { CourseCode } = req.body;
  const sql = "DELETE FROM marks WHERE CourseCode = ?";
  db.query(sql, [CourseCode], (err, result) => {
    if (err) {
      console.error('Error deleting row from marks:', err);
      return res.status(500).json({ error: "Internal server error" });
    }
    console.log('Row deleted successfully');
    res.status(200).json({ message: "Row deleted successfully" });
  });
});

app.listen(8000, () => {
  console.log('Server is listening on port 8000');
});

