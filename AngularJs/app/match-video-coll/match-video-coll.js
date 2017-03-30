'use strict';

angular.module('myApp.match-video-coll', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/match-video-coll', {
    templateUrl: 'match-video-coll/match-video-coll.html',
    controller: 'match-video-collCtrl'
  });
}])

.controller('match-video-collCtrl', [function() {

}]);