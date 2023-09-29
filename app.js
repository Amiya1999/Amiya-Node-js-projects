const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');
const dotenv = require('dotenv');
dotenv.config();

// Middleware
app.use(cors());
app.use(express.json());

// Middleware to serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

// Routes
const smsRoutes = require('./routes/smsRoutes');
const callRoutes = require('./routes/callRoutes');
const whatsappRoutes = require('./routes/whatsappRoutes');

app.use('/', smsRoutes);
app.use('/', callRoutes);
app.use('/', whatsappRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
