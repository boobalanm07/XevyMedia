import axios from 'axios';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { formData } = req.body;

        try {
            const response = await axios.post('https://xevy.io/wp-json/wp/v2/wpcf7_contact_form/73', {
                fields: formData,
            });

            if (response.status === 200) {
                return res.status(200).json({ message: 'Message sent successfully' });
            } else {
                return res.status(500).json({ message: 'Error sending message' });
            }
        } catch (error) {
            console.error('Error submitting form', error);
            return res.status(500).json({ message: 'Error sending message' });
        }
    } else {
        res.status(405).json({ message: 'Method Not Allowed' });
    }
}
