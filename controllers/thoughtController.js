const { Thought, User } = require('../models');

module.exports = {
  getThoughts(req, res) {
    Thought.find()
      .then((Thoughts) => res.json(Thoughts))
      .catch((err) => res.status(500).json(err));
  },
  getSingleThought(req, res) {
    Thought.findOne({ _id: req.params.thoughtId })
      .then((Thought) =>
        !Thought
          ? res.status(404).json({ message: 'No Thought with that ID' })
          : res.json(Thought)
      )
      .catch((err) => res.status(500).json(err));
  },


  createThought(req, res) {
    Thought.create(req.body)
    .then((thought) =>
    !thought
      ? res.status(404).json({ message: 'No thought with this id!' })
      : User.findOneAndUpdate(
          { username: req.body.username },
          { $addToSet: { thoughts: thought._id } },
          { new: true }
          ).then((thought) => res.json('Thought successfully posted!'))
        )},


  updateThought(req,res){
    Thought.findOneAndUpdate(
        { _id: req.params.thoughtId},
        { $set: req.body },
        { new: true }
        )
    .then((dbThoughtData) => res.json('Thought successfully updated!'))
    .catch((err) => res.status(500).json(err));
  },


  deleteThought(req, res) {
    Thought.findOneAndDelete(
        { _id: req.params.thoughtId }
    )
      .then((thought) => 
        !thought
          ? res.status(404).json({ message: 'No thought with this id!' })
          : User.findOneAndUpdate(
              { thoughts: req.params.thoughtId },
              { $pull: { thoughts: req.params.thoughtId } },
              { new: true }
            )
      )
      .then((thought) => {
        if (!thought) {
          return res.status(404).json({ message: 'thought deleted but no user with this id!' });
        }
        return res.json({ message: 'thought successfully deleted!' });
      })
      .catch((err) => res.status(500).json(err));
  },




  //** REACTIONS */ 

  addReaction(req, res) {
    Thought.findOneAndUpdate(
     { _id: req.params.thoughtId },
     { $push: { reactions: req.body } },
     { new: true }
   )

 .then((Thought) =>
   !Thought
     ? res
         .status(404)
         .json({ message: 'Reaction created, but no Thoughts with this ID' })
     : res.json({ message: 'Reaction created' })
 )
 .catch((err) => {
   console.error(err);
 });
},
removeReaction(req, res) {
  Thought.findOneAndUpdate(
    { _id: req.params.thoughtId },
    { $pull: { reactions: req.body } },
    // { $pull: { reactions: { reactionId: req.params.reactionId } } },
    { new: true }
  )
  .then((updatedThought) => {
    if (!updatedThought) {
      return res.status(404).json({ message: 'Reaction not found in any thoughts!' });
    }
    return res.json({ message: 'Reaction successfully deleted!' });
  })
  .catch((err) => res.status(500).json(err));
 }
};

