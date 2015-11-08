'use strict';

angular.module('hackathonApp')
  .controller('MainCtrl', function ($scope, $http, socket) {
    var candidates = [{
      name: "Candidate 1",
      img: "someimageurl",
      count: 0
    }, {
      name: "Candidate 2",
      img: "someimageurl",
      count: 0
    }];

    $scope.awesomeThings = candidates;

    /*$http.get('/api/things').success(function(awesomeThings) {
      $scope.awesomeThings = awesomeThings;
      //socket.syncUpdates('thing', $scope.awesomeThings);
    });*/



    $scope.addThing = function() {
      if($scope.newThing === '') {
        return;
      }
      $http.post('/api/things', { name: $scope.newThing });
      $scope.newThing = '';
    };

    $scope.deleteThing = function(thing) {
      $http.delete('/api/things/' + thing._id);
    };

    $scope.$on('$destroy', function () {
      socket.unsyncUpdates('thing');
    });
  });
