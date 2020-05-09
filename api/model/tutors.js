var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const TutorSchema = new Schema({
    email: String,

},
{collection: 'tutor'})

module.exports = mongoose.model('tutor', TutorSchema);