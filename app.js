var express = require('express');
var app = express();
var db = require('./db');

var UserController = require('./user/UserController');
var VoziloController = require('./vozila/VoziloController');
var ZaposleniController = require('./zaposleni/ZaposleniController');
var TuraController = require('./ture/TuraController');
var FakturaController = require('./fakture/FakturaController');

app.use('/users', UserController);
app.use('/vozila', VoziloController);
app.use('/zaposleni', ZaposleniController);
app.use('/ture', TuraController);
app.use('/fakture', FakturaController);

module.exports = app;