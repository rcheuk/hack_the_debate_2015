angular.module('hackathonApp')
  .directive('clickCandidate', function($compile) {
      return {
        restrict: 'EA',
        scope: {
          candidate: '=candidate'
        },
        link:  function link(scope, element, attrs) {

        },
        templateUrl: 'components/clickCandidate/clickCandidate.html'
      };
  });
