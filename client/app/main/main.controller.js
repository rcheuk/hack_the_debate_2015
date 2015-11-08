'use strict';

angular.module('hackathonApp')
  .controller('MainCtrl', function ($scope, $http, socket) {

    $scope.candidates = [];

    $http.get('/api/candidates').success(function(data) {
      $scope.candidates = data;
      socket.syncUpdates('candidate', $scope.candidates);
    });

    $scope.addCandidate = function() {
      if($scope.newCandidate === '') {
        return;
      }
      $http.post('/api/candidates', { name: $scope.newCandidate });
      $scope.newCandidate = '';
      socket.syncUpdates('candidate', $scope.candidates);
    };

    $scope.deleteCandidate = function(candidate) {
      console.log('candidate', candidate);
      $http.delete('/api/candidates/' + candidate._id);
      socket.syncUpdates('candidate', $scope.candidates);
    };

    $scope.$on('$destroy', function () {
      socket.unsyncUpdates('candidate');
    });
  });
