// example code from module 18, module -> Comment.js & Pizza.js
const { Schema, model, Types } = require('mongoose');

const ThoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      maxLength: 280
      // https://mongoosejs.com/docs/validation.html maxLength
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: createdAtVal => dateFormat(createdAtVal)
    },

  username: {
    type: String,
    required: true
  },
  reaction: [{
    reactionId:{
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId()
      // this is like the Comment.js replyId mod 18 code
    },
    reactionBody: {
      type: String,
      required: true,
      maxLength: 280
    },
    username: {
      type:String,
      required: true
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: createdAtVal => dateFormat(createdAtVal)
      //like the code in Comment.js of module 18 
    }
  }]
  },
  {
    toJSON: {
      virtuals: true,
      getters: true
    },
    // prevents virtuals from creating duplicate of _id as `id`
    id: false
  }
);

// get total count of friends on retrieval
ThoughtSchema.virtual('reactionCount').get(function() {
  return this.reaction.length;
});

const Thought = model('Thought', ThoughtSchema);

module.exports = Thought;
