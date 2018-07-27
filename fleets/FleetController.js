var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

var Fleet = require('./Fleet');

router.post('/', function(req, res) {
    Fleet.create({
        start: req.body.start,
        end: req.body.end,
        truck: req.body.truck,
        driver: req.body.driver,
        startDate: req.body.startDate,
        endDate: req.body.endDate,
        company: req.body.company
    }, function(err, user) {
        if (err) return res.status(500).send('There was a problem adding the information to the database.');
        res.status(200).send(user);
    });
});

router.get('/', function(req, res) {
    Fleet.find({}, function(err, user) {
        if (err) return res.status(500).send('There was a problem finding the users.');
        res.status(200).send(user);
    }).populate('truck driver', 'plate name surname');
});

router.get('/:id', function(req, res) {
    Fleet.findById(req.params.id, function(err, user) {
        if (err) return res.status(500).send('There was a problem finding the user.');
        if (!user) return res.status(404).send('Nije pronadjena tura!');
        res.status(200).send(user);
    }).populate('truck driver', 'plate name surname');
});

router.delete('/:id', function(req, res) {
    Fleet.findByIdAndRemove(req.params.id, function(err, user) {
        if (err) return res.status(500).send('There was a problem deleting a user.');
        res.status(200).send('Fleet ' + user.start + ' - ' + user.end + ' is deleted.');
    });
});

router.put('/:id', function(req, res) {
    Fleet.findByIdAndUpdate(req.params.id, req.body, {new: true}, function(err, user) {
        if (err) return res.status(500).send('There was a problem updating the user.');
        res.status(200).send(user);
    });
});




module.exports = router;