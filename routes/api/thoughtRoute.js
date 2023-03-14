const router = require('express').Router();
const {
  getSingleThought,
  getThoughts,
  createThought,
  updateThought, 
  deleteThought,
  addReaction,
  removeReaction
} = require('../../controllers/thoughtController');


router.route('/')
  .get(getThoughts)
  .post(createThought);


// /api/thought/:thoughtId
router.route('/:thoughtId')
  .get(getSingleThought)
  .put(updateThought)
  .delete(deleteThought);
// .post(updateThought).delete(deleteThought);


router.route('/:thoughtId/reactions')
  .post(addReaction);


router.route('/:thoughtId/reactions/:reactionId')
  .delete(removeReaction);

module.exports = router;
