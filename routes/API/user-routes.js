// used module 18 api routes as frameworks for this

const router = require('express').Router();

const {
  getAllUsers,
  getUserById,
  postUser,
  putUserById,
  deleteUserById,
  postAddFriend,
  deleteRemoveFriend
} = require('../../controllers/user-controller');

// /api/users
router
  .route('/')
  .get(getAllUsers)
  .post(postUser);

//api/users/:userId (adapted from pizza routes)
router
.route('/:id')
.get(getUserById)
.put(putUserById)
.delete(deleteUserById);

//api/users/:userId/friends/:friendId
router
.route('/:id/friends/:friendId')
.post(postAddFriend)
.delete(deleteRemoveFriend);

module.exports = router;
