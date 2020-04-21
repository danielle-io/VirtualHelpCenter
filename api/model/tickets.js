// 'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

mongoose.models = {};
mongoose.modelSchemas = {};

var ticketSchema = new Schema({
  status:  {
    type: String,
    enum: ['Open', 'Closed', 'In Progress', 'Unresolved']
  },
  owner: {
    _id:{
      type: Schema.Types.ObjectId,
      ref: 'Student'
    },
  }, 
  course: {
    _id:{
      type: Schema.Types.ObjectId,
      ref: 'Course'
    },
  },
  codeSnippet: String,
  questions:   [String],
  attachments: [String],
  oneLineOverview: String,
  longerDescription: String,
  acceptedBy: String,
  
},
{timestamps: true},
{ collection: 'Ticket' });

module.exports = mongoose.model('Ticket', ticketSchema);
