'use strict';

angular.module('hackathonApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/howto', {
        templateUrl: 'app/howto/howto.html',
        controller: 'HowtoCtrl'
      });
  });
