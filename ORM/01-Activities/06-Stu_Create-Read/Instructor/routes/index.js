const router = require('express').Router();
const apiRoutes = require('./api');

// will be combined with the routes in bookRoutes
router.use('/api', apiRoutes);

module.exports = router;
