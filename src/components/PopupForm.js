import { useState, useEffect } from 'react';
import axios from 'axios';
import styles from '../styles/Popup.module.css';
import Script from 'next/script';
import Image from 'next/image'; // Importing the Image component from Next.js

function PopupForm() {
  const [showPopup, setShowPopup] = useState(false); // State for showing the popup
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    requirement: '',
    website: '',
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('/api/submitForm', formData);
      setStatus('Form submitted successfully!');

      // Reset the form fields after successful submission
      setFormData({
        name: '',
        email: '',
        phone: '',
        requirement: '',
        website: '',
      });

      // Hide the success message after 3 seconds
      setTimeout(() => {
        setStatus('');
      }, 3000); // 3000 milliseconds = 3 seconds
    } catch (error) {
      setStatus('There was an error submitting your form');
      console.error('Form submission error:', error);
    }
  };

  // Toggle popup visibility
  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  useEffect(() => {
    // Dynamically load the Google Calendar script (not needed anymore, can remove this)
    const loadGoogleCalendarScript = () => {
      if (document.querySelector('script[src="https://calendar.google.com/calendar/scheduling-button-script.js"]')) {
        return;
      }

      const script = document.createElement('script');
      script.src = 'https://calendar.google.com/calendar/scheduling-button-script.js';
      script.async = true;
      document.body.appendChild(script);
      script.onload = () => {
        if (window.calendar) {
          const existingButton = document.querySelector('.qxCTlb');
          if (!existingButton) {
            window.calendar.schedulingButton.load({
              url: 'https://calendar.app.google/cHB7ncW9MyGA1oD98',
              color: '#039BE5',
              label: 'Schedule a Meeting',
              target: document.getElementById('schedule-call').parentNode,
            });
            setTimeout(() => {
              const googleButton = document.querySelector('.qxCTlb');
              if (googleButton) {
                googleButton.innerHTML = '<span>Schedule a Meeting</span> <i className="fa fa-calendar"></i>';
                googleButton.classList.add('left');
              }
            }, 500);
          }
        }
      };
    };

    loadGoogleCalendarScript();

    return () => {
      const script = document.querySelector('script[src="https://calendar.google.com/calendar/scheduling-button-script.js"]');
      if (script) {
        script.remove();
      }
    };
  }, [showPopup]); // Add showPopup to the dependency array

  return (
    <>
      <a href="tel:+447919669718" className="mobile-call-only">
        <i className="fa fa-phone icon"></i>
      </a>

      <div className="center-buttons">
        {/* Remove the "Schedule a Meeting" button */}
        <button id="schedule-call" className="circle-button right" onClick={togglePopup}>
          <span className="button-text">Get a Call Back</span>
        </button>
      </div>

      {showPopup && (
        <div
          id="contact-form-popup"
          className={`contact-modal ${showPopup ? 'show' : ''}`}
        >
          <div className="contact-mobile">
            <button
              id="close-popup"
              className="close-btn"
              onClick={togglePopup}
            >
              &times;
            </button>
            <div className="pop-form">
              <h3>Get Call back from</h3>
              <Image 
                src="/img/logo.png" 
                alt="Logo" 
                height={60} 
                width={200} // Define width and height for better optimization
              />
              <form onSubmit={handleSubmit} className="wpcf7">
                <div className="form-group">
                  <label htmlFor="user_name">Name</label>
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="user_email">Email</label>
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="user_phone">Mobile Number</label>
                  <input
                    type="tel"
                    name="phone"
                    className="form-control"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="user_requirement">Requirement</label>
                  <textarea
                    name="requirement"
                    className="form-control"
                    value={formData.requirement}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="user_website">Website</label>
                  <input
                    type="url"
                    name="website"
                    className="form-control"
                    value={formData.website}
                    onChange={handleChange}
                  />
                </div>
                <button type="submit" className="btn btn-primary">Send Message</button>
              </form>
              {status && <p>{status}</p>}
            </div>
            <div className="pop-img">
              <Image 
                src="/img/others/splash-image.png" 
                alt="An astronaut floating in space, symbolizing digital journeys" 
                className="astronaut-popup img-fluid" 
                height={500} // Add height and width for better optimization
                width={500} 
              />
            </div>
          </div>
        </div>
      )}

      {/* No need for Google Calendar script anymore */}
    </>
  );
}

export default PopupForm;
