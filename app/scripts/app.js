'use strict';
var mainAppModuleName = 'webApp';
var mainAppModule = angular.module(mainAppModuleName, ['ngRoute']);
mainAppModule.config(['$locationProvider', function($locationProvider) {
    $locationProvider.hashPrefix('!');
}]);

angular.element(document).ready(function() {
    //angular.bootstrap(document, [mainAppModuleName]);
    console.log('READY');
});
