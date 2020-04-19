'use strict';

var mongoose = require('mongoose'),
Schema = mongoose.Schema;

mongoose.models = {};
mongoose.modelSchemas = {};

const StudentSchema = new Schema({
    classes: [{
        section: Number,
        _id: {
            type: Schema.Types.ObjectId,
            ref: 'Course'
        }
    }]
},
{collection: 'Student'});

module.exports = mongoose.model('Student', StudentSchema);