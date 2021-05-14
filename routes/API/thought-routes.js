//used module 18 pizza routes file and the given setup and naming from the assignment directions
const router = require('express').Router();

const {
  getAllThoughts,
  getThoughtById,
  createThought,
  updateThought,
  deleteThought,
  createReaction,
  deleteReaction
} = require('../../controllers/thought-controller');


// /api/thoughts
router
  .route('/')
  .get(getAllThoughts);

// /api/thoughts/:userId
  router
  .route('/:userId')
  .post(createThought);

// /api/thoughts/:thoughtId
router
.route('/:thoughtId')
.get(getThoughtById)
.put(updateThought)
.delete(deleteThought);

//api/thoughts/:thoughtId/reactions
router
.route('/reactions')
.post(createReaction);

//api/thoughts/:thoughtId/reactions/:reactionId
router
.route(':thoughtId/reactions/:reactionId')
.delete(deleteReaction);

module.exports = router;
