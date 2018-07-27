var mongoose = require('mongoose');
var TruckSchema = new mongoose.Schema({
    plate: String,
    make: String,
    model: String,
    vin: String,
    date: Date
});
mongoose.model('Truck', TruckSchema);

module.exports = mongoose.model('Truck');