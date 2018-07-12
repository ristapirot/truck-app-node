var express = require('express');
var app = express();
var db = require('./db');

var UserController = require('./user/UserController');
var VoziloController = require('./vozila/VoziloController');
var ZaposleniController = require('./zaposleni/ZaposleniController');

app.use('/users', UserController);
app.use('/vozila', VoziloController);
app.use('/zaposleni', ZaposleniController);

module.exports = app;