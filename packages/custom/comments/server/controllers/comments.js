'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    Comment = mongoose.model('Comment'),
    Article = mongoose.model('Article'),
    config = require('meanio').loadConfig(),
    _ = require('lodash');

module.exports = function(Comments) {

    return {
        /**
         * Create an article
         */
        create: function(req, res) {
            var comment = new Comment(req.body);
            comment.user = req.user;
            var id=comment.article;
            comment.article = mongoose.Types.ObjectId(comment.article);
            comment.save(function(err) {
            if (err) {
                    return res.status(500).json({

                        error: 'Cannot save the comment'
                    });
                }
                res.json(comment);
            });
    
        
              
         
        },
        /**
         * List of Comments
         */
        all: function(req, res) {
            var query = req.acl.query('Comment'); 
            query.find({}).sort('-created').populate('user', 'name username').exec(function(err, comments) {
                if (err) {
                    return res.status(500).json({
                        error: 'Cannot list the comments'
                    });
                }
                res.json(comments)
            });
        }, 
        /**
         * List of Comments
         */
    };
}