const User = require('../users/User');

module.exports = function(server) {
  //
  server.get('/', (req, res) => {
    res.send({ api: 'Henlo (OvO")' });
  });

  server.post('/api/register', (req, res) => {
    const credentials = req.body;

    // add user to database
    const user = new User(credentials);
    user.save().then(inserted => {
      res.status(201).json(inserted);
    });
  });
};
