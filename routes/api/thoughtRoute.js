const router = require('express').Router();
const {
  getSingleThought,
  getThoughts,
  createThought,
  updateThought, 
  deleteThought,
} = require('../../controllers/thoughtController');

router.route('/').get(getThoughts).post(createThought);

// /api/thought/:thoughtId
router.route('/:thoughtId').get(getSingleThought)
.put(updateThought)
.delete(deleteThought);
// .post(updateThought).delete(deleteThought);

module.exports = router;
