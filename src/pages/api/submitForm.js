import axios from 'axios';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, phone, requirement, website } = req.body;

    try {
      // Replace this with your actual API call to send the form data to the WordPress API or any other backend service
      const response = await axios.post('https://admin.xevy.io/wp-json/wp/v2/wpcf7_contact_form/72', {
        name,
        email,
        phone,
        requirement,
        website,
      }, {
        headers: {
          'Authorization': `Bearer ${process.env.NEXT_PUBLIC_JWT_TOKEN}`,
          'Content-Type': 'application/json',
        },
      });

      // If the request was successful, send a success response back
      res.status(200).json({ message: 'Thank you for reaching out! Your message has been successfully submitted. We will get back to you as soon as possible.' });
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
