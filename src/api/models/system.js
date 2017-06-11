const mongoose = require('mongoose');

let System = null;

const systemSchema = mongoose.Schema({
  name: { type: String, required: true, unique: true, index: true },
  user: { type: Schema.Type.ObjectId, required: true, index: true, ref: 'User' }
});

System = mongoose.model('System', systemSchema);

module.exports = System;
