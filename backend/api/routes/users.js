const express = require("express");
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const keys = require('../../config/keys');
const passport = require('passport');

const { User } = require('../../models/User');
const validateRegisterInput = require('../../validation/register');
const validateLoginInput = require('../../validation/login');
const upload = require("../../services/ImageUpload");
const deleteImage = require("../../services/ImageDelete")

router.get('/current', passport.authenticate('jwt', {session: false}), (req, res) => {
    res.json({
      id: req.user.id,
      username: req.user.username,
      email: req.user.email
    });
  })

router.post('/register', (req, res) => {
  const { errors, isValid } = validateRegisterInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

    // Check to make sure nobody has already registered with a duplicate email
    User.findOne({ email: req.body.email })
      .then(user => {
        if (user) {
          // Throw a 400 error if the email address already exists
          return res.status(400).json({email: "A user has already registered with this email address"})
        } else {
          // Otherwise create a new user
          const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
            address: req.body.address,
            coordinates: req.body.coordinates,
            eventsList: req.body.eventsList,
            profilePic: req.body.profilePic,
            coordinates: req.body.coordinates
          })

          bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(newUser.password, salt, (err, hash) => {
              if (err) throw err;
              newUser.password = hash;
              newUser.save()
                .then(user => res.json(user))
                .catch(err => console.log(err));
            })
          })
        }
      })
  })

  router.post('/login', (req, res) => {
    const { errors, isValid } = validateLoginInput(req.body);

    console.log(errors);

    if (!isValid) {
      return res.status(400).json(errors);
    }

    const email = req.body.email;
    const password = req.body.password;
  
    User.findOne({email})
      .then(user => {
        if (!user) {
          return res.status(404).json({email: 'This user does not exist'});
        }
  
        bcrypt.compare(password, user.password)
        .then(isMatch => {
            if (isMatch) {
            const payload = {id: user.id, username: user.username};

            jwt.sign(
                payload,
                keys.secretOrKey,
                // Tell the key to expire in one hour
                {expiresIn: 3600},
                (err, token) => {
                res.json({
                    success: true,
                    token: 'Bearer ' + token
                });
              });
            } else {
                return res.status(400).json({password: 'Incorrect password'});
            }
        })
      })
  })

  router.post("/profile/image", upload.single("image"), passport.authenticate('jwt', {session: false}), async (req, res) => {
    const currentUser = await User.findById(req.user.id);
    if (currentUser.profilePic){
      let imageUrl = currentUser.profilePic;
      let bucket = imageUrl.split("/")[2].split(".")[0];
      let key = imageUrl.split("/")[3];
      deleteImage(bucket, key);
    }
    currentUser.profilePic = req.file.location
    currentUser.save()
      .then((user) => {
        res.json(user)
      })
      .catch((err) => {
        res.status(400).json(err)
      })
  })
  
  router.delete("/profile/image", passport.authenticate('jwt', {session: false}), async (req, res) => {
    const currentUser = await User.findById(req.user.id);
    let imageUrl = currentUser.profilePic;
    let bucket = imageUrl.split("/")[2].split(".")[0];
    let key = imageUrl.split("/")[3];
  
    deleteImage(bucket, key);
  
    currentUser.profilePic = null;
    currentUser.save()
      .then((user) => {
        res.json(user)
      })
      .catch((err) => {
        res.status(400).json(err)
      })
  })

module.exports = router;