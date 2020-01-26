// Dependencies
var express = require('express');
var mongoose = require('mongoose');
var logger = require('morgan');
var path = require('path');

var app = express();

app.use(logger('dev'));

// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Make public a static folder
app.use(express.static('public'));

// Routes
// ======
const bookings = require('./routes/api/bookings');
app.use('/api/bookings/', bookings);

// Listen on port 3000
app.listen(8080, function() {
	console.log('App running on port 8080!');
});
