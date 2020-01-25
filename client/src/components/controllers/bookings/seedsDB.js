const mongoose = require('mongoose');
const db = require('../models');

// This file empties the Bookings collection and inserts the date and time below

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/reactreadinglist');

const bookSeed = [
	{
		date: ' ',
		time: ' ',

		date: new Date(Date.now())
	},
	{
		date: ' ',
		time: ' ',

		date: new Date(Date.now())
	},
	{
		date: ' ',
		time: ' ',

		date: new Date(Date.now())
	},
	{
		date: ' ',
		time: ' ',

		date: new Date(Date.now())
	}
];

db.Bookme
	.remove({})
	.then(() => db.Bookme.collection.insertMany(bookmeSeed))
	.then((data) => {
		console.log(data.result.n + ' records inserted!');
		process.exit(0);
	})
	.catch((err) => {
		console.error(err);
		process.exit(1);
	});
