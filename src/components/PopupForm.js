import { useState, useEffect } from 'react';
import axios from 'axios';
import styles from '../styles/Popup.module.css'
import Script from 'next/script';

function PopupForm() {
  const [showPopup, setShowPopup] = useState(false); // State for showing the popup
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    user_phone: '',
    user_requirement: '',
    user_website: ''
  });
  const [showSuccessPopup, setShowSuccessPopup] = useState(false); // State for showing success message

  // Handle input change to update form data
  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const response = await axios.post('/api/submitForm', formData);
        console.log('Form submitted successfully:', response.data);

        // Show the success popup
        setShowSuccessPopup(true);

        setShowPopup(false);  // Close the main popup after successful submission

        // Clear form fields
        setFormData({
            user_name: '',
            user_email: '',
            user_phone: '',
            user_requirement: '',
            user_website: ''
        });

        // Hide the success popup after 5 seconds
        setTimeout(() => {
            setShowSuccessPopup(false);
        }, 5000);
    } catch (err) {
        console.error('Form submission error:', err);
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
          key={showPopup} // Add a unique key to force re-render
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
              <img src="/img/logo.png" alt="Logo" style={{ height: '60px' }} />
              <form onSubmit={handleSubmit}>
                <label htmlFor="user_name">Name</label>
                <input
                  type="text"
                  id="user_name"
                  name="user_name"
                  value={formData.user_name}
                  onChange={handleInputChange}
                  required
                />
                <label htmlFor="user_email">Email</label>
                <input
                  type="email"
                  id="user_email"
                  name="user_email"
                  value={formData.user_email}
                  onChange={handleInputChange}
                  required
                />
                <label htmlFor="user_phone">Mobile Number</label>
                <input
                  type="tel"
                  id="user_phone"
                  name="user_phone"
                  value={formData.user_phone}
                  onChange={handleInputChange}
                  required
                />
                <label htmlFor="user_requirement">Requirement</label>
                <textarea
                  id="user_requirement"
                  name="user_requirement"
                  value={formData.user_requirement}
                  onChange={handleInputChange}
                  required
                />
                <label htmlFor="user_website">Website</label>
                <input
                  type="url"
                  id="user_website"
                  name="user_website"
                  value={formData.user_website}
                  onChange={handleInputChange}
                />
                <button type="submit" className="btn">Submit</button>
              </form>
            </div>
            <div className="pop-img">
              <img 
                src="/img/others/splash-image.png" 
                alt="An astronaut floating in space, symbolizing digital journeys" 
                className="astronaut-popup img-fluid" 
              />
            </div>
          </div>
        </div>
      )}

      {showSuccessPopup && (
        <div className="success-popup">
          <div className="popup-content">
            <p>Your request has been sent!</p>
          </div>
        </div>
      )}

      {/* No need for Google Calendar script anymore */}
    </>
  );
}

export default PopupForm;
