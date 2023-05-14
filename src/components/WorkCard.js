import "./WorkCard.css";
import React from 'react'
//import { NavLink } from "react-router-dom";


const WorkCard = ({ props }) => {

  console.log(props)
  return (
    <div className="project-card">
      <img src={props.imgs} alt="dev" />
      <h2 className="project-title">{props.title}</h2>
      <div className="pro-details">
        <p>{props.text}</p>
        <div className="pro-btn">
          <p className="btn" >Code</p>
          <p className="btn btn-light" >View</p>
        </div>
      </div>
    </div>
  )

}

export default WorkCard