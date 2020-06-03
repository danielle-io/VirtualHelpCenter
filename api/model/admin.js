var mongoose = require('mongoose');
let User = mongoose.model('User');
var Schema = mongoose.Schema;

let Admin = null;

try {
    Staff = User.discriminator('Admin', new Schema({
    }),
    );
} catch (e) {
    Admin = mongoose.model('Admin');
}

module.exports = Admin;