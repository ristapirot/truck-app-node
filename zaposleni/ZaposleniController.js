var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

var Zaposleni = require('./Zaposleni');

router.post('/', function(req, res) {
    Zaposleni.create({
        ime: req.body.ime,
        prezime: req.body.prezime,
        jmbg: req.body.jmbg,
        telefon: req.body.telefon,
        pozicija: req.body.pozicija,
        kartica: req.body.kartica,
        aktivan: req.body.aktivan
    }, function(err, user) {
        if (err) return res.status(500).send('There was a problem adding the information to the database.');
        res.status(200).send(user);
    });
});

router.get('/', function(req, res) {
    Zaposleni.find({}, function(err, user) {
        if (err) return res.status(500).send('There was a problem finding the users.');
        res.status(200).send(user);
    });
});

router.get('/vozaci', function(req, res) {
    Zaposleni.find({}, function(err, user) {
        if (err) return res.status(500).send('Imamo problem sa prikazom prikolica.');
        res.status(200).send(user);
    }).where({ pozicija: 'Vozac' });
});

router.get('/:id', function(req, res) {
    Zaposleni.findById(req.params.id, function(err, user) {
        if (err) return res.status(500).send('There was a problem finding the user.');
        if (!user) return res.status(404).send('Nije pronadjeno vozilo!');
        res.status(200).send(user);
    });
});

router.delete('/:id', function(req, res) {
    Zaposleni.findByIdAndRemove(req.params.id, function(err, user) {
        if (err) return res.status(500).send('There was a problem deleting a user.');
        res.status(200).send('Zaposleni ' + user.ime + ' ' + user.prezime + 'je obrisan iz baze.');
    });
});

router.put('/:id', function(req, res) {
    Zaposleni.findByIdAndUpdate(req.params.id, req.body, {new: true}, function(err, user) {
        if (err) return res.status(500).send('There was a problem updating the user.');
        res.status(200).send(user);
    });
});




module.exports = router;