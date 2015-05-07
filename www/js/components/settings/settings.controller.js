'use strict';

class SettingsCtrl {
  constructor ($scope) {
    console.log('from settings controller', $scope);    
  }
}

angular
  .module('app.components.settings.ctrl', [])
  .controller('SettingsCtrl', ['$scope', SettingsCtrl]);