const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true, // required for input
    unique: true, // so nobody else can have this username
    lowercase: true, // saves it as lowercase in the database
  },
  password: {
    type: String,
    required: true,
    minlength: 4, // minimum password length
  },
});

userSchema.pre('save', function(next) {
  // next points to the next event
  bcrypt.hash(this.password, 10).then(hash => {
    this.password = hash;

    next();
  });
});

module.exports = mongoose.model('User', userSchema, 'users');
