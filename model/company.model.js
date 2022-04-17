/**
 * Module dependencies.
 */
const mongoose = require('mongoose');

// mongoose plugin dependencie
const Schema = mongoose.Schema;

const CompanySchema = new Schema({

    company_name: {
        type: String,
    },
    value: {
        type: String,
    }

}, { timestamps: true });

module.exports = mongoose.model('Company', CompanySchema);