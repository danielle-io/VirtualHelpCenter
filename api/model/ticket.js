var Schema = mongoose.Schema;

var TicketSchema = new Schema({
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
    owner: Schema.Types.ObjectId,
    acceptedBy: Schema.Types.ObjectId
});

var TicketModel = mongoose.model('TicketModel', TicketSchema);