const router = require('express').Router();
const bookingsRoutes = require('./bookings');

// Bookings routes
router.use('/bookings', bookingsRoutes);

module.exports = router;
