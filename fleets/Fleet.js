var mongoose = require('mongoose');
var FleetSchema = new mongoose.Schema({
    start: String,
    end: String,
    truck: { type: mongoose.Schema.Types.ObjectId, ref: 'Truck' },
    driver: { type: mongoose.Schema.Types.ObjectId, ref: 'Employee' },
    startDate: Date,
    endDate: Date,
    company: String
});
mongoose.model('Fleet', FleetSchema);

module.exports = mongoose.model('Fleet');