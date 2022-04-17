/**
 * Module dependencies.
 */
const mongoose = require('mongoose');

// mongoose plugin dependencie
const Schema = mongoose.Schema;

const TaskSchema = new Schema({

    title: {
        type: String,
    },
    description: {
        type: String,
    },


}, { timestamps: true });

module.exports = mongoose.model('Task', TaskSchema);