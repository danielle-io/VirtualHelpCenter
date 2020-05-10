'use strict';

var mongoose = require('mongoose');
const User = require('./users');
var Schema = mongoose.Schema;

const StaffSchema = User.discriminator('Staff', new Schema({
    classes: [{
        section: Number,
        _id: {
            type: Schema.Types.ObjectId,
            ref: 'Course'
        }
        
    }]
}),
);

module.exports = mongoose.model('Staff');