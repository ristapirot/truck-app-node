var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

var Invoice = require('./Invoice');

router.post('/', function(req, res) {
    Invoice.create({
        number: req.body.number,
        cmr: req.body.cmr,
        fleet: req.body.fleet,
        date: req.body.date,
        price: req.body.price
    }, function(err, user) {
        if (err) return res.status(500).send('There was a problem adding the information to the database.');
        res.status(200).send(user);
    });
});

router.get('/', function(req, res) {
    Invoice.find({}, function(err, user) {
        if (err) return res.status(500).send('There was a problem finding the users.');
        res.status(200).send(user);
    }).populate('fleet');
});

router.get('/:id', function(req, res) {
    Invoice.findById(req.params.id, function(err, user) {
        if (err) return res.status(500).send('There was a problem finding the user.');
        if (!user) return res.status(404).send('Nije pronadjena faktura!');
        res.status(200).send(user);
    }).populate('fleet');
});

router.delete('/:id', function(req, res) {
    Invoice.findByIdAndRemove(req.params.id, function(err, user) {
        if (err) return res.status(500).send('There was a problem deleting a user.');
        res.status(200).send('Invoice ' + user.number + ' is deleted.');
    });
});

router.put('/:id', function(req, res) {
    Invoice.findByIdAndUpdate(req.params.id, req.body, {new: true}, function(err, user) {
        if (err) return res.status(500).send('There was a problem updating the user.');
        res.status(200).send(user);
    });
});


module.exports = router;