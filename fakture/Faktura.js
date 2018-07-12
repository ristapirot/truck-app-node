var mongoose = require('mongoose');
var FakturaSchema = new mongoose.Schema({
    broj: String,
    cmr: String,
    turaId: { type: mongoose.Schema.Types.ObjectId, ref: 'Tura' },
    datum: Date,
    cena: Number,
});
mongoose.model('Faktura', FakturaSchema);

module.exports = mongoose.model('Faktura');