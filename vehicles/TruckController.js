var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var checkAuth = require('../middleware/check-auth')

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

var Truck = require('./Truck');

router.post('/', checkAuth, function(req, res, next) {
    Truck.create({
        plate: req.body.plate,
        make: req.body.make,
        model: req.body.model,
        vin: req.body.vin,
        date: req.body.date
    }, function(err, user) {
        if (err) return res.status(500).send('There was a problem adding the information to the database.');
        res.status(200).send(user);
    });
});

router.get('/', checkAuth, function(req, res) {
    Truck.find({}, function(err, user) {
        if (err) return res.status(500).send('There was a problem finding the users.');
        res.status(200).send(user);
    });
});

router.get('/:id', checkAuth, function(req, res) {
    Vozilo.findById(req.params.id, function(err, user) {
        if (err) return res.status(500).send('There was a problem finding the user.');
        if (!user) return res.status(404).send('Nije pronadjeno vozilo!');
        res.status(200).send(user);
    });
});

router.delete('/:id', checkAuth, function(req, res) {
    Vozilo.findByIdAndRemove(req.params.id, function(err, user) {
        if (err) return res.status(500).send('There was a problem deleting a user.');
        res.status(200).send('Vozilo ' + user.marka + ' je obrisano iz baze.');
    });
});

router.put('/:id', checkAuth, function(req, res) {
    Vozilo.findByIdAndUpdate(req.params.id, req.body, {new: true}, function(err, user) {
        if (err) return res.status(500).send('There was a problem updating the user.');
        res.status(200).send(user);
    })
})




module.exports = router;