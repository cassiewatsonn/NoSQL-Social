// const { Thought, Reaction } = require('../models');

// module.exports = {
//   getReactions(req, res) {
//     Reaction.find()
//       .then((Reaction) => res.json(Reaction))
//       .catch((err) => res.status(500).json(err));
//   },
//   // Get a single Reaction
//   getSingleReaction(req, res) {
//     Reaction.findOne({ _id: req.params.reactionId })
//       .then((Reaction) =>
//         !Reaction
//           ? res.status(404).json({ message: 'No Reaction found with that id' })
//           : res.json(Reaction)
//       )
//       .catch((err) => res.status(500).json(err));
//   },
//   // Create a Reaction
//   createReaction(req, res) {
//          Thought.findOneAndUpdate(
//           { _id: req.params.thoughtId },
//           { $push: { reactions: req.body } },
//           { new: true }
//         )
     
//       .then((Thought) =>
//         !Thought
//           ? res
//               .status(404)
//               .json({ message: 'Reaction created, but no Thoughts with this ID' })
//           : res.json({ message: 'Reaction created' })
//       )
//       .catch((err) => {
//         console.error(err);
//       });
//   },
//   deleteReaction(req, res) {
//     Reaction.findOneAndDelete({ _id: req.params.reactionId })
//       .then((reaction) => {
//         if (!reaction) {
//           return res.status(404).json({ message: 'No reaction with this id!' });
//         }
//         return Thought.findOneAndUpdate(
//           { reactions: req.params.reactionId },
//           { $pull: { reactions: req.params.reactionId } },
//           { new: true }
//         ).exec();
//       })
//       .then((updatedThought) => {
//         if (!updatedThought) {
//           return res.status(404).json({ message: 'Reaction not found in any thoughts!' });
//         }
//         return res.json({ message: 'Reaction successfully deleted!' });
//       })
//       .catch((err) => res.status(500).json(err));
//   }
  

// };