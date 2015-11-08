angular.module('hackathonApp')
  .directive('clickCandidate', function() {
      return {
        restrict: 'E',
        scope: {
          candidate: '=candidate',
          candidateClass: '=candidateClass'
        },
        link:  function link(scope, element, attrs) {

        },
        templateUrl: 'components/clickCandidate/clickCandidate.html'
      };
  });
