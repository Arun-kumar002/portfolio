import "./Footer.css"
import React from "react";
import { FaHome, FaPhone, FaMailBulk, FaFacebook, FaLinkedin, FaGithub, } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome size={30} style={{ color: "#fff", marginRight: "2rem" }} />
            <div>
              <p>204, Main Road street , sundaram-post </p>
              <p>ponnamaravathy-tk,pudukkottai-Dist</p>
              <p>Tamilnadu</p>
              <p>India</p>
            </div>
          </div>
          <div className="phone">
            <h4>
              <FaPhone size={20} style={{ color: "#fff", marginRight: "2rem" }} /> +91 8610159926
            </h4>
          </div>

        </div>
        <div className="right">
          <div className="social">
            <h4> <a href="mailto:arunsubramanian002@gmail.com"><FaMailBulk size={30} /></a>
            </h4>
            <h4><a href="https://www.facebook.com/profile.php?id=100029133751179"><FaFacebook size={30} /></a>
            </h4>
            <h4><a href="https://www.linkedin.com/feed/update/urn:li:activity:7010904100418555904"><FaLinkedin size={30} /></a>
            </h4>
            <h4><a href="https://github.com/Arun-kumar002"><FaGithub size={30} /></a>
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
