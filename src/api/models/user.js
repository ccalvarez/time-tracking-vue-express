const mongoose = require('mongoose');

let User = null;

const userSchema = mongoose.Schema({
  email: { type: String, required: true, unique: true, index: true }
}, { collection: 'appusers' });

User = mongoose.Model('User', userSchema);

module.exports = User;
