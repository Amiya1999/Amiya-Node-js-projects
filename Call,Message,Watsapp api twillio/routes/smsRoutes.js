// Import necessary libraries and modules
const express = require('express');
const router = express.Router();
const { sendSMSController } = require('../controllers/smsController');

// Define routes
router.post('/sms', sendSMSController);

module.exports = router;
