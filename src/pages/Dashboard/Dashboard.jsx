// Dashboard.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css'; // Import CSS file for styling
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTachometerAlt, faUser, faBook, faPlus, faSignOutAlt, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';


export default function Dashboard() {
  return (
    <div className="dashboard">
      <div className="navbar">
        <ul>
        <div className="navbar">
        <ul>
        <div className="navbar">
        <ul>
        <li><Link to="/Dashboard"><span className="icon-spacing"><FontAwesomeIcon icon={faTachometerAlt} /></span> Dashboard</Link></li>
        <li><Link to="/Data"><span className="icon-spacing"><FontAwesomeIcon icon={faUser} /></span> User data</Link></li>
        <li><Link to="/Marks"><span className="icon-spacing"><FontAwesomeIcon icon={faBook} /></span> User Marks</Link></li>
        <li><Link to="/MarksForm"><span className="icon-spacing"><FontAwesomeIcon icon={faPlus} /></span> Add Marks</Link></li>
        <li><Link to="/Change"><span className="icon-spacing"><FontAwesomeIcon icon={faEdit} /></span> Change Marks</Link></li>
        <li><Link to="/Delete"><span className="icon-spacing"><FontAwesomeIcon icon={faTrash} /></span> Delete Marks</Link></li>
        <li><Link to="/"><span className="icon-spacing"><FontAwesomeIcon icon={faSignOutAlt} /></span> Logout</Link></li>
        </ul>
</div>

        </ul>
        </div>

        </ul>
      </div>
      <div className="content">
        <h2>Dashboard</h2>
        <div className="cards">
          <div className="card">
            <h3>Card 1</h3>
            <p>Placeholder content for Card 1</p>
          </div>
          <div className="card">
            <h3>Card 2</h3>
            <p>Placeholder content for Card 2</p>
          </div>
          <div className="card">
            <h3>Card 3</h3>
            <p>Placeholder content for Card 3</p>
          </div>
        </div>
      </div>
    </div>
  );
}
