// Import necessary libraries and modules
const express = require('express');
const router = express.Router();
const { makeCallController } = require('../controllers/callController');

// Define routes
router.post('/call', makeCallController);

module.exports = router;
