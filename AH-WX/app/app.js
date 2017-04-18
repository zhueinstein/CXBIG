'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ui.router',
  'myApp.matchIntroduction',
  'myApp.matchColl',
  'myApp.news',
  'myApp.version'
]).
config(['$locationProvider', '$stateProvider','$urlRouterProvider', function($locationProvider, $stateProvider,$urlRouterProvider) {
    $stateProvider.state('apply', {
        url:"/apply",
        templateUrl: 'apply/apply.html',
    }).state('competitor', {
        url:"/competitor",
        templateUrl: 'competitor/competitor.html',
    }).state('home', {
        url:"/home",
        templateUrl: 'home/home.html',
    }).state('supportEnterprise', {
        url:"/supportEnterprise",
        templateUrl: 'supportEnterprise/supportEnterprise.html',
    });
    $urlRouterProvider.otherwise("/home")
}]);
