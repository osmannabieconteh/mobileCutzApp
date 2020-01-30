const router = require('express').Router();
const Appointment = require('../../models/appointment');
const { findAll, create, update, remove, findById } = require('../../controllers/bookingcontroller');

// Matches with "/api/bookings"

router.post('/', (req, res) => {
	const newAppointment = new Appointment({
		time: req.body.time,
		date: req.body.date,
		firebaseId: req.body.firebaseId
	});

	newAppointment.save().then((success) => res.json(success)).catch((error) => console.log(error));
});
router.route('/').get(findAll);
// Matches with "/api/bookings/:id"
router.route('/:id').get(findById).put(update).delete(remove);

module.exports = router;
