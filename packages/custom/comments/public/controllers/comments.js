
 'use strict';

  /* jshint -W098 */
  angular
    .module('mean.comments')
    .controller('CommentsController',
     ['$scope', '$stateParams','$location','Global', 'Comments','MeanUser','Articles',

  function($scope, $stateParams, $location,Global, Comments,
    MeanUser, Articles) {
    $scope.global = Global;



       $scope.create = function(isValid) {
        if (isValid) {
        var comment = new Comments($scope.comment);
        var article_id=$stateParams['articleId'];
        comment.article=(article_id);

        comment.$save(function(response) {
          var id=response._id;
          Articles.get({
              articleId: $stateParams.articleId
            }, function(article) {
          if (!article.comments) {
                article.comments = [];
              }
              article.comments.push(id);
              article.$update(function() {
                $location.path('articles/' + article._id);
                });
            });
            });
      
      }
  }; 
      

    
    $scope.find = function() {
      Comments.query(function(comments) {
        $scope.comments = comments;
      });
    };
  
}
]);
