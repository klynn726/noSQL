// example code from module 18, module -> Comment.js & Pizza.js
const { Schema, model, Types } = require('mongoose');
const dateFormat = require('../utils/dateFormat')

const ReactionSchema = new Schema(
  {
      reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId()
            // this is like the Comment.js replyId mod 18 code

    },
    reactionBody: {
      type: String,
      required: true,
      trim:true,
      maxLength: 280
    },
    username: {
      type: String,
      required: true,
      trim:true
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: createdAtVal => dateFormat(createdAtVal)
            //like the code in Comment.js of module 18 

    }
  },
  {
    toJSON: {
      getters: true
    }
  }
);
// this was from module 18 activity 2 creating sub documents but 
// the instructions also say not to make it a module so i kept it 
// in the same doc as i was unsure if it would be considered a 
// module for grading purposes if i seperated it into another doc

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
  reaction: [ReactionSchema]
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
