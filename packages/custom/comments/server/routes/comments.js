'use strict';


module.exports = function (Comments, app, auth) {
   var comments = require('../controllers/comments')(Comments);
  app.route('/api/comments')
    .get(comments.all)
    .post(comments.create);
};
