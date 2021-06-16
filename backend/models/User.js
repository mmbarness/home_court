const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    },
    address: { 
      type: String,
    },
    coordinates: {
      lat: {type: mongoose.Decimal128,},
      long: {type: mongoose.Decimal128}
    },
    eventList: [{
      type: Schema.ObjectId,
      ref: "event"
    }],
    // AWS url link
    profilePic: {
      type: String 
    }
  }, {
    timestamps: true
  })

const User = mongoose.model('users', UserSchema);

module.exports = {
  User, 
  UserSchema
};

