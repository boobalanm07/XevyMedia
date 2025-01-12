// /components/Contact.js

import { useState } from 'react';
import axios from 'axios';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
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
      const response = await axios.post('/api/contact', formData);
      setStatus('Form submitted successfully!');

      // Reset the form fields after successful submission
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: '',
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

  return (
    <section className="contact-section">
      <div className="container">
        <div className="row">
          <div className="col-md-6 contact-info">
            <h4>Let us know if you want to talk about your next PPC ads project!</h4>
            <p>If you have any questions, feel free to reach out to us. We're here to help you with any inquiries you may have.</p>
            <div className="contact-box">
              <div className="icon-box">
                <i className="fa fa-envelope"></i>
              </div>
              <div className="contact-text">
                Email: <span><a href="mailto:info@xevy.io">info@xevy.io</a></span>
              </div>
            </div>
            <div className="contact-box">
              <div className="icon-box">
                <i className="fa fa-phone"></i>
              </div>
              <div className="contact-text">
                Phone: <span><a href="tel:+447919669718">+44 7919669718</a></span>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <form onSubmit={handleSubmit} className="wpcf7">
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Name"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="tel"
                  name="phone"
                  className="form-control"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="company"
                  className="form-control"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Company"
                />
              </div>
              <div className="form-group">
                <textarea
                  name="message"
                  className="form-control"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Message"
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary">Send Message</button>
            </form>
            {status && <p>{status}</p>}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
