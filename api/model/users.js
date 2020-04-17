var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: {
        firstname: String,
        lastname: String
    },
    email: String,
    ucinetid: String,
},
{ collection: 'User' });

module.exports = mongoose.model('User', UserSchema);