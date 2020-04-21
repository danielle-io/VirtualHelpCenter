var mongoose = require('mongoose');
const User = require('./users');
var Schema = mongoose.Schema;

const StaffSchema = User.discriminator('Staff', new Schema({
    classes: [{}]
}),
);

module.exports = mongoose.model('Staff');