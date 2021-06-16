const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");

const Event = require("../../models/Event");
const { User } = require("../../models/User");
const validateEventInput = require("../../validation/events");

// gets all events whose endDate has not passed the current time
router.get('/', (req, res) => {
    Event.find({endDate: { $gte: new Date() }})
      .sort({ dateCreated: -1 })
      .then(events => res.json(events))
      .catch(err => res.status(404).json({ noeventsfound: 'No events found' }));
});

// gets all events created by the user
router.get('/user/:user_id', (req, res) => {
  Event.find({ postedBy: req.params.user_id, endDate: { $gte: new Date() }})
      .sort({ date: -1 })
      .then(events => res.json(events))
      .catch(err =>
          res.status(404).json({ noeventsfound: 'No events found from that user' }
      )
  );
});

router.patch('/:event_id/add_attendee', (req, res) => {
  let user = req.body.user
  Event.findOneAndUpdate(
    {"_id": req.params.event_id},
    {$push: {'attendees': 
    {user}}
  }).then(event => User.findOneAndUpdate(
    {"_id": req.body.user_id},
    {$push: {'eventList': 
    event.id}
  }))
  .then(event => res.json(event))
  .catch(err =>
    res.status(404).json({ noeventfound: 'No event found with that ID - attendee not added' }))
  })

// gets all events user is attending
router.get('/eventList/user/:user_id/', (req, res) => {
  User.find({ _id: req.params.user_id }).then(user => {
    Event.find({ endDate: { $gte: new Date() }})
      .sort({ date: -1 })
      .then(events => res.json(events))
      .catch(err =>
          res.status(404).json({ noeventsfound: 'No attendance events found from that user' }
      )
  )});
});

router.get('/:id', (req, res) => {
    Event.findById(req.params.id)
      .then(event => res.json(event))
      .catch(err =>
        res.status(404).json({ noeventfound: 'No event found with that ID' }));
});

router.delete("/:id", (req, res) => {
  Event.findByIdAndRemove(req.params.id)
    .exec()
    .then((doc) => {
      if (!doc) {
        return res.status(404).end();
      }
      return res.status(204).end();
    })
    .catch((err) =>
      res.status(404).json({ noeventfound: "No event found with that ID" })
    );
});

router.post('/',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
      const { errors, isValid } = validateEventInput(req.body);

      if (!isValid) {
        return res.status(400).json(errors);
      }
  
      const newEvent = new Event({
        title: req.body.title,
        sport: req.body.sport,
        location: req.body.location,
        lat: req.body.lat,
        long: req.body.long,
        attendees: [req.user],
        description: req.body.description,
        postedBy: req.user.id,
        inviteLink: req.body.inviteLink,
        startDate: req.body.startDate,
        endDate: req.body.endDate
      });
      newEvent.save().then(event => res.json(event));
    }
);

module.exports = router;
