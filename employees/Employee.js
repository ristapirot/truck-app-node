var mongoose = require('mongoose');
var EmployeeSchema = new mongoose.Schema({
    name: String,
    surname: String,
    personId: String,
    telephone: String,
    workplace: String,
    card: Boolean,
    active: Boolean
});
mongoose.model('Employee', EmployeeSchema);

module.exports = mongoose.model('Employee');