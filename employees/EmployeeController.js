var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

var Employee = require('./Employee');

router.post('/', function(req, res) {
    Employee.create({
        name: req.body.name,
        surname: req.body.surname,
        personId: req.body.personId,
        telephone: req.body.telephone,
        workplace: req.body.workplace,
        card: req.body.card,
        active: req.body.active
    }, function(err, user) {
        if (err) return res.status(500).send('There was a problem adding the information to the database.');
        res.status(200).send(user);
    });
});

router.get('/', function(req, res) {
    Employee.find({}, function(err, user) {
        if (err) return res.status(500).send('There was a problem finding the users.');
        res.status(200).send(user);
    });
});

router.get('/:id', function(req, res) {
    Employee.findById(req.params.id, function(err, user) {
        if (err) return res.status(500).send('There was a problem finding the user.');
        if (!user) return res.status(404).send('No user found!');
        res.status(200).send(user);
    });
});

router.delete('/:id', function(req, res) {
    Employee.findByIdAndRemove(req.params.id, function(err, user) {
        if (err) return res.status(500).send('There was a problem deleting a user.');
        res.status(200).send('Zaposleni ' + user.ime + ' ' + user.prezime + 'je obrisan iz baze.');
    });
});

router.put('/:id', function(req, res) {
    Employee.findByIdAndUpdate(req.params.id, req.body, {new: true}, function(err, user) {
        if (err) return res.status(500).send('There was a problem updating the user.');
        res.status(200).send(user);
    });
});


module.exports = router;