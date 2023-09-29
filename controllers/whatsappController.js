// Import necessary libraries and modules
const { sendWhatsAppMessage } = require('../models/whatsappModel');

const sendWhatsAppController = async (req, res) => {
  const { to, message } = req.body;

  try {
    await sendWhatsAppMessage(to, message);
    res.status(200).json({ message: 'WhatsApp message sent successfully' });
  } catch (error) {
    console.error('Error sending WhatsApp message:', error);
    res.status(500).json({ message: 'An error occurred on the server' });
  }
};

module.exports = { sendWhatsAppController };
