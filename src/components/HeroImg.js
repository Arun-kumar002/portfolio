import "./HeroImg.css";

import React from 'react';
import IntroImg from "../assets/intro.jpg";
import {Link} from "react-router-dom";
import myImg from "../assets/arun.jpeg";


const HeroImg = () => {
  
  return (
    
    
    <div className="hero">
        <div className="mask">
        <img className="intro-img"
            src= {IntroImg} alt= "IntroImg" />
        </div>
        
        <div className="content">
        <div className="img">
          <img className="my-img" src= {myImg} alt= "MyImg" />
        </div>
            <p> <h3>HI, I'M Arunkumar.</h3></p>
            <h1>Full Stack Developer</h1>
            <div>
                <Link to="/contact" className="btn btn-light">Contacts</Link>
            </div>
        </div>
    </div>
    
  )
}

export default HeroImg;