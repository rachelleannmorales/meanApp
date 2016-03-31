  'use strict';

angular.module('mean.comments').config(['$stateProvider',
  function($stateProvider) {

    // states for my app
    $stateProvider
      .state('all comments', {
        url: '/comments',
        templateUrl: '/comments/views/index.html'
      })
      .state('create comments', {
        url: '/comments/create',
        templateUrl: '/comments/views/index.html'
      })
  }
]);