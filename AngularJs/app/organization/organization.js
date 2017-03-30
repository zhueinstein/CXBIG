'use strict';

angular.module('myApp.organization', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/organization', {
    templateUrl: 'organization/organization.html',
    controller: 'organizationCtrl'
  });
}])

.controller('organizationCtrl', [function() {

}]);