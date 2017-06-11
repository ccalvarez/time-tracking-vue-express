const mongoose = require('mongoose');

let Ticket = null;

const ticketSchema = mongoose.Schema({
  number: { type: Number, required: true, index: true },
  description: { type: String, required: false },
  external: { type: Boolean },
  system: { type: Schema.Type.ObjectId, required: false, ref: 'System' },
  activity: { type: Schema.Type.ObjectId, required: false, ref: 'Activity', index: true },
  createdAt: { type: Date, required: true },
  closedAt: { type: Date, required: false },
  status: { type: String, enum: ['E', 'C'], required: false }, //E=Escalado, C=Cierre... ver otros y default: 'x'
  user: { type: Schema.Type.ObjectId, required: true, index: true, ref: 'User' }
});

Ticket = mongoose.model('Ticket', ticketSchema);

module.exports = Ticket;
