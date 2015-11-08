'use strict';

angular.module('hackathonApp')
  .controller('MainCtrl', function ($scope, $http, socket) {

    $scope.candidates = [];

    $http.get('/api/candidates').success(function(data) {
      $scope.candidates = data;
      socket.syncUpdates('candidate', $scope.candidates);
    });

    /*$scope.addCandidate = function() {
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
    };*/

    $scope.updateCandidate = function(candidate) {
      $http.put('/api/candidates/' + candidate._id, candidate);
      socket.syncUpdates('candidate', $scope.candidates);
    };

    $scope.$on('$destroy', function () {
      socket.unsyncUpdates('candidate');
    });

    $scope.clickCandidate = function (candidate) {
      candidate.count++;
      $scope.updateCandidate(candidate);
    };

    $scope.getCandidateClass = function(candidate) {
      return candidate.info;
    }


    var data = [
      {name: "Kasich",    value:  12},
      {name: "Bush",    value:  8},
      {name: "Rubio",     value: 15},
      {name: "Trump",   value: 16},
      {name: "Carson", value: 23},
      {name: "Cruz",     value: 42},
      {name: "Fiorina", value: 12},
      {name: "Paul", value: 2}
    ];
    //var data = $scope.candidates;
    console.log('data', data);

    var width = 420,
        barHeight = 40;

    var x = d3.scale.linear()
        .domain([0, d3.max(data, function (d) { console.log('d', d); return d.value; })])
        .range([0, width]);

    var chart = d3.select(".chart")
        .attr("width", width)
        .attr("height", barHeight * data.length);

    var bar = chart.selectAll("g")
        .data(data)
        .enter().append("g")
        .attr("transform", function(d, i) { return "translate(0," + i * barHeight + ")"; });

    bar.append("rect")
        .attr("width", function(d) { return x(d.value); })
        .attr("height", barHeight - 1);

    bar.append("text")
        .attr("x", function(d) { return x(d.value) - 3; })
        .attr("y", barHeight / 2)
        .attr("dy", ".35em")
        .text(function(d) { return d.name + " " + d.value; });

    function type(d) {
      d.value = +d.value; // coerce to number
      return d;
    }

  });
