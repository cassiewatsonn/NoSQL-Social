const { Schema, model } = require('mongoose');

const userSchema = new Schema(
    {
      username: { type: String, required: true, unique: true, trim: true },
      email: { type: String, unique: true, required: true, match: [/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/, 'Please enter a valid email address']},
      thoughts: [{ type: Schema.Types.ObjectId, ref: 'thought' }],
      friends: [{ type: Schema.Types.ObjectId, ref: 'user' }],
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
  const User = model('user', userSchema);
  
  module.exports = User;