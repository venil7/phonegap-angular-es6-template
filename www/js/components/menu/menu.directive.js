'use strict';

angular
  .module('app.components.menu.directive', [])
  .directive('drMainMenu', () => {
    return {
      scope: true,
      restrict: 'E',
      replace: true,
      templateUrl: 'js/components/menu/views/menu.html',
      link: (scope, elem, attrs) => {
        let nav = elem.find('a.button-collapse');
        nav.sideNav({'edge': 'left'});
        elem.find('a.menu-item')
          .on('click', () => {
            setTimeout(() => {
              nav.sideNav('hide');
            }, 50);
          });
      }
    };
  });