const mongoose = require('mongoose');

let Activity = null;

const activitySchema = mongoose.Schema({
  description: { type: String, required: true, unique: true },
  logTimes: { type: Array }, // { start: datetime, end: datetime }
  delayReason: { type: String },
  comments: { type: String },
  finished: { type: Boolean, required: true, default: false },
  system: { type: Schema.Types.ObjectId, required: false, ref: 'System' },
  user: { type: Schema.Type.ObjectId, required: true, index: true, ref: 'AppUser' }
}, { collection: 'activities' });

Activity = mongoose.model('Activity', activitySchema);

module.exports = Activity;
