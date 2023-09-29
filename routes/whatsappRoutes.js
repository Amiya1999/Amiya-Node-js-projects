// Import necessary libraries and modules
const express = require('express');
const router = express.Router();
const { sendWhatsAppController } = require('../controllers/whatsappController');

// Define routes
router.post('/whatsapp', sendWhatsAppController);

module.exports = router;
