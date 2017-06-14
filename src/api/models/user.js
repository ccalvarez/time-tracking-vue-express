const mongoose = require('mongoose');

let User = null;

const userSchema = mongoose.Schema({
  email: { type: String, required: true, unique: true, index: true },
  systems: [{ type: Schema.Types.ObjectId, ref: 'System' }],
  activities: [{ type: Schema.Types.ObjectId, ref: 'Activity' }],
  tickets: [{ type: Schema.Types.ObjectId, ref: 'Ticket' }]
}, { collection: 'appusers' });

User = mongoose.Model('AppUser', userSchema);

module.exports = User;
