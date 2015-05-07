angular
  .module('app.state', [])
  .config(['$urlRouterProvider', ($urlRouterProvider) => {
        'use strict';
        $urlRouterProvider
            .when('/', '/main')
            .when('', '/main')
            .otherwise('/main');
      }]);
