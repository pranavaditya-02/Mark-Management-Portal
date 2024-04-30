import React, { Component } from 'react'
import Logo from './Logo.jpeg'
import './head.css'

export class head extends Component {

  Find() {
    const Hr = document.querySelector(".message")

    Hr.style.display = "none"
    Hr.style.cursor = "pointer"
  }


  render() {
    return (
        <div className="header">
          <div className="message">
            <i class="fa-solid fa-circle-check"></i>
            <h3>Login Succesfull</h3>
            <i class="fa-solid fa-xmark" onClick={()=>this.Find()}></i>
          </div>
            
            <h2>BANNARI AMMAN INSTITUTE OF TECHNOLOGY <br /> <span>Student Data Management Portal</span></h2>
        </div>
        
    )
  }
}

export default head
