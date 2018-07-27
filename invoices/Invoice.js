var mongoose = require('mongoose');
var InvoiceSchema = new mongoose.Schema({
    number: String,
    cmr: String,
    fleet: { type: mongoose.Schema.Types.ObjectId, ref: 'Tura' },
    date: Date,
    price: Number
});
mongoose.model('Invoice', InvoiceSchema);

module.exports = mongoose.model('Invoice');