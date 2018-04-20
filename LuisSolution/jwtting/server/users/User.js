const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    // normalize all users to lowercase
    // helps later when making queries
  },
  password: {
    type: String,
    required: true,
    minlength: 4, // make this at least 10 or 12
    // in a production application
  },
  race: {
    type: String,
    required: true,
  },
});

userSchema.pre('save', function(next) {
  // const user = this; // scope is the document
  // you need to do this if the function passed to
  // then is a regular function, not an arrow
  // function to make sure the binding of this
  // is correct. See code below.
  // bcrypt.hash(this.password, 10).then(function(hash) {

  bcrypt.hash(this.password, 10).then(hash => {
    // different scope if using function(hash)
    // same document scope if using arrow function
    this.password = hash;

    next();
  });
});

userSchema.methods.verifyPassword = function(guess, callback) {
  bcrypt.compare(guess, this.password, function(err, isValid) {
    if (err) {
      return callback(err);
    }

    // here there was no error
    callback(null, isValid);
  });
};

module.exports = mongoose.model('User', userSchema, 'users');
