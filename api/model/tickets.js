var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ticketSchema = new Schema({
  status:  {
    type: String,
    enum: ['Open', 'Closed', 'In Progress', 'Unresolved']
  },
  codeSnippet: String,
  questions:   [String],
  attachments: [String],
  oneLineOverview: String,
  longerDescription: String,
  owner: String,
  acceptedBy: String,
  timeSubmitted: String,
},
{ collection: 'Ticket' });

module.exports = mongoose.model('Ticket', ticketSchema);
