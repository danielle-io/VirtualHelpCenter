var mongoose = require('mongoose');
let User = mongoose.model('User');
var Schema = mongoose.Schema;

let Staff = null;

try {
    Staff = User.discriminator('Staff', new Schema({
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
    Staff = mongoose.model('Staff');
}

module.exports = Staff;