// Dependencies
const express = require('express');
const helmet = require('helmet');
const mongoose = require('mongoose');
const cors = require('cors');

// Server
const server = express();

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
server.use(helmet());
server.use(express.json());
server.use(cors());

// Route

// Server Code

server.get('/', (req, res) => {
  res.send({ api: 'Henlo (OvO")' });
});

server.listen(5000, () => console.log('\n=== API running on Port 5000 ===\n'));
