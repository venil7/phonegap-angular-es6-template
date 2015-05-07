angular
  .module('app.components.settings.state', [])
  .config(['$stateProvider', function ($stateProvider) {

    'use strict';

    $stateProvider
      .state('settings', {
        url: '/settings',
        title: 'Settings',
        views: {
          '@': {
            templateUrl: 'js/components/settings/views/settings.html',
            controller: 'SettingsCtrl'
          }
        }
      });
  }]);
