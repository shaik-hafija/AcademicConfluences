import React from "react";
import { Link } from "react-router-dom";
import "./Department.css"; // Import CSS file for styling
import Navbar from '../Components/Navbar';
import BannerBackground from "../Assets/home-banner-background.png";
import AboutBackground from "../Assets/about-background.png";



const Department = () => {
  return (
    <>
    <Navbar/>
    <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
      <h1 style={{ textAlign: "center" }}>Departments</h1>

      <div className="cards-list">
        <div className="card 1">
          <Link to="/cse">
            <div className="card_image">
              <img src="https://media.istockphoto.com/id/1456739999/photo/hardware-security-concept-digital-shield-firewall-with-central-computer-processor-and.webp?b=1&s=170667a&w=0&k=20&c=4ZN_b58dcQx0-zCB9U_SWk-kGXqdj9DrP6xIvG7xQiE=" alt="CSE" />
            </div>
            <div className="card_title title-white">
              <p>CSE</p>
            </div>
          </Link>
        </div>

        <div className="card 2">
          <Link to="/ece">
            <div className="card_image">
              <img src="https://images.unsplash.com/photo-1603732551658-5fabbafa84eb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fEVsZWN0cm9uaWNzJTIwYW5kJTIwQ29tbXVuaWNhdGlvbiUyMEVuZ2luZWVyaW5nJTIwaW1hZ2VzfGVufDB8fDB8fHww" alt="ECE" />
            </div>
            <div className="card_title title-white">
              <p>ECE</p>
            </div>
          </Link>
        </div>

        {/* Add more cards for other departments */}
        <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
        <div className="card 3">
          <Link to="/civil">
            <div className="card_image">
              <img src="https://media.istockphoto.com/id/1456739999/photo/hardware-security-concept-digital-shield-firewall-with-central-computer-processor-and.webp?b=1&s=170667a&w=0&k=20&c=4ZN_b58dcQx0-zCB9U_SWk-kGXqdj9DrP6xIvG7xQiE=" alt="Civil" />
            </div>
            <div className="card_title title-white">
              <p>Civil</p>
            </div>
          </Link>
        </div>

        {/* Add more cards for other departments */}

        <div className="card 4">
          <Link to="/mech">
            <div className="card_image">
              <img src="https://media.istockphoto.com/id/1456739999/photo/hardware-security-concept-digital-shield-firewall-with-central-computer-processor-and.webp?b=1&s=170667a&w=0&k=20&c=4ZN_b58dcQx0-zCB9U_SWk-kGXqdj9DrP6xIvG7xQiE=" alt="Mech" />
            </div>
            <div className="card_title title-white">
              <p>Mech</p>
            </div>
          </Link>
        </div>

        {/* Add more cards for other departments */}

        <div className="card 5">
          <Link to="/eee">
            <div className="card_image">
              <img src="https://media.istockphoto.com/id/1456739999/photo/hardware-security-concept-digital-shield-firewall-with-central-computer-processor-and.webp?b=1&s=170667a&w=0&k=20&c=4ZN_b58dcQx0-zCB9U_SWk-kGXqdj9DrP6xIvG7xQiE=" alt="EEE" />
            </div>
            <div className="card_title title-white">
              <p>EEE</p>
            </div>
          </Link>
        </div>

        {/* Add more cards for other departments */}

        <div className="card 6">
          <Link to="/ai">
            <div className="card_image">
              <img src="https://media.istockphoto.com/id/1456739999/photo/hardware-security-concept-digital-shield-firewall-with-central-computer-processor-and.webp?b=1&s=170667a&w=0&k=20&c=4ZN_b58dcQx0-zCB9U_SWk-kGXqdj9DrP6xIvG7xQiE=" alt="AI" />
            </div>
            <div className="card_title title-white">
              <p>AI</p>
            </div>
          </Link>
        </div>

        {/* Add more cards for other departments */}

        <div className="card 7">
          <Link to="/newDepartment">
            <div className="card_image">
              <img src="https://media.istockphoto.com/id/1456739999/photo/hardware-security-concept-digital-shield-firewall-with-central-computer-processor-and.webp?b=1&s=170667a&w=0&k=20&c=4ZN_b58dcQx0-zCB9U_SWk-kGXqdj9DrP6xIvG7xQiE=" alt="New Department" />
            </div>
            <div className="card_title title-white">
              <p>DataScience</p>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Department;
