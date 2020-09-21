const router = require('express').Router();
const {
    getAllThought,
    getThoughtById,
    createThought,
    updateThought,
    deleteThought,
    addReactions,
    removeReactions
} = require('../../controllers/thought-controller');

//getAll and POST
router.route('/').get(getAllThought).post(createThought);

// getById, PUT and Delete
router.route('/:id').get(getThoughtById).put(updateThought).delete(deleteThought);

// POST
router
    .route('/:thoughtId/reactions')
    .post(addReactions);

//Delete 
router
    .route('/:thoughtId/reactions/:reactionId')
    .post(removeReactions);

module.exports = router;