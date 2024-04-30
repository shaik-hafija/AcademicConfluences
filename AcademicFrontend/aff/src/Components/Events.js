import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from './Navbar';
import './Events.css';
import AboutBackground from "../Assets/about-background.png";

import BannerBackground from "../Assets/home-banner-background.png";

const Events = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:5000/api/projects')
      .then((res) => {
        console.log(res.data);
        setData(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <Navbar />
      <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
      <div className="gallery-container">
        {data.length > 0 ? (
          data.map((projectItem, projectIndex) => (
            <div key={projectIndex + 1} className="content">
              {/* <img src={`http://localhost:5000/${projectItem?.p_img}`} alt="" className="img" /> */}
              <div className="project-details">
             
                <img src={`http://localhost:5000/${projectItem?.e_poster}`} alt="" className="poster" />
                <div className='text'>
                <h1 className='title'style={{color:"#ffa500"}}>{projectItem.e_name}  {projectItem.e_type}</h1>
                {/* <p>Type: {projectItem.e_type}</p> */}
                <p style={{color:"blue"}}>Start Date: {projectItem.e_sdate}</p>
                <p>End Date: {projectItem.e_edate}</p>
                <p style={{color:"red"}}>Fee: {projectItem.e_fee}</p>
                <p>Contact: {projectItem.e_contact}</p>
                <p>Event Registration:<a href='https://docs.google.com/forms/d/e/1FAIpQLSdPWt_IBqK5SvT5HiQqNugnYnDk3jI7JwJ8RO1d1OGSF59r3g/closedform'>click here</a> </p>
                <p>State: {projectItem.e_state}</p>
                <p>Branch: {projectItem.e_city}</p>
                <p>Address: {projectItem.e_address}</p>
                <p>More: {projectItem.e_more}</p>
                <p style={{color:"red"}}>College: {projectItem.e_clg}</p>
                </div>
                {/* <button className="more-1" id="moreInfoBtn">
                  More Info
                </button> */}
              </div>
            </div>
          ))
        ) : (
          'No data found'
        )}
        <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      </div>
    </>
  );
};

export default Events;
