'use strict';

class AboutCtrl {
  constructor($scope) {
    console.log('from about controller', $scope);    
  }
}

angular
  .module('app.components.about.ctrl', [])
  .controller('AboutCtrl', ['$scope', AboutCtrl]);