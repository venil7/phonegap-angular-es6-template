'use strict';

class BaseCtrl {
  constructor() {
    console.log('from base ontroller');    
  }
}

angular
  .module('app.components.base.ctrl', [])
  .controller('BaseCtrl', BaseCtrl);