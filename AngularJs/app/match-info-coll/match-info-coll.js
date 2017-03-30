'use strict';

angular.module('myApp.match-info-coll', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/match-info-coll', {
    templateUrl: 'match-info-coll/match-info-coll.html',
    controller: 'match-info-collCtrl'
  });
}])

.controller('match-info-collCtrl', [function() {

}]);