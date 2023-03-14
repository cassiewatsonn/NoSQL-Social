const router = require('express').Router();
const thoughtRoutes = require('./thoughtRoute');
// const reactionRoutes = require('./reactionRoute');
const userRoutes = require ('./userRoutes');

router.use('/thoughts', thoughtRoutes);
// router.use('/reactions', reactionRoutes);
router.use('/users', userRoutes);

module.exports = router;