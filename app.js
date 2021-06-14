const express = require("express");
const app = express();
const mongoose = require('mongoose');
const passport = require('passport');
const db = require('./backend/config/keys').mongoURI;
const User = require('./models/User');
const users = require('./routes/api/users');
const events = require('./routes/api/events');
const bodyParser = require('body-parser');

app.use(passport.initialize());
require('./backend/config/passport')(passport);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.get("/", (req, res) => res.send("Backend setup working"));

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is running on port ${port}`));

mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch(err => console.log(err));


app.use("/api/users", users);
app.use("/api/events", events);


