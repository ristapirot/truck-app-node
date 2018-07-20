var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var checkAuth = require('../middleware/check-auth')

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

var Vozilo = require('./Vozilo');

router.post('/', checkAuth, function(req, res, next) {
    Vozilo.create({
        oznaka: req.body.oznaka,
        marka: req.body.marka,
        model: req.body.model,
        sasija: req.body.sasija,
        registracija: req.body.registracija,
        prikljucno: req.body.prikljucno
    }, function(err, user) {
        if (err) return res.status(500).send('There was a problem adding the information to the database.');
        res.status(200).send(user);
    });
});

router.get('/', checkAuth, function(req, res) {
    Vozilo.find({}, function(err, user) {
        if (err) return res.status(500).send('There was a problem finding the users.');
        res.status(200).send(user);
    });
});

router.get('/kamioni', checkAuth, function(req, res) {
    Vozilo.find({}, function(err, user) {
        if (err) return res.status(500).send('Imamo problem sa prikazom prikolica.');
        res.status(200).send(user);
    }).where({ prikljucno: false });
});

router.get('/prikolice', checkAuth, function(req, res) {
    Vozilo.find({}, function(err, user) {
        if (err) return res.status(500).send('Imamo problem sa prikazom prikolica.');
        res.status(200).send(user);
    }).where({ prikljucno: true });
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