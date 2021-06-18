const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");
const getAsync = require("@awaitjs/express");

const Event = require("../../models/Event");
const { User } = require("../../models/User");
const validateEventInput = require("../../validation/events");

// gets all events whose endDate has not exceeded current time resulting in expiration
router.get("/", (req, res) => {
  Event.find({ endDate: { $gte: new Date() } })
    .sort({ dateCreated: -1 })
    .then((events) => res.json(events))
    .catch((err) => res.status(404).json({ noeventsfound: "No events found" }));
});

// gets all events created by a specific user
router.get("/user/:user_id", (req, res) => {
  Event.find({ postedBy: req.params.user_id, endDate: { $gte: new Date() } })
    .sort({ date: -1 })
    .then((events) => res.json(events))
    .catch((err) =>
      res.status(404).json({ noeventsfound: "No events found from that user" })
    );
});

// add user to event attendee list & add event to user eventList
router.patch("/:event_id/add_attendee", async (req, res) => {
  let userId = req.body.id;
  let username = req.body.username;
  let event = await Event.findById(req.params.event_id);
  let user = await User.findById(userId);
  // debugger;
  Event.findOneAndUpdate(
    { _id: req.params.event_id },
    { $push: { attendees: user } }
  )
    .then((event) =>
      User.findOneAndUpdate({ _id: userId }, { $push: { eventList: event.id } })
    )
    .then((user) => res.json(event))
    .catch((err) =>
      res
        .status(404)
        .json({
          noeventfound: "No event found with that ID - attendee not added",
        })
    );
});

// remove user from event attendee list & remove event from user eventList
router.patch("/:event_id/remove_attendee", async (req, res) => {
  let userId = req.body.user_id;
  // let username = req.body.username
  // debugger;
  let event = await Event.findById(req.params.event_id);
  let user = await User.findById(userId);
  Event.findOneAndUpdate(
    { _id: req.params.event_id },
    { $pull: { attendees: { _id: user.id } } }
  )
    .then((event) =>
      User.findOneAndUpdate({ _id: userId }, { $pull: { eventList: event.id } })
    )
    .then((user) => res.json(event))
    .catch((err) =>
      res
        .status(404)
        .json({
          noeventfound: "No event found with that ID - attendee not added",
        })
    );
});

// router.patch('/:event_id/add_attendee', async (req, res)  => {
//   let event = await Event.findById(req.params.event_id).catch(err =>
//     res.status(404).json({ noeventfound: 'No event found with that ID - attendee not added' }))
//   let userId = req.body.user
//   Event.findOneAndUpdate(
//     {"_id": req.params.event_id},
//     {$push: {'attendees': {userId}}})
//   User.findOneAndUpdate(
//     {"_id": userId},
//     {$push: {'eventList': event._id.toString()}})
//     .then(user => {debugger} )
//     debugger
//   event.then(res.json(event)
//   )
// })

const eventListFinder = async (eventList) => {
  let events = await eventList.map(async (eventIdObj) => {
    let eventId = eventIdObj._id.toString();
    return await Event.findById(eventId).then((event) => event);
  });
  return events;
};

// gets all events user is attending and endDate has not expired
router.get("/user/:user_id/eventList", async (req, res) => {
  let user = await User.find({ _id: req.params.user_id }).then((user) => user);
  let events = await eventListFinder(user[0].eventList).then(
    (events) => events
  );
  Promise.all(events).then((events) => res.json(events));
});

// get a single event
router.get("/:id", (req, res) => {
  Event.findById(req.params.id)
    .then((event) => res.json(event))
    .catch((err) =>
      res.status(404).json({ noeventfound: "No event found with that ID" })
    );
});

// delete a single event
router.delete("/:id", async (req, res) => {
  let event = await Event.findById(req.params.id);
  Event.findByIdAndRemove(req.params.id)
    .exec()
    .then((doc) => {
      if (!doc) {
        return res.status(404).end();
      }
      return res.json(event);
    })
    .catch((err) =>
      res.status(404).json({ noeventfound: "No event found with that ID" })
    );
});

router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    const { errors, isValid } = validateEventInput(req.body);
    // debugger;
    if (!isValid) {
      return res.status(400).json(errors);
    }

    const newEvent = new Event({
      title: req.body.title,
      sport: req.body.sport,
      lat: req.body.lat,
      lng: req.body.lng,
      attendees: [req.user],
      description: req.body.description,
      postedBy: req.user.id,
      startDate: req.body.startDate,
      endDate: req.body.endDate,
    });
    // debugger;
    let event = await newEvent.save();
    let user = await User.findById(req.body.postedBy);
    User.findOneAndUpdate(
      { _id: req.body.postedBy },
      { $push: { eventList: event.id } }
    ).then((user) => {
      res.json(event);
    });
  }
);

module.exports = router;
