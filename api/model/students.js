var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const StudentSchema = new Schema({
    classes: [{
        class: {
            dep: String,
            courseNum: Number
        },
        section: Number
    }]
},
{collection: 'Student'});

module.exports = mongoose.model('Student', StudentSchema);