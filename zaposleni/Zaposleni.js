var mongoose = require('mongoose');
var ZaposleniSchema = new mongoose.Schema({
    ime: String,
    prezime: String,
    jmbg: String,
    telefon: String,
    pozicija: String,
    kartica: Boolean,
    aktivan: Boolean
});
mongoose.model('Zaposleni', ZaposleniSchema);

module.exports = mongoose.model('Zaposleni');