'use strict';

var mongoose = require('mongoose'),
Schema = mongoose.Schema;

mongoose.models = {};
mongoose.modelSchemas = {};

const StudentSchema = new Schema({
    classes: [{
        class: {
            dep: String,
            courseNum: Number
        },
        section: Number
    }]
},
{collection: 'Student'});

module.exports = mongoose.model('Student', StudentSchema);