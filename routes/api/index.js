const router = require('express').Router();
const thoughtRoutes = require('./thoughtRoute');
const reactionRoutes = require('./reactionRoute');

router.use('/thoughts', thoughtRoutes);
router.use('/reactions', reactionRoutes);

module.exports = router;