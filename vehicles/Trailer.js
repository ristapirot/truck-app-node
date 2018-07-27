var mongoose = require('mongoose');
var TrailerSchema = new mongoose.Schema({
    plate: String,
    make: String,
    model: String,
    vin: String,
    date: Date
});
mongoose.model('Trailer', TrailerSchema);

module.exports = mongoose.model('Trailer');