'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.view1',
  'myApp.shouye',
  'myApp.match-introduction',
  'myApp.organization',
  'myApp.org-group',
  'myApp.guests',
  'myApp.guwenpw',
  'myApp.media',
  'myApp.communication',
  'myApp.match-info-coll',
  'myApp.match-video-coll',
  'myApp.competitor',
  'myApp.match-news',
  'myApp.match-notice',
  'myApp.support-enterprises',
  'myApp.view2',
  'myApp.version'


]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/shouye'});
}]).controller("switchActive",function ($scope) {
    $scope.toggle = function () {

    }
});
