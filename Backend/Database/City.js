const mongoose = require('mongoose');

const citySchema = mongoose.Schema({
    city : String,
    country : String
})

const city = mongoose.model('citie',citySchema);

module.exports = city;