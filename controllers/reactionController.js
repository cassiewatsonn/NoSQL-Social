const { Thought, Reaction } = require('../models');

module.exports = {
  getReactions(req, res) {
    Reaction.find()
      .then((Reaction) => res.json(Reaction))
      .catch((err) => res.status(500).json(err));
  },
  // Get a single Reaction
  getSingleReaction(req, res) {
    Reaction.findOne({ _id: req.params.ReactionId })
      .then((Reaction) =>
        !Reaction
          ? res.status(404).json({ message: 'No Reaction found with that id' })
          : res.json(Reaction)
      )
      .catch((err) => res.status(500).json(err));
  },
  // Create a Reaction
  createReaction(req, res) {
    Reaction.create(req.body)
      .then((Reaction) => {
        return Thought.findOneAndUpdate(
          { _id: req.body.ThoughtId },
          { $push: { Reactions: Reaction._id } },
          { new: true }
        );
      })
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
};