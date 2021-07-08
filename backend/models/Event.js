const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { User, UserSchema } = require("./User");

const EventSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  sport: {
    type: String,
    enum: ['Basketball', 'Soccer', 'Volleyball', 'Spikeball', 'Football', 'Ping Pong', 'Badminton', 'Baseball', 'Tennis' ]
  },
  lat: {
    type: String
  },
  lng: {
    type: String
  },
  attendees: {
    type: [UserSchema],
  },
  description: {
    type: String,
    required: true,
  },
  postedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
  },
  dateCreated: {
    type: Date,
    default: Date.now,
  },
  startDate: {
    type: Date,
  },
  endDate: {
    type: Date,
  },
});

module.exports = Event = mongoose.model("event", EventSchema);
