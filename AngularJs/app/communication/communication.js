'use strict';

angular.module('myApp.communication', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/communication', {
    templateUrl: 'communication/communication.html',
    controller: 'communicationCtrl'
  });
}])

.controller('communicationCtrl', [function() {

}]);