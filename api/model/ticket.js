var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const TicketSchema = new mongoose.Schema({
    status: {
        type: String,
        enum: ["open", "closed", "unresolved", "in progress"],
        required: true
    },
    questions: [],
    attachments: [],
    oneLineOverview: {
        type: String,
        max: 100,
        required: true
    },
    longerDescription: {
        type: String,
        max: 2000,
        required: true
    },
    owner: String,
    acceptedBy: String
});

module.exports = ticket = mongoose.model('ticket', TicketSchema);