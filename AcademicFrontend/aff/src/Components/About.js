import React from "react";
import AboutBackground from "../Assets/about-background.png";
import AboutBackgroundImage from "../Assets/about-background-image.png";
import { BsFillPlayCircleFill } from "react-icons/bs";
import photo1 from "../Assets/photo1.avif"
import Navbar from "./Navbar";

const About = () => {
  return (<>
  <Navbar/>
    {/* <div className="about-section-container"> */}
    <div className="sectio" style={{display:"flex"}}>
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      <div className="about-section-image-container">
        <img src={photo1} alt=""  width={600} height={500} style={{marginTop:"170px"}}/>
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">About</p>
        <h1 className="primary-heading">
        A Dynamic Platform for Event Sharing        </h1>
        <p className="primary-text">
        In the fast-paced realm of academia, staying abreast of the latest workshops, seminars, and conferences is paramount for both scholars and enthusiasts alike
        </p>
        <p className="primary-text">
        In the dynamic realm of academia, the exchange of knowledge, ideas, and research findings is vital for intellectual growth and innovation. However, keeping track of the myriad workshops, seminars, and conferences happening worldwide can be a daunting task for scholars, students, and enthusiasts alike. To address this need, a dynamic platform for event sharing can serve as a centralized hub where individuals can discover, share, and engage with academic events in their fields of interest.
        </p>
        <div className="about-buttons-container">
          <button className="secondary-button">Learn More</button>
          <button className="watch-video-button">
            <BsFillPlayCircleFill /> Watch Video
          </button>
        </div>
      </div>
    </div>
    </>
  );
};

export default About;
