import React from "react";
import BannerBackground from "../Assets/home-banner-background.png";
import BannerImage from "../Assets/home-banner-image.png";
import Navbar from "./Navbar";
import { FiArrowRight } from "react-icons/fi";
import photo from "../Assets/photo.avif"


const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
          Empowering Academic Exchange          </h1>
          <p className="primary-text">
          Introducing our innovative web platform, Academic Confluences, designed to bridge the gap between knowledge seekers and event organizers.
          </p>
          <button className="secondary-button">
            Get Started<FiArrowRight />{" "}
          </button>
        </div>
        <div className="home-image-section"style={{marginTop:"70px"}} >
          <img src={photo} alt="" style={{borderRadius:"40px"}}/>
        </div>
      </div>
    </div>
  );
};

export default Home;
