// Import necessary libraries and modules
const twilio = require('twilio');

const sendSMS = (to, message) => {
  // Access Twilio credentials from environment variables
  const accountSid = process.env.TWILIO_ACCOUNT_SID;
  const authToken = process.env.TWILIO_AUTH_TOKEN;
  const twilioPhoneNumber = process.env.TWILIO_PHONE_NUMBER;

  // Initialize the Twilio client with your credentials
  const client = twilio(accountSid, authToken);

  // Use the Twilio client to send an SMS
  return client.messages.create({
    body: message,
    to, // Recipient's phone number
    from: twilioPhoneNumber, // Your Twilio phone number
  });
};

module.exports = { sendSMS };
