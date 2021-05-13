// example code from module 18, module -> Comment.js & Pizza.js
const { Schema, model } = require('mongoose');

const UserSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
      trim: true
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/]
    // regex is from module 17
    },
    thoughts: {
      type: Schema.Types.ObjectId,
      ref: 'Thought'
      // this was from the mod 18 User.js file in the comments section 
    },
    friends: {
      type: Schema.Types.ObjectId,
      ref: 'User'
    },
    
  },
  {
    toJSON: {
      virtuals: true,
      // getters: true
    },
    // prevents virtuals from creating duplicate of _id as `id`
    id: false
  }
);

// get total count of friends on retrieval
UserSchema.virtual('friendCount').get(function() {
  return this.friends.length;
});

const User = model('User', UserSchema);

module.exports = User;
