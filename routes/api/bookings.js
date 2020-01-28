const router = require('express').Router();
const Appointment = require('../../models/appointment');

// Matches with "/api/bookings"
router.get('/', (req, res) => {
	res.json('test');
});

router.post('/', (req, res) => {
	const newAppointment = new Appointment({
		time: req.body.time,
		date: req.body.date,
		firebaseId: req.body.firebaseId
	});

	newAppointment.save().then((success) => res.json(success)).catch((error) => console.log(error));
});
router.route('/').get(bookmeController.findAll).post(booksController.create);
// Matches with "/api/books/:id"
router.route('/:id').get(bookmeController.findById).put(bookmeController.update).delete(bookmeController.remove);

module.exports = router;
