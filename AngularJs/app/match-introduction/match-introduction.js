'use strict';

angular.module('myApp.match-introduction', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/match-introduction', {
    templateUrl: 'match-introduction/match-introduction.html',
    controller: 'match-introductionCtrl'
  });
}])

.controller('match-introductionCtrl', [function() {

}]);