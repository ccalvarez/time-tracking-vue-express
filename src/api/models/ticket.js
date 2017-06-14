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
  status: { type: String, enum: ['Asignada', 'EnProceso', 'Escalada', 'EnEspera', 'Vencida', 'Cierre'], required: false },
  user: { type: Schema.Type.ObjectId, required: true, index: true, ref: 'AppUser' }
});

Ticket = mongoose.model('Ticket', ticketSchema);

module.exports = Ticket;
