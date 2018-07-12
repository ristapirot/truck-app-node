var mongoose = require('mongoose');
var VoziloSchema = new mongoose.Schema({
    oznaka: String,
    marka: String,
    model: String,
    sasija: String,
    registracija: String,
    prikljucno: Boolean
});
mongoose.model('Vozilo', VoziloSchema);

module.exports = mongoose.model('Vozilo');