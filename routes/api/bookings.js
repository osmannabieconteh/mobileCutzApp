const router = require('express').Router();
const bookingsController = require('../../controllers/bookingsController');

// Matches with "/api/books"
router.route('/').get(bookingsController.findAll).post(bookingsController.create);

// Matches with "/api/books/:id"
router.route('/:id').get(bookingsController.findById).put(bookingsController.update).delete(bookingsController.remove);

module.exports = router;
