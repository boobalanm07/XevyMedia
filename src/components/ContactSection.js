import { useState } from 'react';
import axios from 'axios'; // Import axios for client-side API calls

const ContactSection = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: '',
    });
    const [formStatus, setFormStatus] = useState(null);  // To track form submission status
    const [errors, setErrors] = useState({}); // Track errors

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formData.name) {
            newErrors.name = "Name is required.";
        }
        if (!formData.email) {
            newErrors.email = "Email is required.";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Email address is invalid.";
        }
        if (!formData.phone) {
            newErrors.phone = "Phone number is required.";
        }
        if (!formData.message) {
            newErrors.message = "Message is required.";
        }
        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validate form before submitting
        if (!validateForm()) {
            setFormStatus('Please fill out all required fields.');
            return;
        }

        try {
            const response = await axios.post('/api/contact', { formData }); // Send data to Next.js API route
            if (response.status === 200) {
                setFormStatus('Message sent successfully!');
                // Reset the form data after successful submission
                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    company: '',
                    message: '',
                });
            } else {
                setFormStatus('Error sending message. Please try again.');
            }
        } catch (error) {
            console.error('Error submitting form', error);
            setFormStatus('Error sending message. Please try again.');
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

                    {/* Contact Form */}
                    <div className="col-md-6">
                        <form onSubmit={handleSubmit} className="wpcf7">
                            <div className="form-group">
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    className="form-control"
                                    placeholder="Name"
                                    value={formData.name}
                                    onChange={handleChange}
                                />
                                {errors.name && <small className="text-danger">{errors.name}</small>}
                            </div>
                            <div className="form-group">
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    className="form-control"
                                    placeholder="Email Address"
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                                {errors.email && <small className="text-danger">{errors.email}</small>}
                            </div>
                            <div className="form-group">
                                <input
                                    type="tel"
                                    name="phone"
                                    id="phone"
                                    className="form-control"
                                    placeholder="Phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                />
                                {errors.phone && <small className="text-danger">{errors.phone}</small>}
                            </div>
                            <div className="form-group">
                                <input
                                    type="text"
                                    name="company"
                                    id="company"
                                    className="form-control"
                                    placeholder="Company Name"
                                    value={formData.company}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="form-group">
                                <textarea
                                    name="message"
                                    id="message"
                                    className="form-control"
                                    placeholder="Message"
                                    value={formData.message}
                                    onChange={handleChange}
                                />
                                {errors.message && <small className="text-danger">{errors.message}</small>}
                            </div>
                            <button type="submit" className="btn btn-primary">
                                Send Message
                            </button>
                        </form>
                        {formStatus && <p>{formStatus}</p>}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
