import React from 'react'
import "./about.css";

const Info = () => {
  return (
    <div className="about_info">
      <div className="about_box">
      <i class='bx bx-briefcase-alt-2 about_icons' ></i>        
      <h3 className="about_title">Experience</h3>
        <span className="about_subtitle">1+ years</span>
      </div>

      <div className="about_box">
        <i class='bx bx-code-alt about_icons'></i>
        <h3 className="about_title">Completed</h3>
        <span className="about_subtitle">6+ Projects</span>
      </div>

      <div className="about_box">
        <i class='bx bx-support about_icons' ></i>
        <h3 className="about_title">Support</h3>
        <span className="about_subtitle">Online 15/5</span>
      </div>
    </div>
  );
};

export default Info;