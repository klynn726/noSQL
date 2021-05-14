const { Schema, Types } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const reactionSchema = new Schema(
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

    },
  },
  {
    toJSON: {
      getters: true
    }
  }
);

module.exports = reactionSchema;
