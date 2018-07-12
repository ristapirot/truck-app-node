var mongoose = require('mongoose');
var TuraSchema = new mongoose.Schema({
    utovar: String,
    istovar: String,
    kamionId: { type: mongoose.Schema.Types.ObjectId, ref: 'Vozilo' },
    vozacId: { type: mongoose.Schema.Types.ObjectId, ref: 'Zaposleni' },
    datumUtovara: Date,
    datumIstovara: Date,
    firma: String,
});
mongoose.model('Tura', TuraSchema);

module.exports = mongoose.model('Tura');