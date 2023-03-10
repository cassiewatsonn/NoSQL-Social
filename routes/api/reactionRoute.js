const router = require('express').Router();
const {
  getReaction,
  getSingleReaction,
  createReaction,
} = require('../../controllers/reactionController');

// /api/reactions
router.route('/').get(getReaction).post(createReaction);

// /api/reactions/:reactionId
router.route('/:reactionId').get(getSingleReaction);

module.exports = router;
