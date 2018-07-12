var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

var Tura = require('./Tura');

router.post('/', function(req, res) {
    Tura.create({
        utovar: req.body.utovar,
        istovar: req.body.istovar,
        kamionId: req.body.kamionId,
        vozacId: req.body.vozacId,
        datumUtovara: req.body.datumUtovara,
        datumIstovara: req.body.datumIstovara,
        firma: req.body.firma
    }, function(err, user) {
        if (err) return res.status(500).send('There was a problem adding the information to the database.');
        res.status(200).send(user);
    });
});

router.get('/', function(req, res) {
    Tura.find({}, function(err, user) {
        if (err) return res.status(500).send('There was a problem finding the users.');
        res.status(200).send(user);
    }).populate('kamionId vozacId', 'oznaka ime prezime');
});

router.get('/:id', function(req, res) {
    Tura.findById(req.params.id, function(err, user) {
        if (err) return res.status(500).send('There was a problem finding the user.');
        if (!user) return res.status(404).send('Nije pronadjena tura!');
        res.status(200).send(user);
    }).populate('kamionId vozacId', 'oznaka ime prezime');
});

router.delete('/:id', function(req, res) {
    Tura.findByIdAndRemove(req.params.id, function(err, user) {
        if (err) return res.status(500).send('There was a problem deleting a user.');
        res.status(200).send('Tura ' + user.utovar + ' - ' + user.istovar + 'je obrisana iz baze.');
    });
});

router.put('/:id', function(req, res) {
    Tura.findByIdAndUpdate(req.params.id, req.body, {new: true}, function(err, user) {
        if (err) return res.status(500).send('There was a problem updating the user.');
        res.status(200).send(user);
    });
});




module.exports = router;