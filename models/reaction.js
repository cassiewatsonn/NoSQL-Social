const { Schema, model } = require('mongoose');

// Schema for what makes up a reaction
const reactionSchema = new Schema({
  reactionBody: { type: String, required: true, maxLength: 280 },
  username: { type: String, required: true},
  createdAt: {type: Date, default: Date.now}
});



module.exports = reactionSchema;