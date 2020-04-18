'use strict';

var mongoose = require('mongoose'),
Schema = mongoose.Schema;

mongoose.models = {};
mongoose.modelSchemas = {};

const StudentSchema = new Schema({
    classes: [{
        class: {},
        section: Object
    }]
},
{collection: 'Student'});

module.exports = mongoose.model('Student', StudentSchema);