// Import necessary libraries and modules
const twilio = require('twilio');

const makeCall = (to, callUrl) => {
  // Access Twilio credentials from environment variables
  const accountSid = process.env.TWILIO_ACCOUNT_SID;
  const authToken = process.env.TWILIO_AUTH_TOKEN;
  const twilioPhoneNumber = process.env.TWILIO_PHONE_NUMBER;

  // Initialize the Twilio client with your credentials
  const client = twilio(accountSid, authToken);

  // Use the Twilio client to make a call
  return client.calls.create({
    url: callUrl, // URL for call instructions
    to, // Recipient's phone number
    from: twilioPhoneNumber, // Your Twilio phone number
  });
};

module.exports = { makeCall };
