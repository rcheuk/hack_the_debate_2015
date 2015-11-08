angular.module('hackathonApp')
  .directive('clickCandidate', function($compile) {
      return {
        restrict: 'EA',
        scope: {
          candidate: '=candidate',
          candidateClass: '=candidateClass'
        },
        link:  function link(scope, element, attrs) {
          scope.getCandidateClass = function() {
            return scope.candidateClass;
          }
        },
        templateUrl: 'components/clickCandidate/clickCandidate.html'
      };
  });
