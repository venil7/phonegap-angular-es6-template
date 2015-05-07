'use strict';

angular.module('app', [
    'app.vendor',
    'app.state',
    'app.components'
]);

// vendor libraries
angular.module('app.vendor', [
    'ui.router',
    // 'ngMaterial',
    'ngAnimate'
]);

// own components
angular.module('app.components', [
    'app.components.base',
    'app.components.menu',
    'app.components.main',
    'app.components.settings',
    'app.components.progress',
    'app.components.about'
]);
