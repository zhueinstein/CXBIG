'use strict';

angular.module('myApp.guests', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/guests', {
    templateUrl: 'guests/guests.html',
    controller: 'guestsCtrl'
  });
}])

.controller('guestsCtrl', [function() {

}]);