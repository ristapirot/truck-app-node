var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

var Faktura = require('./Faktura');

router.post('/', function(req, res) {
    Faktura.create({
        broj: req.body.broj,
        cmr: req.body.cmr,
        turaId: req.body.turaId,
        datum: req.body.datum,
        cena: req.body.cena
    }, function(err, user) {
        if (err) return res.status(500).send('There was a problem adding the information to the database.');
        res.status(200).send(user);
    });
});

router.get('/', function(req, res) {
    Faktura.find({}, function(err, user) {
        if (err) return res.status(500).send('There was a problem finding the users.');
        res.status(200).send(user);
    }).populate('turaId');
});

router.get('/:id', function(req, res) {
    Faktura.findById(req.params.id, function(err, user) {
        if (err) return res.status(500).send('There was a problem finding the user.');
        if (!user) return res.status(404).send('Nije pronadjena faktura!');
        res.status(200).send(user);
    }).populate('turaId');
});

router.delete('/:id', function(req, res) {
    Faktura.findByIdAndRemove(req.params.id, function(err, user) {
        if (err) return res.status(500).send('There was a problem deleting a user.');
        res.status(200).send('Faktura ' + user.broj + 'je obrisana iz baze.');
    });
});

router.put('/:id', function(req, res) {
    Faktura.findByIdAndUpdate(req.params.id, req.body, {new: true}, function(err, user) {
        if (err) return res.status(500).send('There was a problem updating the user.');
        res.status(200).send(user);
    });
});




module.exports = router;