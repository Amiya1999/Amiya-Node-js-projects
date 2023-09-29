// Import necessary libraries and modules
const twilio = require('twilio');

const sendWhatsAppMessage = (to, message) => {
  // Access Twilio credentials from environment variables
  const accountSid = process.env.TWILIO_ACCOUNT_SID;
  const authToken = process.env.TWILIO_AUTH_TOKEN;
  const twilioWhatsAppNumber = process.env.TWILIO_WHATSAPP_NUMBER;

  // Initialize the Twilio client with your credentials
  const client = twilio(accountSid, authToken);

  // Use the Twilio client to send a WhatsApp message
  return client.messages.create({
    body: message,
    to:`whatsapp:${to}`, // Recipient's phone number
    from: `whatsapp:${twilioWhatsAppNumber}`, // Your Twilio WhatsApp number
  });
};

module.exports = { sendWhatsAppMessage };
