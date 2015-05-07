angular
  .module('app.components.main.state', [])
  .config(['$stateProvider', function ($stateProvider) {

    'use strict';

    $stateProvider
      .state('main', {
        url: '/main',
        title: 'Main',
        views: {
          '@': {
            templateUrl: 'js/components/main/views/main.html',
            controller: 'MainCtrl as main',
            controllerAs: 'main'
          }
        }
      });

  }]);
