'use strict';

angular
  .module('app.components.progress.linear.directive', [])
  .directive('drLinearProgress', () => {
    return {
      scope: {
        value: '='
      },
      restrict: 'E',
      replace: true,
      templateUrl: 'js/components/progress/views/linear.html',
      link: (scope, elem, attrs) => {
      }
    };
  });