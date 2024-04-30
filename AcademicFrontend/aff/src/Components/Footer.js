import React from "react";
import Logo from "../Assets/Logo.svg";
import { BsTwitter } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import { BsYoutube } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-section-one">
        <div className="footer-logo-container secondary">
<h3 style={{color:"#6c757d"}}>Academic Confluences</h3>        </div>
        <div className="footer-icons">
          <BsTwitter />
          <SiLinkedin />
          <BsYoutube />
          <FaFacebookF />
        </div>
      </div>
      <div className="footer-section-two">
        <div className="footer-section-columns">
          <span>Seminars</span>
          <span>Workshops</span>
          <span>Competitions</span>
          <span>Technical Events</span>
          <span>Conferences</span>
          <span>Events</span>
        </div>
        <div className="footer-section-columns">
          <span>+91 8639538909</span>
          <span>hafijashaik7876@gmail.com</span>
          <span>press@career.com</span>
          <span>contact@career.com</span>
        </div>
        <div className="footer-section-columns">
          <span>Terms & Conditions</span>
          {/* <span>Privacy Policy</span> */}
        </div>
      </div>
    </div>
  );
};

export default Footer;
