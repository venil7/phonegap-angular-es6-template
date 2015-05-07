'use strict';

angular
  .module('app.components.progress.circular.directive', [])
  .directive('drCircularProgress', () => {
    return {
      scope: true,
      restrict: 'E',
      replace: true,
      templateUrl: 'js/components/progress/views/circular.html',
      link: (scope, elem, attrs) => {
      }
    };
  });