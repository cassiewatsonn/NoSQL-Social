const { Schema, model } = require('mongoose');

// Schema for what makes up a reaction
const reactionSchema = new Schema({
  reactionId: Number,
  reactionBody: String,
  username: String,
  createdAt: Date,
});

// Initialize the reaction model
const reaction = model('reaction', reactionSchema);

module.exports = reaction;