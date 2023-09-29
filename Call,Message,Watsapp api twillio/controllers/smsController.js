// Import necessary libraries and modules
const { sendSMS } = require('../models/smsModel');

const sendSMSController = async (req, res) => {
  const { to, message } = req.body;

  try {
    await sendSMS(to, message);
    res.status(200).json({ message: 'SMS sent successfully' });
  } catch (error) {
    console.error('Error sending SMS:', error);
    res.status(500).json({ message: 'An error occurred on the server' });
  }
};

module.exports = { sendSMSController };
