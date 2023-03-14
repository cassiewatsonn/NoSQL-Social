const { Schema, model } = require('mongoose');
const thoughtSchema = require('./thought')

// Schema for what makes up a reaction
const reactionSchema = new Schema({
  reactionId: [{
    type: Schema.Types.ObjectId,
  }],
  reactionBody: { type: String, required: true, maxLength: 280 },
  username: { type: String, required: true},
  createdAt: {type: Date, default: Date.now, getters:true}
},
// {
//   toJSON: {
//     virtuals: true,
//   },
//   id: false,
// }
);

const Reaction = model('reaction', reactionSchema)


module.exports = Reaction;