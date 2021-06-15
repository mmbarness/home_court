const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");

const Event = require("../../models/Event");
const validateEventInput = require("../../validation/events");

router.get('/', (req, res) => {
    Event.find({endDate: { $lt: new Date() }})
      .sort({ dateCreated: -1 })
      .then(events => res.json(events))
      .catch(err => res.status(404).json({ noeventsfound: 'No events found' }));
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
        lng: req.body.lng,
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
