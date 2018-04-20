const express = require('express');
const mongoose = require('mongoose');

const server = express();

const setupMiddleware = require('./setup/middleware')(server);
const setupRoutes = require('./setup/routes')(server);
// alternatively we can do this in two steps like so:
// we first import the module
// const setupMiddleware = require('./setup/middleware');
// then execute it passing the server instance
// setupMiddleware(server);

mongoose
  .connect('mongodb://localhost/auth')
  .then(cnn => {
    console.log('\n=== connected to mongo ===\n');
  })
  .catch(err => {
    console.log('\n=== ERROR connecting to mongo ===\n');
  });

server.listen(5000, () => console.log('\n=== API on port 5k ===\n'));
