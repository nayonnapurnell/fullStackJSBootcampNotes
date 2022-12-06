const router = require('express').Router();
const bookRoutes = require('./bookRoutes');

// will be combined with the routes in bookRoutes
router.use('/books', bookRoutes);

module.exports = router;
