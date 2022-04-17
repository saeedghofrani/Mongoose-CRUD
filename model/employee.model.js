/**
 * Module dependencies.
 */
const mongoose = require('mongoose');

// mongoose plugin dependencie
const Schema = mongoose.Schema;

const EmployeeSchema = new Schema({

    first_name: {
        type: String,
    },
    last_name: {
        type: String,
    },
    password: {
        type: String,
        select: false,
    },
    username: {
        type: String,
    },

}, { timestamps: true });

module.exports = mongoose.model('Employee', EmployeeSchema);