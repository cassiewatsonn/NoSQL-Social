const { User } = require('../models');

module.exports = {
  getUsers(req, res) {
    User.find()
      .then((Users) => res.json(Users))
      .catch((err) => res.status(500).json(err));
  },
  getSingleUser(req, res) {
    User.findOne({ _id: req.params.userId })
      .populate('friends')
      .populate('thoughts')
      .then((User) =>
        !User
          ? res.status(404).json({ message: 'No User with that ID' })
          : res.json(User)
      )
      .catch((err) => res.status(500).json(err));
  },
  // create a new User
  createUser(req, res) {
    User.create(req.body)
      .then((dbUserData) => res.json(dbUserData))
      .catch((err) => res.status(500).json(err));
  },
  updateUser(req,res){
    User.findOneAndUpdate(
        { _id: req.params.userId},
        { $set: req.body },
        { new: true }
        )
    .then((dbUserData) => res.json('User successfully updated!'))
    .catch((err) => res.status(500).json(err));
  },
  deleteUser(req, res) {
    User.findOneAndDelete({ _id: req.params.userId })
      .then((user) =>
        !user
          ? res.status(404).json({ message: 'No user with this id!' })
          : User.findOneAndUpdate(
              { users: req.params.userId },
              { $pull: { users: req.params.userId } },
              { new: true }
            )
      )
      .then((user) =>
        !user
          ? res
              .status(404)
              .json({ message: 'user created but no user with this id!' })
          : res.json({ message: 'user successfully deleted!' })
      )
      .catch((err) => res.status(500).json(err));
  },

//** FRIENDS */
addFriend(req, res) {
  User.findOneAndUpdate(
      { _id: req.params.userId },
      { $addToSet: { friends: req.params.friendId } },
      { new: true }
      )
      .then((user) =>
          !user
              ? res.status(404).json({ message: 'There is no user with that ID' })
              : res.json({ user, message: 'Friend Added!' })
      )
      .catch((err) => res.status(500).json(err));
},



removeFriend(req, res) {
    User.findOneAndUpdate(
        { _id: req.params.userId},
        { $pull: { friends: req.params.friendId }},
        { new: true}
    )
    .then((user) =>
    !user
        ? res.status(404).json({ message: 'There is no user with that ID' })
        : res.json({ message: 'Friend successfully deleted!' })
)
.catch((err) => res.status(500).json(err));
},

};