'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;


/**
 * Comment Schema
 */
var CommentSchema = new Schema({
  created: {
    type: Date,
    default: Date.now
  },
  content: {
    type: String,
    required: true,
    trim: true
  },
  article: {
    type: Schema.ObjectId,
    ref: 'Article',
    required: true
  },

  user: {
    type: Schema.ObjectId,
    ref: 'User',
  },
  updated: {
    type: Array
  }
});

/**
 * Validations
 */

CommentSchema.path('content').validate(function(content) {
  return !!content;
}, 'Content cannot be blank');

CommentSchema.statics.load = function(id, cb) {
  this.findOne({
    _id: id
  }).populate('user', 'name username')
  .exec(cb);
};


mongoose.model('Comment', CommentSchema);
