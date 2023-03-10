const { Schema, model } = require('mongoose');

const userSchema = new Schema(
    {
      username: String,
      email: String,
      thoughts: [{ type: Schema.Types.thoughtId, ref: 'comment' }],
      friends: [{ type: Schema.Types.userId, ref: 'comment' }],
    },
    {
      toJSON: {
        virtuals: true,
      },
      id: false,
    }
  );

  // Create a virtual property `friendCount` that gets the amount of friends 
userSchema.virtual('friendCount').get(function () {
    return this.friends.length;
  });
  
  // Initialize our Post model
  const Post = model('post', userSchema);
  
  module.exports = Post;