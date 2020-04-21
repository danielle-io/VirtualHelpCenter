var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const userOptions = {
    discriminatorKey: 'usertype',
    collection: 'User'
};

const UserSchema = new Schema({
    name: {
        firstname: String,
        lastname: String
    },
    email: String,
    ucinetid: String,
},
    userOptions
);

module.exports = mongoose.model('User', UserSchema);