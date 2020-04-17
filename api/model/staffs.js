var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const StaffSchema = new Schema({
    classes: [{}]
},
{collection: 'Staff'})

module.exports = mongoose.model('Staff', StaffSchema);