var mongoose = require('mongoose');
var Schema = mongoose.Schema;

let UserSchema = null;

const userOptions = {
    discriminatorKey: 'userType',
    collection: 'User'
};

const user = new Schema({
    name: {
        firstName: String,
        lastName: String
    },
    email: String,
    ucinetid: String,
    deleted: Number,
},
    userOptions
);

try {
    UserSchema = mongoose.model('User', user);
} catch (e) {
    UserSchema = mongoose.model('User');
}

module.exports = UserSchema;