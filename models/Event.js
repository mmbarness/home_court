const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { User, UserSchema } = require('./User');


const EventSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  sport: {
    type: String,
    required: true
  },
  placeId: {
    type: Number,
    required: true
  },
  attendees: {
    type: [UserSchema]
  },
  description: {
    type: String,
    required: true
  },
  postedBy: {
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'users'
  },
  // store a path to event/:event_id modal
  inviteLink: {
    type: String,
    required: true
  },
  dateCreated: {
    type: Date,
    default: Date.now
  },
  startDate: {
    type: Date,
  },
  endDate: {
    type: Date,
  }
});

module.exports = Event = mongoose.model('event', EventSchema);


