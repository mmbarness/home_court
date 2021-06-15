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
    location: {
      type: String,
      // required: true
    },
    // friendsList: [{
    //   type: Schema.ObjectId,
    //   ref: "users"
    // }],
    profilePic: {
      // AWS url link
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

