
// TO DO: figure out where to put this for MDL to run better
{/* <link rel="stylesheet" href="//fonts.googleapis.com/css?family=Roboto:400,500,700,400italic|Material+Icons"></link> */}

require('dotenv').config()

const express = require('express');
const morgan = require("morgan");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

// Create express instance
const app = express();

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
const users = require('./routes/demo/users');

// Import API Routes
app.use(users)

// Export the server middleware
module.exports = {
  path: '/api',
  handler: app
}
