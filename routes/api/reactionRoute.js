const router = require('express').Router();
const {
  getReactions,
  getSingleReaction,
  createReaction,
  deleteReaction
} = require('../../controllers/reactionController');

// /api/reactions
router.route('/').get(getReactions)
router.route('/:thoughtId').post(createReaction);

// /api/reactions/:reactionId
router.route('/:reactionId').get(getSingleReaction);

module.exports = router;

//** Dont actually need getReactions */