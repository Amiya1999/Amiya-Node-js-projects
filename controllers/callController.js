// Import necessary libraries and modules
const { makeCall } = require('../models/callModel');

const makeCallController = async (req, res) => {
  const { to, callUrl } = req.body;

  try {
    await makeCall(to, callUrl);
    res.status(200).json({ message: 'Call initiated successfully' });
  } catch (error) {
    console.error('Error making call:', error);
    res.status(500).json({ message: 'An error occurred on the server' });
  }
};

module.exports = { makeCallController };
