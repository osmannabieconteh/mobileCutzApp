const router = require('express').Router();
const bookingsRoutes = require('./bookings');

// Book routes
router.use('/bookings', bookingsRoutes);

module.exports = router;
