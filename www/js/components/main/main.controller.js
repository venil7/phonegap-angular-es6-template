/// <reference path="../../../../typings/angularjs/angular.d.ts"/>
'use strict';

class MainCtrl {
  constructor($scope, $window) {
    console.log('main controller', $scope, $window);
    this.text = "some text";
  }
}

//MainCtrl.inject = ['$scope', '$window']

angular
  .module('app.components.main.ctrl', [])
  .controller('MainCtrl', ['$scope', '$window', MainCtrl]);