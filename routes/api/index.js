const router = require('express').Router();
const bookingsRoutes = require('./bookings');

router.use('/bookings', bookingsRoutes);

module.exports = router;
