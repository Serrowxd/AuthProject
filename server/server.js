// Dependencies
const express = require('express');
const mongoose = require('mongoose');
// const helmet = require('helmet');
// const cors = require('cors');
// const morgan = require('morgan');

// Server
const server = express();

// Route Imports
const setupMiddleware = require('./setup/middleware')(server); // takes the code from middleware, passes in server with this you can pass in the commented portion above

// Mongoose
mongoose
  .connect('mongodb://localhost/authProject')
  .then(cnn => {
    console.log('\n=== Connected to MongoDB ===\n');
  })
  .catch(err => {
    console.log('\n=== ERROR connecting to MongoDB ===\n');
  });

// Middleware
// server.use(helmet());
// server.use(express.json());
// server.use(cors());
// This can be commented out because of "setupMiddleware" - it imports all our middleware for us and cleans up the file.

// Route

// Server Code

server.get('/', (req, res) => {
  res.send({ api: 'Henlo (OvO")' });
});

server.listen(5000, () => console.log('\n=== API running on Port 5000 ===\n'));
