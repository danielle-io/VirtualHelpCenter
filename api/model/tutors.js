var mongoose = require('mongoose');
var Schema = mongoose.Schema;

let TutorSchema = null;

const tutor = new Schema({
    email: String,

},
{collection: 'tutor'})

try {
    TutorSchema = mongoose.model('tutor', tutor);
} catch (e) {
    TutorSchema = mongoose.model('tutor');
}

module.exports = TutorSchema;