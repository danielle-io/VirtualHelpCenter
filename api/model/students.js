var mongoose = require('mongoose');
const User = mongoose.model('User');
var Schema = mongoose.Schema;

let Student = null;

try {
    Student = User.discriminator('Student', new Schema({
        classes: [{
            section: Number,
            _id: {
                type: Schema.Types.ObjectId,
                ref: 'Course'
            }
        }]
    }),
    );
} catch (e) {
    Student = mongoose.model('Student');
}

module.exports = Student;