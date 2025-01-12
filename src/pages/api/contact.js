// /pages/api/contact.js

import axios from 'axios';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, phone, company, message } = req.body;

    try {
      // Replace this with your actual API call to send the form data to the WordPress API or any other backend service
      const response = await axios.post('https://admin.xevy.io/wp-json/wp/v2/wpcf7_contact_form/73', {
        name,
        email,
        phone,
        company,
        message,
      }, {
        headers: {
          'Authorization': `Bearer ${process.env.NEXT_PUBLIC_JWT_TOKEN}`,
          'Content-Type': 'application/json',
        },
      });

      // If the request was successful, send a success response back
      res.status(200).json({ message: 'Thank you! Your message has been sent. We’ll get back to you soon.' });
    } catch (error) {
      // Handle errors from the external API
      console.error('Error submitting form:', error);
      res.status(500).json({ message: 'There was an error submitting the form' });
    }
  } else {
    // Only allow POST requests
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
