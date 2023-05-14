import "./WorkCard.css";
import React from 'react'
//import { NavLink } from "react-router-dom";


const WorkCard = ({props}) => {

  console.log(props)
  return (
    <div className="project-card">
                <img src={props.imgs} alt="image"/>
                <h2 className="project-title">{props.title}</h2>
                <div className="pro-details">
                    <p>{props.text}</p>
                    <div className="pro-btn">
                     <a href={props.code} className="btn" target="_blank">Code</a> 
                    <a href={props.View} className="btn btn-light" target="_blank">View</a>
                    </div>
                </div>
            </div>
  )
  
}

export default WorkCard