'use strict';

angular.module('myApp.media', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/media', {
    templateUrl: 'media/media.html',
    controller: 'mediaCtrl'
  });
}])

.controller('mediaCtrl', [function() {

}]);