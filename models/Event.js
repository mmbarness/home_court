const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EventSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  sport: {
    type: String,
    required: true
  },
  place_id: {
    type: String,
    required: true
  },
  attendees: {
    
  },
  description: {
    type: String,
    required: true
  },
  host: {

  },
  invitation_link: {

  },
  start_date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Event = mongoose.model('event', EventSchema);


