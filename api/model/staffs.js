var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const StaffSchema = new Schema({
    classes: [{
        class: {
            dep: String,
            courseNum: Number
        },
        section: Number
    }]
},
{collection: 'Staff'})

module.exports = mongoose.model('Staff', StaffSchema);