import React, { useState } from 'react';
import axios from 'axios';
// import { Navbar } from '../Navbar';
import Navbar from './Navbar';
import './Upload.css';
import BannerBackground from "../Assets/home-banner-background.png";

const Upload = () => {
  const [e_name, setEventName] = useState('');
  const [e_type, setEventType] = useState('conference');
  const [e_sdate, setEventStartDate] = useState('');
  const [e_edate, setEventEndDate] = useState('');
  const [e_poster, setEventPoster] = useState(null);
  const [e_fee, setEventFee] = useState('');
  const [e_contact, setEventContact] = useState('');
  const [e_country, setEventCountry] = useState('');
  const [e_state, setEventState] = useState('');
  const [e_city, setEventCity] = useState('');
  const [e_address, setEventAddress] = useState('');
  const [e_more, setEventMore] = useState('');
  const [e_clg, setEventId] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case 'e_name':
        setEventName(value);
        break;
      case 'e_type':
        setEventType(value);
        break;
      case 'e_sdate':
        setEventStartDate(value);
        break;
      case 'e_edate':
        setEventEndDate(value);
        break;
      case 'e_fee':
        setEventFee(value);
        break;
      case 'e_contact':
        setEventContact(value);
        break;
      case 'e_country':
        setEventCountry(value);
        break;
      case 'e_state':
        setEventState(value);
        break;
      case 'e_city':
        setEventCity(value);
        break;
      case 'e_address':
        setEventAddress(value);
        break;
      case 'e_more':
        setEventMore(value);
        break;
      case 'e_clg':
        setEventId(value);
        break;
      default:
        break;
    }
  };

  const handleImageChange = (e) => {
    setEventPoster(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('e_name', e_name);
    formData.append('e_type', e_type);
    formData.append('e_sdate', e_sdate);
    formData.append('e_edate', e_edate);
    formData.append('e_poster', e_poster);
    formData.append('e_fee', e_fee);
    formData.append('e_contact', e_contact);
    formData.append('e_country', e_country);
    formData.append('e_state', e_state);
    formData.append('e_city', e_city);
    formData.append('e_address', e_address);
    formData.append('e_more', e_more);
    formData.append('e_clg', e_clg);

    try {
      const response = await axios.post('http://localhost:5000/api/uploadEvent', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      console.log(response.data);
      // Reset form fields after successful submission if needed
    } catch (error) {
      console.error('Error uploading event:', error);
    }
  };

  return (
    <>
      <Navbar />
      <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
      <div className="body">
        <div className="container mt-5" id="body">
          <h1 style={{textAlign:"center",color:"#ffa500"}}>Upload Event</h1>
          <div class="card-container">
            <div class="form-container">
            <form onSubmit={handleSubmit}>
              <div className="mb-3" style={{textAlign:"center",marginTop:"10px"}}>
                <label htmlFor="event_name" className="form-label">Event Name</label>
                <input type="text" className="form-control" id="event_name" value={e_name} onChange={handleChange} required name="e_name" />
              </div>
              <div className="mb-3" style={{textAlign:"center",marginTop:"10px"}}>
                <label htmlFor="event_type" className="form-label">Event Type</label>
                <select className="form-select" id="event_type" value={e_type} onChange={handleChange} required name="e_type">
                  <option value="conference">Conference</option>
                  <option value="workshop">Workshop</option>
                  <option value="seminar">Seminar</option>
                  <option value="Competition">Competition</option>

                </select>
              </div>
              {/* Other input fields */}
              <div className="mb-3" style={{textAlign:"center",marginTop:"10px"}}>
                <label htmlFor="event_sdate" className="form-label">Event Start Date</label>
                <input type="date" className="form-control" id="event_sdate" value={e_sdate} onChange={handleChange} required name="e_sdate" />
              </div>
              <div className="mb-3" style={{textAlign:"center",marginTop:"10px"}}>
                <label htmlFor="event_edate" className="form-label">Event End Date</label>
                <input type="date" className="form-control" id="event_edate" value={e_edate} onChange={handleChange} required name="e_edate" />
              </div>
              <div className="mb-3" style={{textAlign:"center",marginTop:"10px"}}>
                <label htmlFor="e_poster" className="form-label">Event Poster</label>
                <input type="file" className="form-control" id="e_poster" onChange={handleImageChange} accept="image/*" required name="e_poster" />
              </div>
              <div className="mb-3" style={{textAlign:"center",marginTop:"10px"}}>
                <label htmlFor="event_fee" className="form-label">Event Fee</label>
                <input type="number" className="form-control" id="event_fee" value={e_fee} onChange={handleChange} required name="e_fee" />
              </div>
              <div className="mb-3" style={{textAlign:"center",marginTop:"10px"}}>
                <label htmlFor="event_contact" className="form-label">Event Contact</label>
                <input type="text" className="form-control" id="event_contact" value={e_contact} onChange={handleChange} required name="e_contact" />
              </div>
              <div className="mb-3" style={{textAlign:"center",marginTop:"10px"}}>
                <label htmlFor="event_country" className="form-label">Event Registration Link</label>
                <input type="text" className="form-control" id="event_country" value={e_country} onChange={handleChange} required name="e_country" />
              </div>
              <div className="mb-3" style={{textAlign:"center",marginTop:"10px"}}>
                <label htmlFor="event_state" className="form-label">Event State</label>
                <input type="text" className="form-control" id="event_state" value={e_state} onChange={handleChange} required name="e_state" />
              </div>
              {/* <div className="mb-3" style={{textAlign:"center",marginTop:"10px"}}>
                <label htmlFor="event_city" className="form-label">Event City</label>
                <input type="text" className="form-control" id="event_city" value={e_city} onChange={handleChange} required name="e_city" />
              </div> */}
              <div className="mb-3" style={{textAlign:"center",marginTop:"10px"}}>
                <label htmlFor="event_city" className="form-label">Select Branch</label>
                <select className="form-select" id="event_city" value={e_city} onChange={handleChange} required name="e_city">
                <option value="branch">branch</option>

                  <option value="cse">Cse</option>
                  <option value="ece">Ece</option>
                  <option value="eee">Eee</option>
                  <option value="civil">Civil</option>
                  <option value="ai">Ai</option>


                </select>
              </div>
              <div className="mb-3" style={{textAlign:"center",marginTop:"10px"}}>
                <label htmlFor="event_address" className="form-label">Event Address</label>
                <input type="text" className="form-control" id="event_address" value={e_address} onChange={handleChange} required name="e_address" />
              </div>
              <div className="mb-3" style={{textAlign:"center",marginTop:"10px"}}>
                <label htmlFor="event_more" className="form-label" >Additional Information</label>
                <textarea className="form-control" id="event_more" rows="4" value={e_more} onChange={handleChange} required name="e_more"></textarea>
              </div>
              <div className="mb-3" style={{textAlign:"center",marginTop:"10px"}}>
                <label htmlFor="event_clg" className="form-label">College Name  </label>
                <input type="text" className="form-control" id="event_clg" value={e_clg} onChange={handleChange} required name="e_clg" />
              </div>
           
              <button type="submit" className="secondary-button" style={{textAlign:"center",marginTop:"50px",marginLeft:"150px"}}>Create Event</button>
            </form>
          </div>
        </div>
      </div>
</div>      
    </>
  );
};

export default Upload;
