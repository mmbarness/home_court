const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

const Event = require('../../models/Event');
const validateEventInput = require('../../validation/events');

router.get('/', (req, res) => {
    Event.find()
        .sort({ date: -1 })
        .then(events => res.json(events))
        .catch(err => res.status(404).json({ noeventsfound: 'No events found' }));
});

router.get('/user/:user_id', (req, res) => {
    Event.find({user: req.params.user_id})
        .then(events => res.json(events))
        .catch(err =>
            res.status(404).json({ noeventsfound: 'No events found from that user' }
        )
    );
});

router.get('/:id', (req, res) => {
    Event.findById(req.params.id)
        .then(event => res.json(event))
        .catch(err =>
            res.status(404).json({ noeventfound: 'No event found with that ID' })
        );
});

router.post('/',
// require_logged_in
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
      const { errors, isValid } = validateEventInput(req.body);
  
      if (!isValid) {
        return res.status(400).json(errors);
      }
  
      const newEvent = new Event({
        title: req.body.title,
        sport: req.body.sport,
        placeId: req.body.placeId,
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