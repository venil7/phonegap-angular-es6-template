angular
  .module('app.components.about.state', [])
  .config(['$stateProvider', function ($stateProvider) {

    'use strict';

    $stateProvider
      .state('about', {
        url: '/about',
        title: 'About',
        views: {
          '@': {
            templateUrl: 'js/components/about/views/about.html',
            controller: 'AboutCtrl'
          }
        }
      });
  }]);
