var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const CourseSchema = new Schema({
    dept: String,
    courseNum: String
},
{collection: 'Course'})

module.exports = mongoose.model('Course', CourseSchema);