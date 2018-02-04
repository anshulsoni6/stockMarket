const mongoose = require('mongoose');

let company = new mongoose.Schema({
    companySymbol: {
        type: String,
        required: true
    },
    buyPrice: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('company', company);