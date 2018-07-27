var express = require('express');
var app = express();
var db = require('./db');

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', '*')
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET')
        return res.status(200).json({})
    }
    next()
})

var UserController = require('./user/UserController');
var TruckController = require('./vehicles/TruckController');
var TrailerController = require('./vehicles/TrailerController');
var EmployeeController = require('./employees/EmployeeController');
var FleetController = require('./fleets/FleetController');
var InvoiceController = require('./invoices/InvoiceController');

app.use('/users', UserController);
app.use('/trucks', TruckController);
app.use('/trailers', TrailerController);
app.use('/employees', EmployeeController);
app.use('/fleets', FleetController);
app.use('/invoices', InvoiceController);

module.exports = app;