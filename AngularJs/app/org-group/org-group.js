'use strict';

angular.module('myApp.org-group', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/org-group', {
    templateUrl: 'org-group/org-group.html',
    controller: 'org-groupCtrl'
  });
}])

.controller('org-groupCtrl', [function() {

}]);