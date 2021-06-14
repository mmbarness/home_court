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
  placeId: {
    type: String,
    required: true
  },
  attendees: {
    
  },
  description: {
    type: String,
    required: true
  },
  postedBy: {
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'users'
  },
  invitationLink: {
    // going to be routed to events/:eventId show page or modal
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


