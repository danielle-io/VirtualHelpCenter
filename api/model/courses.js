var mongoose = require('mongoose');
var Schema = mongoose.Schema;

let CourseSchema = null;

const course = new Schema({
    dep: String,
    courseNum: String
},
{collection: 'Course'})

try {
    CourseSchema = mongoose.model('Course', course);
} catch (e) {
    CourseSchema = mongoose.model('Course');
}

module.exports = CourseSchema;