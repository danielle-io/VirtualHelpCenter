
// TO DO: figure out where to put this for MDL to run better
{/* <link rel="stylesheet" href="//fonts.googleapis.com/css?family=Roboto:400,500,700,400italic|Material+Icons"></link> */}

require('dotenv').config()

const express = require('express');
const morgan = require("morgan");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const Ably = require('ably');

// Create Ably client 
//const restClient = new Ably.Rest({ key: ''});

// Create express instance
const app = express();

// app.post('/auth', (req, res) => {
//   console.log(req.body)
//   const clientId = req.body.name;

//   restClient.auth.createTokenRequest({ clientId, }, (err, tokenRequest) => {
//     console.log(`Authorization completed for client "${clientId}"`);
//     if(err) {
//       res.status(500);
//       res.send(err);
//     }
//     else {
//       res.send(tokenRequest);
//     }
//   });
// });

// Configure database and mongoose
mongoose.set("useCreateIndex", true);
mongoose
  .connect(process.env.ATLAS_MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => {
    console.log("Database is connected");
  })
  .catch(err => {
    console.log({ database_error: err });
  });

// Registering cors
app.use(cors());

// Configure body parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Configure morgan
app.use(morgan("dev"));

// Require API routes
const users = require('./controller/users');
const students = require('./controller/students');
const staffs = require('./controller/staffs');
const courses = require('./controller/courses');
const tickets = require('./controller/tickets');
const tutors = require('./controller/tutors');


// Import API Routes
app.use(users);
app.use(students);
app.use(courses);
app.use(staffs);
app.use(tickets);
app.use(tutors);


// Export the server middleware
module.exports = {
  path: '/api',
  handler: app
}
