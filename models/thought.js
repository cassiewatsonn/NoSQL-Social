const { Schema, model } = require('mongoose');
const reactionSchema = require("./reaction")

// Schema to create Post model
const thoughtSchema = new Schema(
  {
    thoughtText: { type: String, required: true, maxLength: 280, minLength: 1 },
    username: { type: String, required: true},
    createdAt: {type: Date, default: Date.now},
    reactions: [reactionSchema],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

thoughtSchema.virtual('reactionCount').get(function () {
  return this.reactions.length;
});

// Initialize our Post model
const Post = model('post', thoughtSchema);

module.exports = Post;