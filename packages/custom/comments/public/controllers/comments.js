
 'use strict';

  /* jshint -W098 */
  angular
    .module('mean.comments')
    .controller('CommentsController',
     ['$scope', '$stateParams','$location','Global', 'Comments','MeanUser',

  function($scope, $stateParams, $location,Global, Comments,MeanUser) {
    $scope.global = Global;

       $scope.create = function(isValid) {
        if (isValid) {
        var comment = new Comments($scope.comment);
        var article_id=$stateParams['articleId'];
        comment.article=(article_id);
        comment.$save(function(response) {
        $location.path('/articles/' + article_id);
      });
        $scope.article = {};
         } else {
        $scope.submitted = true;
      }
    };

    
    $scope.find = function() {
      Comments.query(function(comments) {
        $scope.comments = comments;
      });
    };
  
}
]);
