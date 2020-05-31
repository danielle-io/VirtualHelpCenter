var mongoose = require("mongoose");
var Schema = mongoose.Schema;

let TicketSchema = null;

var ticket = new Schema(
  {
    status: {
      type: String,
      enum: ["Open", "Closed", "In Progress", "Pending", "Unresolved", "Void"],
    },
    owner: {
      _id: {
        type: Schema.Types.ObjectId,
        ref: "Student",
      },
    },
    course: {
      _id: {
        type: Schema.Types.ObjectId,
        ref: "Course",
      },
    },
    rating: {
      type: Number,
      enum: [ 0, 1, 2, 3, 4, 5],
    },
    ratingExplanation: String,
    wasRated: Number,
    codeSnippet: String,
    oneLineOverview: String,
    longerDescription: String,
    attachments: [Object],
    acceptedBy: {
      _id: {
        type: Schema.Types.ObjectId,
        ref: "Staff",
      },
    },
  },
  { timestamps: true },
  { collection: "Ticket" }
);

try {
  TicketSchema = mongoose.model('Ticket', ticket);
} catch (e) {
  TicketSchema = mongoose.model('Ticket');
}

module.exports = TicketSchema;
