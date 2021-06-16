const express = require("express");
const app = express();
const mongoose = require('mongoose');
const passport = require('passport');
const db = require('./backend/config/keys').mongoURI;
const users = require('./backend/api/routes/users');
const events = require('./backend/api/routes/events');
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

const path = require('path');
if (process.env.NODE_ENV === 'production') {
  app.use(path.join(__dirname, 'frontend/build'));
  app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'frontend', 'build','/index.html'));
  })
}

app.use("/api/users", users);
app.use("/api/events", events);




